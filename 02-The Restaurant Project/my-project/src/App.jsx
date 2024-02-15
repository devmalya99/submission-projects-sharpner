import { useState } from 'react'
import Body from '../src/Layout/Body'
import './App.css'
import Header from '../src/Layout/Header'
function App() {
 
const [count ,setCount] = useState(0)
const [showModal, setShowModal] =useState(false)

const addCount=()=>{
  setCount(prev=>prev+1)
}
  return (
    <>
    <Header 
    setShowModal={setShowModal}
    showModal={showModal} 
    />
    <Body 
    setShowModal={setShowModal}
    showModal={showModal} 
    />
    
    </>
  )
}

export default App
