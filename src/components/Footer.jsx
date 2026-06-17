import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div>
    <img src={assets.logo} className='mb-5 w-32' alt=""/>
    <p className='w-full md:w-2/3 text-gray-800'>Lorem Ipsum is simply dummy text of the printing and typesettind indusrty.Lorem Ipsum has been the.</p>
</div>
      
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DELIVERY</li>
            <li>PRIVACY</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5' >GET IN tOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>990000088</li>
            <li>1812821919</li>
            </ul>
      </div>
      <div>
        <hr></hr>
        <p>ended-page</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
