import Input from '../components/Input'
import Buttons from '../components/Buttons'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signuphandler = async()=>{
    const axiosConfig= {
        email,
        password,
        name
    }
  
    try {
      const response = await axios.post('https://blackbox.shubhammingi.workers.dev/user/signup', axiosConfig)
      console.log(response.data)
      navigate("/login")
    } catch (error: any) {
      console.error(error)
      setError(error.response.data.message)
    }
  }
  return (
    <div>
      
    <div className=''>
      
      <div className='flex h-screen justify-center'>
        <div className='px-20 py-20  w-full md:w-3/4 lg:w-1/2'>
          <div className='text-black font-bold text-2xl'>
            BLACKBOX
          </div>
          <div className='text-black font-bold text-xl mt-4'>
           Signup your Account
          </div>
          <Input placeholder="Name" onchange={setName} value={name} label="Name" classname='' type='text'/>
          <Input placeholder="Email" onchange={setEmail} value={email} label="Email" classname='' type='text'/>
          <Input placeholder="Password" onchange={setPassword} type="password" value={password} label='Password'  classname=''/>
          <div className='text-red-700 text-center'>{error}</div>
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