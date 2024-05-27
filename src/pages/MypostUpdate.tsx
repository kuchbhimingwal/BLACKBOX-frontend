import { useEffect, useState } from 'react'
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks';
import dateFormat from "dateformat";
import axios from "axios"
function MypostUpdate() {
  const [title, setTitle] = useState<string>('');
  const [content, setCotent] = useState<string>('');
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.state.postId;
  const [post, setPost] = useState<any>({});

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
      const res = await axios.put(`https://blackbox.shubhammingi.workers.dev/post/update/${postId}`,body, axiosConfig)
      alert(res.data.message)
      setTitle("");
      setCotent("");
      navigate('/allpost')
    } catch (error) {
      console.log(error);
    }
  }
  const deleteHandle = async()=>{
    const token = "Bearer" + " " + localStorage.getItem("Token");
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }
    try {
      const res = await axios.delete(`https://blackbox.shubhammingi.workers.dev/post/delete/${postId}`, axiosConfig)
      alert(res.data.message)
      setTitle("");
      setCotent("");
      navigate('/allpost')
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(!isLogged) return navigate('/login')
      const dataFetch = async()=>{
        const token = "Bearer" + " " + localStorage.getItem("Token");
        const axiosConfig = {
          headers: {
            Authorization: token
          }
        }
        try {
          const res = await axios.get(`https://blackbox.shubhammingi.workers.dev/post/uniquepost/${postId}`, axiosConfig)
          console.log(res);
          setPost(res.data.res);
        } catch (error) {
          console.log(error);
        }
      }
      dataFetch();
  },[])
  
  return (
    <div className='grid grid-cols-1 my-10 border-b border-gray-300'>
      <div className='col-span-1 border-b border-gray-300 p-5'>
        <div className='flex'>
          <div className='flex items-center justify-center text-sm mr-2 bg-black text-white rounded-full w-5 h-5  text-center'>{" ".charAt(0)}</div>
          {" "} {dateFormat(post.createdAt, " mmmm dS,dddd, yyyy")}
        </div>
        <div className='font-extrabold text-3xl p-1 mr-2'>
          {post.title}
        </div>
        <div className='p-1 text-gray-600 leading-5 font-semilight text-sm'>
          {post.content}
        </div>

        <Buttons title="Delete this post" onclick={deleteHandle} className='bg-green-800 text-white'/>
      </div>
      <div className='text-center'>
        <div className='p-5'>
          <div className='uppercase font-bold text-xl text-center'>Edit this post</div>
          <Input placeholder="Name your story" onchange={setTitle} value={title} label="Title" classname='my-5' type='text'/>
          <Input placeholder="Tell your story" onchange={setCotent} value={content} label="Content" classname='my-5 h-40' type='text'/>
          <Buttons title="Submit" onclick={writeSubmit} className='bg-green-800 text-white'/>
        </div>
      </div>
    </div>
  )
}

export default MypostUpdate