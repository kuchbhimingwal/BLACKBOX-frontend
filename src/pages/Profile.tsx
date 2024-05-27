import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks';
import Buttons from '../components/Buttons';
import { useNavigate } from 'react-router-dom';
import { out } from '../store/slices/loggedinslice'
import { addUser } from '../store/slices/profileSlice';
function Profile() {
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state)=> state.addUser.value);
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const logOutHandler = async()=>{
    localStorage.clear();
    // @ts-ignore
    dispatch(addUser({}));
    dispatch(out());
    navigate('/login');
  }
  const allpostHandler = async() =>{
    navigate("/allpost")
  }

  useEffect(()=>{
    if(!isLogged) return navigate('/login')
  },[])
  return (
    <div>
      <div className='bg-dashBoardbg rounded-md h-fit mt-5'>
        <div className='p-5 font-bold text-lg'>My Profile</div>
        
        <div className='flex justify-center pb-10'>
            <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
              <div className='border-b border-grayText'>
                <h3 className='text-left m-4 font-bold'>{user.name ? user.name.toUpperCase() : "........"}</h3>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Name: {user.name ? user.name : "......"}</p>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Email: {user.email ? user.email : "......"}</p>
                <div className='px-20 mb-4'>
                <Buttons title="Log Out" onclick={logOutHandler} className="h-10 p-0"/>
                <Buttons title="All posts" onclick={allpostHandler} className="h-10 p-0"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile