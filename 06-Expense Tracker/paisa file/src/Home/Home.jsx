import React ,{useState, useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AddExpenseCard from '../CardsComponents/AddExpenseCard';
const Home = () => {
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
  },[])

  const logout =()=>{
    localStorage.removeItem('user')
    Navigate('/')
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

  <AddExpenseCard/>
  <div className="display div container mx-auto mt-10 max-w-md shadow-lg">
  <div className="border-2 border-gray-200 p-5 rounded-md bg-white shadow-sm">
  <ul>
            <li>
                Item 1
            </li>
            <li>
                Item 1
            </li>
            <li>
                Item 1
            </li>
            <li>
                Item 1
            </li>
            <li>
                Item 1
            </li>
        </ul>

  </div>
  
  </div>
  
    

  </>



    

    
  )
}

export default Home;