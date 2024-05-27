import { useEffect, useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import { useAppSelector } from '../store/hooks';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Write() {
  const [title, setTitle] = useState<string>('');
  const [content, setCotent] = useState<string>('');
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const writeSubmit = async()=>{
    const token = "Bearer" + " " + localStorage.getItem("Token");
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }
    const body = {
      title,
      content
    }
    try {
      const res = await axios.post('https://blackbox.shubhammingi.workers.dev/post/create', body,axiosConfig,)
      alert(res.data.message);
      setTitle("");
      setCotent("");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(!isLogged) return navigate('/login')
  },[])
  return (
    <div className='p-5'>
      <div className='uppercase font-bold text-xl text-center'>Writing section of BLACK</div>
      <Input placeholder="Name your story" onchange={setTitle} value={title} label="Title" classname='my-5' type='text'/>
      <Input placeholder="Tell your story" onchange={setCotent} value={content} label="Content" classname='my-5 h-40' type='text'/>
      <Buttons title="Submit" onclick={writeSubmit} className='bg-green-800 text-white'/>
    </div>
  )
}

export default Write