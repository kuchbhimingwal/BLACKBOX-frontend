import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import Allpost from "./pages/Allpost";
import MypostUpdate from "./pages/MypostUpdate";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from './store/hooks';
import { addUser } from './store/slices/profileSlice';
import axios from "axios"
function App() {
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    const dataFetch = async()=>{

    if(isLogged){
      const token = "Bearer" + " " + localStorage.getItem("Token");
      const axiosConfig = {
        headers: {
          Authorization: token
        }
      }
  
      try {
        const user = await axios.get('https://blackbox.shubhammingi.workers.dev/post/profile', axiosConfig)
        // console.log(user.data.res);
        dispatch(addUser(user.data.res))
      } catch (error) {
        console.log(error);
        
      }
      }
    }
    dataFetch()
  },[])
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/write" element={<Write />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/allpost" element={<Allpost />}/>
            <Route path="/mypostUpdate" element={<MypostUpdate />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
