/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface BlogHeaderProps {
    createdAt: string
    author: {
        name: string
        avatar: string
        url: string
    }
}

const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
    const {createdAt, author} = props;
    const createdDate: Date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  return (  
    <div className='flex'>
        <img 
            className='rounded-[50%] mb-4 mr-4' 
            src={author.avatar}
            width={50}
            height={50}
            alt="profile picture" 
        />
        <div className='flex flex-col'>
            <p className='font-semibold text-[1rem]'>{author.name}</p>
            <div className='flex gap-4'>
                <li className='list-none font-normal text-[0.85rem]'>{author.url}</li>
                <li className='font-nomal ml-2 text-[0.85rem]'>{createdDate.toLocaleDateString("en-Us", options)}</li>
            </div>
        </div>
    </div>
  )
}

export default BlogHeader