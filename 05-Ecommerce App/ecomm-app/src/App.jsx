
import { Button } from "@material-tailwind/react";
 
import { useState } from "react";
import './App.css'
import Header  from "./Components/Header";
import Body  from "./Components/Body";
import { MyContext } from "./Context/MyContext";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


function App() {
  const [cartArr, setCartArr] = useState([]);
  const [showModal,setShowModal] = useState(false)
 
  return (
    <Router>
    <MyContext.Provider 
    value={{ cartArr, setCartArr ,setShowModal ,showModal}}>
    <Header/>
    
    <div className="flex items-center justify-center p-8 mb-8 bg-blue-gray-800  ">
      <h1 className="text-4xl  text-blue-gray-100 font-serif font-bold ">
      Welcome to NeoCart !
    </h1>
    </div>
    <Routes>
    <Route path="/" element={ <Body /> } />
    <Route path="/about" element={<AboutUs/>}/>
    </Routes>
    </MyContext.Provider>
    </Router>
  )
}

export default App
