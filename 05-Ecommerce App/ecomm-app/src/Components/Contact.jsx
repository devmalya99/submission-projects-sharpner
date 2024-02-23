


import {useState , useEffect} from 'react'

const ContactForm = () => {

    const initialState ={
        name:'',
        email:'',
        subject:'',
        message:'',
    }

    const [formData,setFormData] = useState(initialState)

    const [arr,setArr] = useState([])

    const handleInputChange =(e)=>{
        setFormData({
            ...formData,[e.target.name] : e.target.value
        })
    }




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const {name,email,subject,message} = formData
        
        if(!name.trim() || !email.trim() || !subject.trim() || !message.trim()){
            alert("All fields are required.");
            return;
        }
        const res=
        fetch("https://movieapp-firebase-basic-default-rtdb.firebaseio.com/userDataBase.json",
        
        { method:"POST",
          headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify({name,email,subject,message})
        }
         

        )

        if (res){
            alert("Form Submitted")

        }else{
            alert ("Form Not Submitted")
        }
        
        
        
       
        console.log('form submitted')
        console.log(formData);
        console.log(arr);
        setArr(prev=>[...prev,formData])

        // reset form data after submit
    setFormData(initialState)  	
    }


    //Functions to display Data
    const [data,setData] = useState([])

    useEffect(()=>{
      const fetchData = async ()=>
      {
          const res = await fetch("https://movieapp-firebase-basic-default-rtdb.firebaseio.com/userDataBase.json")
          const resData = await res.json()

          const fetchedData = Object.entries(resData).map(([key, value]) => ({id: key, ...value}))
          console.log(fetchedData);
          setData(fetchedData)
      }
      fetchData()
      
  },[])

  const handleDelete =async(id)=>{
    const updateData = data.filter((each)=>each.id!==id)
    setData(updateData)

    // Removing from Firebase

    await fetch(`https://movieapp-firebase-basic-default-rtdb.firebaseio.com/userDataBase/${id}.json`,{
       method:'DELETE', 
});
setData(updateData)
}


  return (
    <>
  
<div className="flex items-center justify-center p-12">

  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleFormSubmit} method="POST">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
        onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Subject
        </label>
        <input
        onChange={handleInputChange}
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          placeholder="Enter your subject"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
        onChange={handleInputChange}
        rows="4"
          name="message"
          id="message"
          value={formData.message}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
        type='submit'
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>

  <div>
        <div className='p-2 ml-10 text-xl font-semibold'>List of Users : </div>
        {data.map((item)=>(
            <div key={item.id}
              className='p-2 border-1 border-gray-600 bg-yellow-200  ml-10 mb-2 rounded-md'
            >
                <div> 
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.subject}</p>
                <p>{item.message}</p>
                
                </div>
                <div>
                    <button
                    onClick={()=>{handleDelete(item.id)}} 
                    className='p-2 border-1 border-gray-600 bg-red-400 mb-2 rounded-md'
                    
                    >Delete</button>
                </div>
            </div>
        ))}

    </div>


</div>
</>
  )
}

export default ContactForm