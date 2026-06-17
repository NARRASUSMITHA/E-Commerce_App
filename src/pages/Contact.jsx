import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img  className='w-full md:max-w-120' src={assets.contact_img}  alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-x1 text-gray-600'>Our Store</p>
          <p className='text-gray-500'>516150 Andhra Pradhesh</p>
          <p className='text-gray-500'>Phone Number:xxxxxxxxx</p>
          <p className='text-gray-500'> Email:xxxxxxxxx</p>
          <p className='text-gray-500'>Know more about our Store</p>
        </div>
      </div>
    </div>
  )
}

export default contact
