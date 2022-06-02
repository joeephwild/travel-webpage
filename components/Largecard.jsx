import React from 'react'

import Image from 'next/image'

const Largecard = ({img, title, text, buttontext}) => {
  return (
    <div className='relative py-16 cursor-pointer'>
        <div className="relative h-96 min-w-[300px]">
            <Image src={img} layout="fill" objectFit='cover' className='rounded-2xl' />
        </div>
        <div className='absolute text-center top-32 left-12'>
            <h3 className='text-3xl mb-3 w-64'>{title}</h3>
            <button className='text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5'>{buttontext}</button>
           <h3 className='text-sm'>{text}</h3>
        </div>
    </div>
  )
}

export default Largecard