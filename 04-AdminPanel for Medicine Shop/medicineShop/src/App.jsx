import { useState } from 'react'
import './App.css'
import { myContext } from './Context/MyContext'
import Header from './Components/Header'
import Body from './Components/Body'
import Inventory from './Components/Inventory'
function App() {

  const [showModal, setShowModal] =useState(false)
  const [formData, setFormData] = useState([])
  const [cartArr, setCartArr] = useState([])
  return (
    <myContext.Provider 
    value={{
    showModal, 
    setShowModal , 
    formData, 
    setFormData,
    cartArr,
    setCartArr
    }}>
      
     <Header />
    <main>
      <Body />
      <Inventory />
    </main>
    </myContext.Provider>
  )
}

export default App
