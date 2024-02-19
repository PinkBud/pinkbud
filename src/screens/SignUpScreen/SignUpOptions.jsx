import { useNavigate } from "react-router-dom"

export default function SignUpOptions() {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center ">
        <div className="max-w-md w-full mx-auto">
          <div className="text-3xl font-bold text-gray-900 mt-2 text-center">PinkBud</div>
          <div className="bg-bg2 p-8 mt-6 mb-4 rounded-lg shadow-md">
            <div className="space-y-4">
              <h1 className="text-2xl  font-bold text-center">Choose your account type</h1>
              <div>
                <button onClick={()=>navigate("/register/user")} className="w-full font-semibold py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary transition ease-in-out duration-300">
                  Sign up as User
                </button>
              </div>
              <div>
                <button onClick={() => navigate("/register/lawyer")}  className="w-full font-semibold py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary transition ease-in-out duration-300">
                  Sign up as Lawyer
                </button>
              </div>
              <div>
                <button onClick={() => navigate("/register/therapist")} className="w-full font-semibold py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary transition ease-in-out duration-300">
                  Sign up as Therapist
                </button>
              </div>
              <div>
                <button onClick={() => navigate("/register/NGO")} className="w-full font-semibold py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary transition ease-in-out duration-300">
                  Sign up as NGO
                </button>
              </div>
              <div className="text-center flex gap-1 justify-center">
                <p className="text-sm">Already have an account?</p>
                <a onClick={() => navigate("/login")} className="font-medium text-sm text-secondary hover:text-primary" href="#">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  