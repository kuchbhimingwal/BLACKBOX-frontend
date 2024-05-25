import React from 'react'
import { useAppSelector } from '../store/hooks';
function Header() {
  const user: any = useAppSelector((state)=> state.addUser.value)
  return (
    <div className='flex justify-between border-b border-black'>
      <div>
        <div className='m-2 flex items-center justify-center text-lg bg-black text-white rounded-full w-10 h-10  text-center'>B</div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 p-4'>Write</div>
        <div className='col-span-1 p-4'>{user.name}</div>
      </div>
    </div>
  )
}

export default Header