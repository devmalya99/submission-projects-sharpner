import React ,{useState, useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AddExpenseCard from '../CardsComponents/AddExpenseCard';
import {useReducer} from 'react';
import { createContext } from 'react'

const initialState = {
  expenses:[],
}

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return {...state,expenses:[...state.expenses,action.payload]}
     
    case 'DELETE_EXPENSE':
      return {...state, expenses: state.expenses.filter((expense) => expense.id !== action.id)}
    default:
      return state
  
    }

}

export const ExpenseContext = createContext()

const Home = () => {


  const [state , dispatch] = useReducer(reducer,initialState)
  const [isProfileComplete, setProfileComplete] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if(user){
        const db= getDatabase();
        const profileRef=ref(db, `users/${user.uid}`);
        const profileSnapshot = await get(profileRef);
        if(profileSnapshot.exists()){
          setProfileComplete(true);
        }
      }
    })
    console.log("state is",state)
  },[])

  const logout =()=>{
    localStorage.removeItem('user')
    Navigate('/')
  }

  const ExpenseItem = ({title,amount,category,id, dispatch})=>{
    return(
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-start items-center w-full md:w-auto">
         <li>
      <h3>{title}</h3>
      <p>Amount: {amount}</p>
      <p>Category: {category}</p>
    </li>

    <button 
    onClick={() => dispatch({ type: 'DELETE_EXPENSE', id })}
    className='text-white-500  hover:font-semibold  ml-8 p-2  bg-red-500 hover:bg-red-700'>
      Delete
    </button>
    </div>
      </div>
     
    )
  }

  return (
    <>
    <header className="bg-white border-b sticky top-0 z-10 p-4">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-x-2 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-start items-center w-full md:w-auto">
          <a href="#" className="flex-shrink-0">
          <span className="font-bold text-xl sm:text-3xl">

  <span className="text-blue-500">Welcome to Expense Tracker v1.0</span>
 
</span>
          </a>
        </div>
        <div className="md:ml-auto py-2 md:py-0 w-full md:w-auto text-center md:text-right">
            <p className="text-md md:text-lg inline-block">
               {isProfileComplete? "Visit and Edit Profile" : "Your profile is incomplete.."}
           </p>
           <Link 
              to='/profile' 
              className='ml-2 md:ml-4 inline-block px-2 md:px-4 py-1 md:py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              tabIndex="0"
              aria-label="Complete profile link">
              {isProfileComplete ? "Edit Profile..." : "Complete it now..."}
            </Link>
            <button 
              className='ml-2 md:ml-4 inline-block px-2 md:px-4 py-1 md:py-2 mt-2 md:mt-0 shadow-xl bg-blue-500 text-white rounded hover:bg-blue-600'
              onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  </header>

  <ExpenseContext.Provider value={{state,dispatch}}>
    <AddExpenseCard/>
  </ExpenseContext.Provider>

  
  <div className="display div container mx-auto mt-10 max-w-md shadow-lg">
  <div className="border-2 border-gray-200 p-5 rounded-md bg-white shadow-sm">
  <ul>
  {
    state.expenses.map((expense)=>{
      return <ExpenseItem 
      key={expense.id}
      dispatch={dispatch}
      {...expense} />
    })
  }
           
 </ul>

  </div>
  
  </div>
  
    

  </>



    

    
  )
}

export default Home;