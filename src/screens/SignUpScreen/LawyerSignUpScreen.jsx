import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function LawyerSignUpScreen() {
  
  const navigate = useNavigate();
      //Secret keys for Cloudinary
  const preset_key = "bisineimages" ;
  const cloudname = "ddkpclbs2";

  const [profileFile, setProfileFile] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null)

  const [isLoading,setIsLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState("")
  const [certificateUrl, setCertificateUrl] = useState("");

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
    profileFile && uploadImage(setProfileImageUrl,profileFile,setIsLoading);
  },[profileFile])

  useEffect(()=> {
     certificateFile && uploadImage(setCertificateUrl,certificateFile,setIsLoading);
  },[certificateFile])

  const submitData = async (e) => {
    e.preventDefault();
    console.log("Profile URL : ",profileImageUrl);
    console.log("Certificate URL : ",certificateUrl);
    
  }
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-3xl font-bold text-gray-900 mt-2 text-center">PinkBud</div>
          <div className="bg-white p-8 mt-6 mb-4 rounded-lg shadow-md">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-center">Lawyer Sign Up</h1>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="full-name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="email"
                  placeholder="johndoe@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="password"
                  required
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="profile-image">
                  Profile Image
                </label>
                <input
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="profile-image"
                  required
                  type="file"
                  onChange={(e) => handleImageChange(e,setProfileFile)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="certificate-images">
                  Certificate Images
                </label>
                <input
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="certificate-images"
                  multiple
                  required
                  type="file"
                  onChange={(e) => handleImageChange(e,setCertificateFile)}
                />
              </div>
              <div className="space-y-2">
                {isLoading ? <p> Uploading Image </p> : <></>}
              </div>
              <button
                className="w-full bg-secondary text-white rounded-md py-2 px-4 hover:bg-primary focus:outline-none focus:ring focus:ring-secondary"
                type="submit"
                onClick={(e)=>submitData(e)}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center flex gap-1 mt-5 justify-center">
                <p className="text-sm">Already have an account?</p>
                <a onClick={() => navigate("/login")} className="font-medium text-sm text-secondary hover:text-primary" href="#">
                  Sign In
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }
  
  