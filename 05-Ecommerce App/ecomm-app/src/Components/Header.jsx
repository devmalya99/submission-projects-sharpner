

import React from 'react'

const Header = () => {
  return (
    <div className='flex  p-2 justify-between bg-gray-800'>
         <div className='flex-grow  flex justify-center space-x-24'>
         <div className='text-gray-100 text-2xl font-semibold'>
            HOME
        </div>

        <div className='text-gray-100 text-2xl font-semibold'>
            STORE
        </div>

        <div className='text-gray-100 text-2xl font-semibold'>
            ABOUT
        </div>

         </div>
       

        <div className='text-black-100 text-xl p-2 bg-yellow-400  rounded-xl font-semibold'>
            CART
        </div>

    </div>
  )
}

export default Header