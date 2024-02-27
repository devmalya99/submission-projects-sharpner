
import React ,{useContext,useState} from 'react'
import { myContext } from '../Context/MyContext'

const Header = () => {

  const {showModal,setShowModal,formData,setFormData, cartArr}=useContext(myContext)

    const handleClick = () => {
      setShowModal(!showModal)
      console.log(cartArr);
    }

    let totalQty =cartArr.reduce((acc,each)=>acc+each.qty,0)
    console.log(totalQty);

  return (
    <header className='header-container mx-auto flex items-center justify-between bg-purple-500 p-4 fixed top-0 w-full z-50'>
        <div>
            <h1 className='text-2xl text-white font-bold'>
               <a >Your Medicine Shop</a>
            </h1>
        </div>
        <button 
      className="flex items-center text-white" 
      onClick={handleClick}
    >
      <span
      className="ml-2">
      🛒 Your Cart Item count is {Number(totalQty)}
      </span>
    </button>
    </header>
  )
}

export default Header