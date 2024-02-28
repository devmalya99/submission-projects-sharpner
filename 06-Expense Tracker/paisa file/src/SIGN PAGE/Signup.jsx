
import {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../Firebase/FirebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const Navigate = useNavigate()


    

    const handleFormSubmit = async (e)=>{
        e.preventDefault()
        if(email.trim()==='' || password.trim()==='' || confirmPassword.trim()===''){
            alert('please enter all the fields')
            return;
        }

        if(password !== confirmPassword){
            alert('passwords do not match')
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            
            Navigate('/')
            alert("Signin Successful")
      
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } 
        
        catch (error) 
        {
            console.log(error)
        }


    }
    
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://t4.ftcdn.net/jpg/04/53/70/41/360_F_453704176_fRLaZTHGmRZmM6BpZZe2PT17DBsjb4md.jpg"/>
            Paisa Kaha Gaya    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white" tabIndex="0">
                    Sign Up for New Account
                </h1>
                <form 
                onSubmit={handleFormSubmit}
                className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" 
                        value={email}
                        name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" aria-required="true"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" 
                        value={password}
                        name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-required="true"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        type="password" 
                        value={confirmPassword}
                        placeholder="Confirm Password" name="confirmPassword" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-required="true"/>
                    </div>
                    
                    <button 
                    type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to="/" aria-label="Sign Up" tabIndex="0" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Signup