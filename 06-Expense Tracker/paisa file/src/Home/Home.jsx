import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Expense Tracker v1.0</h1>
      <div className='flex items-center p-4 bg-white shadow-lg rounded-lg'>
        <p className='text-lg'>Your profile is incomplete..</p>
        <Link 
          to='/profile' 
          className='ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          tabIndex="0"
          aria-label="Complete profile link">
          Complete it now...
        </Link>
      </div>
    </div>
  )
}

export default Home;