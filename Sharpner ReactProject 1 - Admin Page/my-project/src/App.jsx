import { useState } from 'react'

import './App.css'
import AdminPage from './Components/AdminPage'

function App() {

  return (
    <div className="bg-gray-200">
    <div className='flex justify-center items-center'>
      <h1 className="text-3xl font-bold underline ">
      Admin Dashboard
    </h1>
    </div>

    
    <AdminPage/>

    </div>
  )
}

export default App
