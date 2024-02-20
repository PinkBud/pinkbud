import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { loadLayersModel } from '@tensorflow/tfjs-converter';
import Dropzone from 'react-dropzone';

const AIClassification = () => {
  const [model, setModel] = useState(null);
  const [classification, setClassification] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);

  // Load the model when the component mounts
  React.useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await loadLayersModel('/path/to/your/model/model.json');
        setModel(loadedModel);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  const handleFileDrop = async (acceptedFiles) => {
    if (!model) {
      console.error('Model not loaded yet.');
      return;
    }

    const image = new Image();
    image.src = URL.createObjectURL(acceptedFiles[0]);

    image.onload = async () => {
      classifyImage(image);
    };
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      setCameraStream(stream);

      const video = document.getElementById('camera-preview');
      video.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const captureImage = () => {
    const video = document.getElementById('camera-preview');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/jpeg');
    const blob = dataURLtoBlob(dataUrl);

    const image = new Image();
    image.src = URL.createObjectURL(blob);

    classifyImage(image);
  };

  const classifyImage = async (image) => {
    const tensor = tf.browser.fromPixels(image).resizeBilinear([224, 224]).expandDims();

    // Normalize the image data
    const normalizedTensor = tensor.div(255.0);

    // Make a prediction
    const prediction = model.predict(normalizedTensor);
    const classIndex = tf.argMax(prediction.dataSync()).dataSync()[0];
    const classNames = ['Male', 'Female'];  // Replace with your actual class names

    setClassification(classNames[classIndex]);
  };

  const dataURLtoBlob = (dataURL) => {
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(raw.length);

    for (let i = 0; i < raw.length; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={stopCamera}>Stop Camera</button>
      <button onClick={captureImage}>Capture Image</button>

      <video id="camera-preview" autoPlay playsInline style={{ display: 'none' }}></video>

      <Dropzone onDrop={handleFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} accept="image/*" />
            <p>Drop an image here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      
      {classification && <p>Classification: {classification}</p>}
    </div>
  );
};

export default AIClassification;
