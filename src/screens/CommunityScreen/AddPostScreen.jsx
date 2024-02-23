import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

export default function AddPostScreen() {
    //Secret keys for Cloudinary
  const preset_key = "bisineimages" ;
  const cloudname = "ddkpclbs2";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    title: '',
    contact_no: '',
    description: '',
    prize: 0,
    certification: false,
    date: ''
  });

  

  const handleSubmit = () => {
    axios.post('http://127.0.0.1:8000/posts/', {
        title: title,
        description: description,
        img: imageUrl
    })
      .then(response => {
        navigate("/community")
        console.log(response.data); // Log the response data
        // Handle success response if needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error if needed
      });
  };

  const uploadImage = async (stateFunc, file, loadStateFunc) => {
    loadStateFunc(true)
    const formData = new FormData()
    formData.append("file",file)
    formData.append("upload_preset",preset_key)
    try{
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,formData);
        loadStateFunc(false);
        await stateFunc(res.data.secure_url);
        console.log(res.data.secure_url)
    } catch (error) {
        console.log(error)
    }
    
    //.then(res => dispatch(stateFunc(res.data.secure_url))).then(r => loadStateFunc(true))
    //.catch(err => console.log(err))
  }

  const handleImageChange = (e , stateFunc) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        stateFunc(imageDataUrl);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  useEffect(()=> {
    imageFile && uploadImage(setImageUrl,imageFile,setIsLoading);
  },[imageFile ])

  return (<div className='min-h-screen flex justify-center items-center'>
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Add Post</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input  id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea className="min-h-[100px]" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter the description" required />
        </div>
        <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="certificate-images">
                  Add Image
                </label>
                <input
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="certificate-images"
                  multiple
                  required
                  type="file"
                  onChange={(e) => handleImageChange(e,setImageFile)}
                />
              </div>
              {isLoading ? <p>Uploading</p> : <></>}
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full" onClick={handleSubmit}>Add Posts</Button>
      </CardFooter>
    </Card>
    </div>
  );
}
