import React from 'react'
import { spinner } from '../assets'

const Loader = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col mt-10'>
       <img src={spinner} alt=""  className='w-32 h-32 object-contain'/>
    </div>
  )
}

export default Loader