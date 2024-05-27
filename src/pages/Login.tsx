import Input from '../components/Input'
import Buttons from '../components/Buttons'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { loggeed } from '../store/slices/loggedinslice'
import { addUser } from '../store/slices/profileSlice';
function Login() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("shubhamingi@gmail.com");
  const [password, setPassword] = useState<string>("123456");
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
      dispatch(loggeed())

      const token = "Bearer" + " " + response.data.token;
      const axiosConfig2 = {
        headers: {
          Authorization: token
        }
      }
  
      try {
        const user = await axios.get('https://blackbox.shubhammingi.workers.dev/post/profile', axiosConfig2)
        console.log(user.data.res);
        dispatch(addUser(user.data.res))
      } catch (error) {
        console.log(error);
      }
      navigate("/")
    } catch (error: any) {
      console.error(error)
      setError(error.response.data.message)
      setEmail("");
      setPassword("");
    }

  }
  useEffect(()=>{
    if(isLogged) navigate('/')
  },[])
  return (
    <div className=''>
      
    <div className='flex h-screen justify-center'>
      <div className='px-20 py-20 w-full md:w-3/4 lg:w-1/2'>
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