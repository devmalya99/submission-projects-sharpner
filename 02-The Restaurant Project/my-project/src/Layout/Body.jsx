

import React from 'react'

const Body = () => {
  return (
    <div className="relative">
      <img
      className='w-full h-auto' 
      src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo" width={1280} height={240}/>
      <div className="absolute  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md mx-auto bg-white bg-opacity-80 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10 p-8" >
       <p> 
  Welcome to our fine dining oasis, the epitome of culinary excellence. Appreciate the fusion of traditional
  and contemporary cuisines, prepared with locally-sourced ingredients, delivering taste and health in every bite. 
  
  </p>
       
      </div>
      
       
        <button className='p-4 bg-rose-400'>Add Item</button>

    </div>
  )
}

export default Body