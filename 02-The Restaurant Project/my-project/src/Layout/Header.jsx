import Modal from "../Components/Modal"
import { myContext } from "../Context/myContext"
import { useState , useContext } from "react"


const Header = ({setShowModal ,showModal}) => {
  
  const {qty, totalCount} = useContext(myContext)
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
    <h1 className="text-white text-xl">CONTEXT CART</h1>
    
    
    <button 
      className="flex items-center text-white" 
      onClick={()=>setShowModal(!showModal)}
    >
      <span className="ml-2 ">
      🛒 Your Cart Item count is {totalCount}
      </span>
    </button>
</header>
  )
}

export default Header