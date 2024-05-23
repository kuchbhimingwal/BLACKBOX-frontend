import Input from '../components/Input'
import Buttons from '../components/Buttons'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios';

function Login() {
  // const dispatch = useDispatch();
  // const isLogged = useSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("abcd@gmail.com");
  const [password, setPassword] = useState<string>("12345");
  const [error, setError] = useState("");
  const loginHandler = async()=>{
    localStorage.clear();
    const axiosConfig= {
        email,
        password
    }
  
    try {
      const response = await axios.post('https://blackbox.shubhammingi.workers.dev/user/login', axiosConfig)
      console.log(response.data)
      localStorage.setItem('Token',response.data.token);
      // navigate("/")
    } catch (error: any) {
      console.error(error)
      setError(error.response.data.message)
      setEmail("");
      setPassword("");
    }

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
        <div className='text-red-700 text-center'>{error}</div>
        <Buttons title="Log in" onclick={loginHandler} className=''/>
        <div className='text-center text-grayText'>Don’t have a account?</div>
        <Buttons title="Sign up" onclick={()=>{navigate("/signup")}} className=''/>
      </div>
    </div>
    </div>
  )
}

export default Login