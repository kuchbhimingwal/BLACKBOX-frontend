import Input from '../components/Input'
import Buttons from '../components/Buttons'
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("shubhammingi@gmail.com");
  const [name, setName] = useState("shubham mingwal");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const signuphandler = ()=>{

  }
  return (
    <div>
      
    <div className=''>
      
      <div className='flex h-screen justify-center'>
        <div className=' sm:px-20 sm:py-24 px-10 py-14 w-1/2'>
          <div className='text-black font-bold text-2xl'>
            BLACKBOX
          </div>
          <div className='text-black font-bold text-xl mt-4'>
           Signup your Account
          </div>
          <Input placeholder="Name" onchange={setName} value={name} label="Name" classname='' type='text'/>
          <Input placeholder="Email" onchange={setEmail} value={email} label="Email" classname='' type='text'/>
          <Input placeholder="Password" onchange={setPassword} type="password" value={password} label='Password'  classname=''/>
          <div className='text-errorRed text-center'>{error}</div>
          <Buttons title="Sign up" onclick={signuphandler} className=''/>
          <div className='text-center text-grayText'>Already have a account?</div>
          <Buttons title="Login" onclick={()=>{navigate("/login")}} className=''/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup