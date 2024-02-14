

import React from 'react'
import mealItems from '../Data/menu'
const Body = () => {
  return (
    <>
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
      </div>

      <div className='menuList bg-slate-100 w-1/2 ml-44 rounded-xl '>
        <ul>

       { mealItems.map((each)=>(
        <li 
        key={Date.now()}
        className='flex justify-between items-center p-2 m-2 bg-slate-400 mx-2 my-4 rounded-xl'
        
        >
          <div>
          <h2> {each.name} </h2>
          <h3>{each.category}</h3>
          <h4>{each.price}</h4>
          </div>

          <div className='flex flex-col'>
            <div className='flex'>
              Qty:
          <input 
          className='w-12 ml-4  mb-2'
          type='number'
          placeholder='0'
          name='Qty'
          />
            </div>
           
          
          <button className='p-2 bg-rose-300 rounded-3xl'>Add Item++</button>

          </div>

          
          </li>

      ))}
        </ul>
      
      </div>
      
       
        

        </>
  )
}

export default Body