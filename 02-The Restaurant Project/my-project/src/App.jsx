import { useState } from 'react'
import Body from '../src/Layout/Body'
import './App.css'
import Header from '../src/Layout/Header'

function App() {
 
const [count ,setCount] = useState(0)

const addCount=()=>{
  setCount(prev=>prev+1)
}
  return (
    <>
    <Header count={count} />
    <Body addCount={addCount}/>
    </>
  )
}

export default App
