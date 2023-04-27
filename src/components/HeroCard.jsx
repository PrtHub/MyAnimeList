import React from 'react'

const HeroCard = ({img, title, data, story, url}) => {
  return (
    <>
        <div className='relative sm:rounded-lg'>
            <img src={img} alt="" className='object-cover w-full h-[400px] sm:h-[550px]'/>
            <div className='absolute bottom-12 sm:bottom-32 left-5 text-white flex flex-col items-start text'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-left '>{data}</p>
            <p className='max-w-sm text-left my-5 text-xs sm:text-base'>{story}</p>
            <button>{url}</button>
            </div>
        </div>
      </>
  )
}

export default HeroCard