import { useState } from 'react'
import Header from './Component/Header'
import SellerBox from '../src/Component/SellerBox'
import './App.css'
import {myContext} from '../src/Context/ProductContext'
import CustomerBox from './Component/CustomerBox'
import Modal from '../src/Component/Modal'

function App() {
  const [showModal, setShowModal] =useState(false)

  const [sellerArr, setSellerArr] = useState([])

  const [customersArr, setCustomerArr] = useState([])
 

  return (
    <myContext.Provider value={{setSellerArr,sellerArr, customersArr,setCustomerArr,showModal,setShowModal}}>
      <Header/>
      
      <main className='p-4 mt-24 '>
        <SellerBox />
      <CustomerBox/>
      </main>
      
    </myContext.Provider>
  )
}

export default App
