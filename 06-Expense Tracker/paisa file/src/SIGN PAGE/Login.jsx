import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase/FirebaseConfig'
import Header from '../Components/Header'
import  Features from '../Components/Features'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("please enter all the fields");
    }

    try {
        const user = await signInWithEmailAndPassword(auth, email, password)

        const users=localStorage.setItem('user',JSON.stringify(user))
            const loginTime = new Date().getTime();
            console.log("users in ls",users)
            
            localStorage.setItem('loginTime', loginTime);
            Navigate('/home');
            setEmail("");
            setPassword("");

        
    } catch (error) {
        console.log(error)
    }



  };
  return (

    <>
    <Header/>
    <section className="bg-white-800 dark:bg-gray-900">
      <div className="grid grid-cols-2 md:h-screen lg:py-0 px-6 py-8 mx-auto items-center justify-items-center">
        <img className="justify-self-center"
             src="https://expenseless.netlify.app/static/media/header-cover.feb3609bcec11e31f808.jpg"
             alt="Paisa Kaha Gaya Image"
             width="740"
             height="582" />
        <div className="bg-white w-full max-w-2xl p-6 m-4 rounded-lg  dark:bg-gray-800 dark:border dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-0">

        <form
              onSubmit={handleFormSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  aria-required="true"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-semester 3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-3 text-sm text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgotPassword"
                  tabIndex="0"
                  aria-label="Forgot Password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link
                  to="/signup"
                  aria-label="Sign Up"
                  tabIndex="0"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>

      </div>
    </section>

    <Features/>
  </>
    
           

  );
};

export default Login;
