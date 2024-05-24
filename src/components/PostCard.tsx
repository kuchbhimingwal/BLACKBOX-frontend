import React from 'react'

interface Props {
  title: string;
  createdAt: string;
  content: string;
  name: string;
}
function PostCard({title, createdAt, content, name}: Props) {
  return (
    <div className='grid grid-cols-3 my-10'>
      <div className='col-span-2'>
        <div className='font-extrabold text-3xl p-1'>
          {title}
        </div>
        <div className='text-gray-500 text-sm p-1'>
          {createdAt} 
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