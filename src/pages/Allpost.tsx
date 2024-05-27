import { useEffect, useState } from 'react'
import { useAppSelector } from '../store/hooks';
import { useNavigate } from "react-router-dom";
import PostCard from '../components/PostCard';
import axios from 'axios';

function Allpost() {
  const [posts , setPosts] = useState([])
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const handleCLick = (postId: string)=>{
    navigate('/mypostUpdate', {state:{postId: postId}});
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
        const res = await axios.get('https://blackbox.shubhammingi.workers.dev/post/myposts', axiosConfig)
        setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    dataFetch();
  },[])
  return (
    <div className='px-10'>
      {posts.map((post: any)=>(
        <div key={post.id} className='cursor-pointer'  onClick={()=>{handleCLick(post.id)}}>
        <PostCard  title={post.title} createdAt={post.createdAt} content={post.content} name=" "/>
        </div>
      ))}
    </div>
  )
}

export default Allpost