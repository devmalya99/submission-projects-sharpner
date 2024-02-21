

import React from 'react'
import ItemCArd from './Card';
import productsArr from '../Data/Data';
const Body = () => {
  return (
    <div className='p-4 grid m-2 gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {productsArr.map((item)=>(
            <ItemCArd 
            
            key={item.id}  
            item={item}
            />
        ))}
        


    </div>
  )
}

export default Body