import React from 'react';
import { myContext } from "../Context/ProductContext"
import { useContext } from "react"
import ReactDOM from 'react-dom';

const Modal = () => {

  const {setShowModal,customersArr,setCustomerArr} = useContext(myContext)
  
  let totalQty = customersArr.reduce((acc, curr) => {
    console.log(`current item: ${JSON.stringify(curr)}`);
    const lQty = Number(curr.lQty) || 0;
    const mQty = Number(curr.mQty) || 0;
    const sQty = Number(curr.sQty) || 0;
    console.log(`lQty: ${lQty}, mQty: ${mQty}, sQty: ${sQty}`);
    return acc + lQty + mQty + sQty
}, 0);




  const handleDecrease =(id)=>{
    setCustomerArr(prev=>prev.map((each)=>each.id ===id ? {...each,qty: each.qty > 0 ? each.qty-1 : 0} : each))
  }

  const handleIncrease =(id)=>{
    
    setCustomerArr(prev=>prev.map((each)=>each.id===id ? {...each, qty:each.qty+1} : each))
  }

  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-medium bg-backdrop'>
    <div className='border-2 w-96  bg-gray-500 text-gray-50 shadow-lg z-50 rounded-lg'>
      <header className='p-2 ml-2 text-2xl font-semibold' id='modal-title'>Your Cart</header>
      <div className='text-xl ml-4 max-h-80 overflow-auto'>
        { customersArr.map((item)=>
        <li key={item.id} >
           <div className='bg-slate-400 p-3 rounded-lg m-2'>
            <h2>{item.name}</h2> 
            <p>Quantity: </p>
            <p> L-{item.lQty}</p>
            <p> M-{item.mQty}</p>
            <p>S-{item.sQty}</p>
            <p>Item Total:${item.price}</p>
            <p>Amount : ${item.price * item.lQty + item.price * item.mQty + item.price * item.sQty}</p>
            
            {/* <button className='px-4 py-2 rounded-md mr-4 mt-4 bg-green-600'
              onClick={()=>handleIncrease(item.id)}
            >+</button>

            <button className='px-4 py-2 rounded-md ml-4 mt-4 bg-red-600'
               onClick={()=> handleDecrease(item.id)}
            >-</button> */}
          </div>
          
        </li>
         
        )}
      </div>

      <footer className='mt-4 mb-4 bg-gray-700 p-3 rounded-b-lg'>
        <div className='bg-slate-400 p-3 rounded-lg m-2'>
        Total Amount: ${customersArr.reduce((total, item) => total +item.price * totalQty, 0)}
          </div>
        <button 
          className='px-2 ml-2 mr-2 border-red-500 bg-red-500 text-white rounded-xl'
          onClick={()=>setShowModal(false)}
          >Close</button>

        <button className='px-2 ml-2 mr-2 border-blue-500 bg-blue-500 text-white rounded-xl'>Order</button>
      </footer>
    </div>
  </div>,
  document.querySelector(".myPortalModal")
  )
}

export default Modal;