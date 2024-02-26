import { Link , useNavigate} from 'react-router-dom'
import { useState , useContext } from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase/FirebaseConfig'
import { MyContext } from '../Context/MyContext'
const Login=()=> {

    const {isLogIn,setIsLogIn} = useContext(MyContext)

    const Navigate = useNavigate()

    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const signin = async ()=>{
     if(email==="" || password===""){
        return alert("Please enter email and password")
     }
     try {
         const user = await signInWithEmailAndPassword(auth,email, password);
         const users = localStorage.setItem('user' , JSON.stringify(user))
         Navigate('/store')
         alert("Signin Successful")
         setIsLogIn(true)
         console.log("is user logged in",isLogIn)
         console.log("users in ls",users)
         setEmail("");
         setPassword("");
     } 
     catch (error) {
         console.log(error)
     }
}

   
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input 
                        type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        name='email'
                        value={email}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        value={password}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={signin}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Dont have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
                <div>
                    <h2 className='text-white'>Forgot password ? <Link className=' text-yellow-500 font-bold' to={'/reset-password'}>Reset Here</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login