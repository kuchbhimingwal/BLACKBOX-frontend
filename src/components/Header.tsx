import React from 'react'
import { useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const user: any = useAppSelector((state)=> state.addUser.value)
  return (
    <div className='flex justify-between border-b border-black'>
      <div onClick={()=>navigate('/')} className='cursor-pointer'>
        <div className='m-2 flex items-center justify-center text-lg bg-black text-white rounded-full w-10 h-10  text-center'>B</div>
      </div>
      <div className='flex'>
        <div className='p-4 cursor-pointer' onClick={()=>navigate('/write')}>Write</div>
        <div className='p-4 cursor-pointer' onClick={()=>navigate('/profile')}>{user.name}</div>
      </div>
    </div>
  )
}

export default Header