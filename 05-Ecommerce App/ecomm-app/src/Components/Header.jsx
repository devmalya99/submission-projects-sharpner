

import  {useContext} from 'react'
import { MyContext } from '../Context/MyContext'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-tailwind/react';
const Header = () => {
  const {cartArr,setShowModal}= useContext(MyContext)
  const total = cartArr.reduce((a,c)=>a+c.quantity,0)
  const { loginWithRedirect , isAuthenticated, logout , user } = useAuth0();
 
  return (
    <div className='flex  p-2 justify-between bg-gray-800'>
         <div className='flex-grow  flex justify-center space-x-12'>
         
         <div className='text-gray-100 text-2xl font-semibold'>
            <NavLink to="/">HOME</NavLink>
        </div>

        <div className='text-gray-100 text-2xl font-semibold'>
        <NavLink to="/store">STORE</NavLink>
        </div>

        <div className='text-gray-100 text-2xl font-semibold'>
        <NavLink to="/about">ABOUT</NavLink>
        </div>

        <div className='text-gray-100 text-2xl font-semibold'>
        <NavLink to="/contact">CONTACT</NavLink>
        </div>

        {
          isAuthenticated ? <p>{user.name}</p> : null
        }

        {
          isAuthenticated ?   <div className='text-gray-100 text-2xl font-semibold'>
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Button>
          </div>
          :
             <div className='text-gray-100 text-2xl font-semibold'>
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
        </div>
        }

     

      

        

        </div>
       

        <div 
         onClick={()=>setShowModal(prev=>!prev)}
        className='text-black-100 text-xl p-2 bg-yellow-400  rounded-xl font-semibold cursor-pointer'>
            CART {Number(total)}
        </div>

    </div>
  )
}

export default Header