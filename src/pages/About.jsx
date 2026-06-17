import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col  md:flex-row gap-16'>

<img className='w-full md:max-w-112.5' src={assets.about_img} />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet. It allows consumers to browse virtual storefronts and securely complete transactions using digital payments, operating 24/7 and breaking traditional geographic boundaries</p>
<p>E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet. It allows consumers to browse virtual storefronts and securely complete transactions using digital payments, operating 24/7 and breaking traditional geographic boundaries</p> 
<b className='text-gray-800'>Our Misson  </b>
<p>E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet. It allows consumers to browse virtual storefronts and securely complete transactions using digital payments, operating 24/7 and breaking traditional geographic boundaries</p>
</div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'}  text2={'CHOOS US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet. It allows consumers to browse virtual storefronts and securely complete transactions using digital payments, operating 24/7 and breaking traditional geographic boundaries</p>
        </div>
      </div>
      <NewsLetterbox/>
    </div>
   
  )
}

export default About
