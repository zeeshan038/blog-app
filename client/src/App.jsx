import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import UserAuthForm from './pages/userAuthForm'
export default function App() {
  return (
    <div>
   <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/signin' element={<UserAuthForm type ="sign-in"/>}/>
          <Route path='/signup' element={<UserAuthForm type ="sign-up"/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
