import { useState } from 'react'
import Body from '../src/Layout/Body'
import { myContext } from './Context/myContext'
import Header from '../src/Layout/Header'
function App() {
 

const [showModal, setShowModal] =useState(false)

const [cartArr, setCartArr] = useState([]);
const [totalCount, setTotalCount] =useState(0)


  return (
    <myContext.Provider value={{totalCount, setTotalCount, cartArr , setCartArr}}>
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
