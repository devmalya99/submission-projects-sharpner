import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase , ref , set} from "firebase/database"
import {getAuth} from 'firebase/auth'

const ProfilePage = () => {
  const [fullName, setFullName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const db = getDatabase();
    set(ref(db, `users/${userId}`), {
        name: fullName,
        profilePhoto: profilePhoto
    })

    setFullName('')
    setProfilePhoto('')
    


  }

  return (
    <div className="p-8 bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
      <form onSubmit={handleProfileUpdate}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block text-gray-700 font-bold mb-2">
            Profile Photo URL:
          </label>
          <input
            type="text"
            id="profilePhoto"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button 
        type='submit'
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update
        </button>
        <button className="bg-red-400 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <Link to="/home">
            Cancel
            </Link>
            
        </button>
      </form>
     
    </div>
  );
};

export default ProfilePage;