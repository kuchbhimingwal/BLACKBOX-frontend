import React from 'react'
import dateFormat from "dateformat";
interface Props {
  title: string;
  createdAt: string;
  content: string;
  name: string;
}


function PostCard({title, createdAt, content, name}: Props) {
  return (
    <div className='grid grid-cols-3 my-10 border-b border-gray-300'>
      <div className='col-span-2'>
        <div className='flex'>
          <div className='flex items-center justify-center text-sm mr-2 bg-black text-white rounded-full w-5 h-5  text-center'>{name.charAt(0)}</div>
          {name} {dateFormat(createdAt, " mmmm dS,dddd, yyyy")}
        </div>
        <div className='font-extrabold text-3xl p-1 mr-2'>
          {title}
        </div>
        <div className='p-1 text-gray-600 leading-5 font-semilight text-sm'>
          {content}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='text-gray-500 text-sm'>
          Author
        </div>
        <div className=''>
          <div className='font-bold text-lg'>
            {name}
          </div>
          <div className='text-gray-400'>
            Master mirth, fdnejdnqed, fcewq f,ew f
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard