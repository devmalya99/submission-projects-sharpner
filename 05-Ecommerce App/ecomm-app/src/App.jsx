
import { Button } from "@material-tailwind/react";
 

import './App.css'
import Header  from "./Components/Header";
import Body  from "./Components/Body";

function App() {
 

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center p-8 mb-8 bg-blue-gray-800  ">
      <h1 className="text-4xl  text-blue-gray-100 font-serif font-bold ">
      Welcome to NeoCart !
    </h1>
    </div>
    <Body />
     
    </>
  )
}

export default App
