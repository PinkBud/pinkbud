import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store} from './redux/store.js'
import { Provider } from 'react-redux'
import UserLoginScreen from './screens/LoginScreen/userLoginScreen.jsx'
import SignUpOptions from './screens/SignUpScreen/SignUpOptions.jsx'
import UserSignUpScreen from './screens/SignUpScreen/UserSignUpScreen.jsx'
import TherapistSignUpScreen from './screens/SignUpScreen/TherapistSignUpScreen.jsx'
import LawyerSignUpScreen from './screens/SignUpScreen/LawyerSignUpScreen.jsx'
import NGOSignUpScreen from './screens/SignUpScreen/NGOSignUpScreen.jsx'
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<UserLoginScreen/>}/>
      <Route path='/register' element={<SignUpOptions/>}/>
      <Route path='/register/user' element={<UserSignUpScreen/>}/>
      <Route path="/register/therapist" element={<TherapistSignUpScreen/>}/>
      <Route path='/register/lawyer' element={<LawyerSignUpScreen/>}/>
      <Route path='/register/NGO' element={<NGOSignUpScreen/>}/>
      <Route path='/' element={<HomeScreen/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>,
)
