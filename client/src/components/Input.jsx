import React, { useState } from 'react'

function Input({name , type , id , value , placeholder , icon}) {
    const [passwordVisible , setPasswordvisibility] = useState(false);
    const handlePassword = ()=>{

        setPasswordvisibility(!passwordVisible)
    }
  return (
    <div className='relative w-[100%] mb-4'>
           <input 
           name={name} 
           type={type == "password" ? passwordVisible ? "text" : "password" : type }
           id={id}
           value={value}
           placeholder={placeholder} 
           className='input-box'/>
           <i className= {"fi " + icon + " input-icon" }></i>
           {
            type == "password" ?
            <i className={`fi fi-rr-eye${!passwordVisible ? "-crossed" : ""} input-icon left-[auto] right-4 cursor-pointer`} onClick={handlePassword}></i>
            : ""
            
             
           }
    </div>
  )
}

export default Input