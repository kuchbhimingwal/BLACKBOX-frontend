import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { useAppSelector } from '../store/hooks';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Home() {
  const [posts , setPosts] = useState([])
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();

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
      const res = await axios.get('https://blackbox.shubhammingi.workers.dev/post/bulk', axiosConfig)
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  }
  dataFetch();
  },[])
  return (
    <div className='px-10'>
      <div className='font-extrabold text-4xl mt-4'>ALL POSTS</div>
      {posts.map((post: any)=>(
        <PostCard key={post.id} title={post.title} createdAt={post.createdAt} content={post.content} name={post.author.name} />
      ))}
    </div>
  )
}

export default Home