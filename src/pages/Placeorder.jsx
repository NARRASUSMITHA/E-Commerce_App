
      
       
    
import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

const Placeorder = () => {

  const [method, setMethod] = useState('cod')
  const { navigate } = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>

        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />

        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street Address' />

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Pin Code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone Number' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Alternative Number' />
        </div>

      </div>

      {/* Right Side */}
      <div className='mt-8 w-full sm:w-auto'>

        <div className='min-w-75'>
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className='mt-12'>

          <Title text1={'PAYMENT'} text2={'METHOD'} />

          <div className='flex flex-col gap-3 mt-5'>

            {/* PhonePe */}
            <div
              onClick={() => setMethod('phonepe')}
              className={`flex items-center gap-3 border rounded px-4 py-3 cursor-pointer transition-all
              ${method === 'phonepe'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-300'
                }`}
            >
              <input
                type='radio'
                checked={method === 'phonepe'}
                readOnly
              />
              <p className='font-medium text-purple-700'>PhonePe</p>
            </div>

            {/* GPay */}
            <div
              onClick={() => setMethod('gpay')}
              className={`flex items-center gap-3 border rounded px-4 py-3 cursor-pointer transition-all
              ${method === 'gpay'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-300'
                }`}
            >
              <input
                type='radio'
                checked={method === 'gpay'}
                readOnly
              />
              <p className='font-medium text-blue-600'>Google Pay (GPay)</p>
            </div>

            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border rounded px-4 py-3 cursor-pointer transition-all
              ${method === 'cod'
                  ? 'border-black bg-gray-100'
                  : 'border-gray-300'
                }`}
            >
              <input
                type='radio'
                checked={method === 'cod'}
                readOnly
              />
              <p className='font-medium'>Cash On Delivery</p>
            </div>

          </div>

          <p className='mt-4 text-sm text-gray-600'>
            Selected Payment Method: <span className='font-semibold'>{method}</span>
          </p>

          <div className='w-full text-end mt-8'>
            <button
              onClick={() => navigate('/Orders')}
              className='bg-black text-white px-16 py-3 text-sm rounded'
            >
              PLACE ORDER
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Placeorder