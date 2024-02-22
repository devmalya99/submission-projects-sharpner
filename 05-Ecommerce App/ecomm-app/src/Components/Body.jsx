

import React, { useContext } from 'react'
import ItemCArd from './Card';
import productsArr from '../Data/Data';
import { MyContext } from '../Context/MyContext';
import Modal from './Modal';
import { Button } from '@material-tailwind/react';
const Body = () => {
  const {showModal,setShowModal,cartArr} = useContext(MyContext)
const handleClick =()=>{
  console.log(cartArr);
}
  return (
    <div className='p-4 grid m-2 gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {productsArr.map((item)=>(
            <ItemCArd 
            
            key={item.id}  
            item={item}
            />
        ))}

        {showModal && 
        <Modal/>
          }
          
        


    </div>
  )
}

export default Body