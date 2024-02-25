


import React,{ useState  } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { auth } from '../Firebase/FirebaseConfig'


const Reset = () => {
    const [email, setEmail] = useState('')
    const Navigate = useNavigate();

    const forgotPassword = async (email)=>{
        try{
            await sendPasswordResetEmail(auth,email)
            alert("Password reset email sent! Check your inbox.");
            Navigate('/login')
        }
         catch (error) {
        console.log(error)
        alert(error.message);
       }

    }
  return (
    <div>
<input 
    type="email"
    onChange={(e)=>setEmail(e.target.value)}
    name='email'
    value={email}
    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
    placeholder='Email'
    aria-label='email'
/>
<button
    onClick={() => forgotPassword(email)}
    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'
>
    Forgot Password
</button>
</div>
  )
}

export default Reset