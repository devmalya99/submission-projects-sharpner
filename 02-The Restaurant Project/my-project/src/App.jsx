import { useState } from 'react'
import Body from '../src/Layout/Body'
import { myContext } from './Context/myContext'
import Header from '../src/Layout/Header'
function App() {
 
const [count ,setCount] = useState(0)
const [showModal, setShowModal] =useState(false)
const [qty,setQty]= useState(0);
const [totalCount, setTotalCount] =useState(0)

const addCount=()=>{
  setCount(prev=>prev+1)
}
  return (
    <myContext.Provider value={{qty,setQty,totalCount, setTotalCount}}>
    <Header 
    setShowModal={setShowModal}
    showModal={showModal} 
    />
    <Body 
    setShowModal={setShowModal}
    showModal={showModal} 
    />
    
    </myContext.Provider>
  )
}

export default App
