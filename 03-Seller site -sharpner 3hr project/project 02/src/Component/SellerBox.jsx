import React ,{useState, useEffect, useContext} from 'react'
import { myContext } from '../Context/ProductContext';

export const SellerBox = () => {

    const {sellerArr,setSellerArr} =useContext(myContext)

    const [sellerObj, setSellerObj] = useState({

        name: '',
        id:'',
        des:'',
        price:'',
        l:'',
        m:'',
        s:'',
    })

    const handleChange =(e)=>{
        setSellerObj({...sellerObj,[e.target.name]:e.target.value})
        console.log(sellerObj);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setSellerArr(arr=>[...arr,sellerObj])
        
    }
    useEffect(()=>{
        if(sellerArr.length>0) localStorage.setItem("prod",JSON.stringify(sellerArr));
    },[sellerArr]);

    useEffect(()=>{
        const savedData = JSON.parse(localStorage.getItem("prod"))
        if(savedData) setSellerArr(savedData)
    },[])




    return (
        <form 
        onSubmit={handleSubmit}
        className='flex flex-wrap w-full p-4 bg-gray-200 shadow rounded-lg'>
            <div className='flex flex-col border-b-2 pb-4 w-full md:w-1/3'>
               <label htmlFor='productName' className='font-bold text-gray-600 mb-1'>Product Name</label>
               <input 
                id='productName'
                name='name'
                placeholder='Product Name'
                className='p-2 border rounded'
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col border-b-2 pb-4 w-full md:w-1/3'>
               <label htmlFor='productId' className='font-bold text-gray-600 mb-1'>Product Id</label>
               <input 
                id='productId'
                type='text'
                name='id'
                placeholder='Product Id'
                className='p-2 border rounded'
                onChange={handleChange}
               />
            </div>
    
            <div className='flex flex-col border-b-2 pb-4 w-full md:w-1/3'>
               <label htmlFor='productDescription' className='font-bold text-gray-600 mb-1'>Product Description</label>
               <input 
                id='productDescription'
                name='des'
                placeholder='Description'
                className='p-2 border rounded'
                onChange={handleChange}
               />
            </div>
    
            <div className='flex flex-col border-b-2 pb-4 w-full md:w-1/3'>
               <label htmlFor='productPrice' className='font-bold text-gray-600 mb-1'>Product Price</label>
               <input 
                id='productPrice'
                name='price'
                placeholder='Price'
                className='p-2 border rounded'
                onChange={handleChange}
               />
            </div>
    
            <div className='flex border-b-2 pb-4 w-full gap-2 md:gap-4'>
                <div>
                    <label htmlFor='largeQty' className='font-bold text-gray-600 mb-1'>Large</label>
                    <input
                        id='largeQty'
                        name='l'
                        type='number'
                        placeholder='Large qty'
                        onChange={handleChange}
                        className='p-2 border rounded'
                    />
                </div>
                <div>
                    <label htmlFor='mediumQty' className='font-bold text-gray-600 mb-1'>Medium</label>
                    <input
                        id='mediumQty'
                        name='m'
                        type='number'
                        placeholder='Medium qty'
                        onChange={handleChange}
                        className='p-2 border rounded'
                    />
                </div>
                <div>
                    <label htmlFor='smallQty' className='font-bold text-gray-600 mb-1'>Small</label>
                    <input
                        id='smallQty'
                        name='s'
                        type='number'
                        placeholder='Small qty'
                        onChange={handleChange}
                        className='p-2 border rounded'
                    />
                </div>
            </div>
    
            <button type='submit' className='bg-green-400 w-full rounded-md p-2 text-white font-bold mt-4'>Add Product</button>
            
        </form>
    )
}

export default SellerBox;