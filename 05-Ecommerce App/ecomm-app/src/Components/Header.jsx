import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { NavLink , useNavigate } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
//import { Button } from "@material-tailwind/react";
import {  useLocation } from "react-router-dom";
import { useEffect } from "react";



const Header = () => {

  const Navigate = useNavigate();
  const location = useLocation();

  const checkSession = () => {
    const loginTime = localStorage.getItem('loginTime');
    
    if(loginTime) {
      const currentTime = new Date().getTime();

    if (currentTime - loginTime > 10*60*1000) { // 5 minutes in ms
      localStorage.removeItem('user');
      Navigate('/login');
      alert('Session expired. Please re-login.');
    }
  }
  };

  useEffect(() => {
    checkSession();
  }, [location]);


  const user = JSON.parse(localStorage.getItem('user'))
  const { cartArr, setShowModal } = useContext(MyContext);
  const total = cartArr.reduce((a, c) => a + c.quantity, 0);
  //const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  
  const logout = () => { 
    localStorage.removeItem('user')
    Navigate('/login')
  }
  const handleCartClick = ()=>{
    if (user)
    {
      // retrieve stored cartArr as userCartData from firebase and setCartArr( userCartData)

      setShowModal((prev) => !prev)
      console.log("users in ls",user.user.email)
    }
    else{
      Navigate('/login');
    }

    

  }
  return (
    <div className="flex  p-2 justify-between bg-gray-800">
      <div className="flex-grow  flex justify-center space-x-12">
        <div className="text-gray-100 text-2xl font-semibold">
          <NavLink to="/">HOME</NavLink>
        </div>

        <div className="text-gray-100 text-2xl font-semibold">
          <NavLink to="/about">ABOUT</NavLink>
        </div>

        <div className="text-gray-100 text-2xl font-semibold">
          <NavLink to="/contact">CONTACT</NavLink>
        </div>

        

        {
          user ? 
          <div 
          className="text-gray-100 text-2xl font-semibold"
          onClick={logout}
          >
          <NavLink to="/">LOGOUT</NavLink>
        </div> :
        <div className="text-gray-100 text-2xl font-semibold">
        <NavLink to="/login">LOGIN</NavLink>
      </div>
        
        }

        <div className="text-gray-100 text-2xl font-semibold">
          <NavLink to="/signup">SIGNUP</NavLink>
        </div>

       
      </div>

      <div
        onClick={ handleCartClick}
        className="text-black-100 text-xl p-2 bg-yellow-400  rounded-xl font-semibold cursor-pointer"
      >
        CART {Number(total)}
      </div>
    </div>
  );
};

export default Header;
