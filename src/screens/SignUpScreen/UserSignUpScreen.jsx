import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function UserSignUpScreen() {
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/`,{
        email : email,
        password: password,
        name: name
      });
      if (response.data.success){
        navigate("/");
        localStorage.setItem("isNgo",false);
        localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("user",JSON.stringify(response.data.details))
      }
    } catch (error) {
      alert("Error creating user... ");
    }
  }

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-3xl font-bold text-gray-900 mt-2 text-center">PinkBud</div>
          <div className="bg-white p-8 mt-6 mb-4 rounded-lg shadow-md">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-center">Create Account</h1>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="full-name">
                  Full Name
                </label>
                <input
                value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  id="password"
                  required
                  type="password"
                  placeholder="********"
                />
              </div>
              <button
                onClick={()=> submitData()}
                className="w-full bg-secondary text-white rounded-md py-2 px-4 hover:bg-primary focus:outline-none focus:ring focus:ring-secondary  "
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center flex gap-1 justify-center mt-5">
                <p className="text-sm">Already have an account?</p>
                <a onClick={() => navigate("/login")} className="font-medium text-sm text-secondary hover:text-primary" href="#">
                  Sign Up
                </a>
              </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  