import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({setShowModal}) => {
  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-medium bg-backdrop'>
    <div className='border-2 w-96  bg-gray-500 text-gray-50 shadow-lg z-50 overflow-auto rounded-lg'>
      <header className='p-2 ml-2 text-2xl font-semibold' id='modal-title'><h2>Sushi</h2></header>
      <div className='flex text-xl ml-4'>
          <h1>Total Amount :</h1>
          <h1> $ 35.62</h1>
      </div>
      <footer className='mt-4 mb-4'>
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