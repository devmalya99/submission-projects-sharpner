
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
import ProductDetails from "./Components/ProductDetails";
import Login from "./Registration/Login";
import SignUp from "./Registration/SignUp";
import { ProtectedRoutes } from "./ProtctedRoutes/ProtectedRoutes";


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
      Welcome to Bazzar India !
    </h1>
    </div>
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/store" element={ <Body /> } />
    <Route path="/about" element={<AboutUs/>}/>
    
    {/* Protected route for contact page */}

    <Route path="/contact" element={
    <ProtectedRoutes>
      <Contact/>
    </ProtectedRoutes>

  }/>
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/product/:id"
    element={<ProductDetails/>}
    >
      

    </Route>
    </Routes>
    </MyContext.Provider>
    </Router>
  )
}

export default App
