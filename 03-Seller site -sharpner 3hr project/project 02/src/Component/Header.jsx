import React ,{useContext} from 'react'
import { myContext } from '../Context/ProductContext'


const Header = () => {

  const {customersArr,showModal, setShowModal} = useContext(myContext)
  let totalQty = customersArr.reduce((acc, curr) => {
    console.log(`current item: ${JSON.stringify(curr)}`);
    const lQty = Number(curr.lQty) || 0;
    const mQty = Number(curr.mQty) || 0;
    const sQty = Number(curr.sQty) || 0;
    console.log(`lQty: ${lQty}, mQty: ${mQty}, sQty: ${sQty}`);
    return acc + lQty + mQty + sQty
}, 0);


  const handleClick =()=>{
    setShowModal(!showModal)
    console.log('Modal should be', !showModal ? 'visible' : 'hidden');
    let arr= customersArr;
    console.log(arr);
  }
  return (
    <header className='header-container mx-auto flex items-center justify-between bg-purple-500 p-4 fixed top-0 w-full z-50'>
        <div>
            <h1 className='text-2xl text-white font-bold'>
               <a >Your Ecomm Site</a>
            </h1>
        </div>
        <button 
      className="flex items-center text-white" 
      onClick={handleClick}
    >
      <span className="ml-2 ">
      🛒 Your Cart Item count is {totalQty}
      </span>
    </button>
    </header>
  )
}

export default Header


