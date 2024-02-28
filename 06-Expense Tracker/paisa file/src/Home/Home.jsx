import React ,{useState, useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Expense Tracker v1.0</h1>
      <div className='flex items-center p-4 bg-white shadow-lg rounded-lg'>
        <p className='text-lg'
        >
          {isProfileComplete? "Visit and Edit Profile" : "Your profile is incomplete.."}
          
          </p>
         
        <Link 
          to='/profile' 
          className='ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          tabIndex="0"
          aria-label="Complete profile link">
          {isProfileComplete ? "Edit Profile..." : "Complete it now..."}
        </Link>
      </div>
      <button 
      className='ml-4 px-4 py-2 mt-4 shadow-xl bg-blue-500 text-white rounded hover:bg-blue-600'

      onClick={logout}>Logout</button>
    </div>
  )
}

export default Home;