import Input from '../components/Input'
import Buttons from '../components/Buttons'
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

function Login() {
  // const dispatch = useDispatch();
  // const isLogged = useSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const [email, setEmail] = useState("shubhammingi@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const loginHandler = ()=>{

  }
  return (
    <div className=''>
      
    <div className='flex h-screen justify-center'>
      <div className=' sm:px-20 sm:py-24 px-10 py-14 w-1/2'>
        <div className='text-black font-bold text-2xl'>
          BLACKBOX
        </div>
        <div className='text-black font-bold text-xl mt-4'>
         Log in to your Account
        </div>
        <Input placeholder="Email" onchange={setEmail} value={email} label="Email" classname='' type='text'/>
        <Input placeholder="Password" onchange={setPassword} type="password" value={password} label='Password'  classname=''/>
        <div className='text-errorRed text-center'>{error}</div>
        <Buttons title="Log in" onclick={loginHandler} className=''/>
        <div className='text-center text-grayText'>Don’t have a account?</div>
        <Buttons title="Sign up" onclick={()=>{navigate("/signup")}} className=''/>
      </div>
    </div>
    </div>
  )
}

export default Login