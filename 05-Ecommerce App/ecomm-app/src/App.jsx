
import { Button } from "@material-tailwind/react";
 
import { useState } from "react";
import './App.css'
import Header  from "./Components/Header";
import Body  from "./Components/Body";
import { MyContext } from "./Context/MyContext";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";

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
      Welcome to NewDirection !
    </h1>
    </div>
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/store" element={ <Body /> } />
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </MyContext.Provider>
    </Router>
  )
}

export default App
