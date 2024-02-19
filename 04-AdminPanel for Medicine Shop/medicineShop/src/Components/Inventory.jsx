

import React ,{useContext,useState} from 'react'
import { myContext } from '../Context/MyContext'
import Modal from './Modal'
const Inventory = () => {
    const {formData,setFormData,showModal,setShowModal,cartArr,setCartArr}=useContext(myContext)
    const [qty,setQty]=useState(0)
    

    const onQuantityChange = (e,each) => {
     setQty(parseInt(e.target.value,10))
    }

    const handleDelete=(id)=>{
      const updatedData=formData.filter((each)=>each.id!==id)
      setFormData(updatedData)
    }

    const addToCart = (e, each) => {
      if (qty > each.avlQty) {
        alert("Requested quantity exceeds available quantity");
        return;
      }
    
      let itemExists = cartArr.find((item) => item.id === each.id);
    
      if (itemExists) {
        let updatedCartArr = cartArr.map((item) =>
          item.id === each.id ? { ...item, qty: item.qty + qty } : item
        );
    
        setCartArr(updatedCartArr);
      } else {
        let newObj = {
          name: each.name,
          id: each.id,
          price: each.price,
          desc: each.desc,
          qty: qty,
        };
    
        setCartArr((prev) => [...prev, newObj]);
      }
    
      let updatedData = formData.map((item) =>
        item.id === each.id ? { ...item, avlQty: item.avlQty - qty } : item
      );
    
      setFormData(updatedData);


    };
 



  return (
    <div className="flex flex-col items-center space-y-12 py-8 max-w-4xl mx-auto">
    {formData.map((each) => (
      <div
        className="flex flex-col space-y-4 bg-gray-400 text-gray-800 w-full p-6 rounded-xl shadow-lg backdrop-filter backdrop-blur-md"
        key={each.id}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">{each.name.toUpperCase()}</h2>
          <p className="text-x text-right flex-1 text-yellow-200 text-2xl font-medium"> {each.desc} </p>
          <h2 className="font-semibold text-purple-800 text-xl"> -- ₹{each.price}</h2>
        </div>
  
        <div className="flex items-center space-x-2">
          <label htmlFor="qty" className="font-medium">
            Quantity:
          </label>
          <input 
            type="number"
            name='qty'
            id="qty"
            min="0"
            placeholder="Quantity"
            className="border rounded py-1 px-2 text-lg"
            onChange={(e) => onQuantityChange(e,each)}
          />
  
          <p className="text-rose-600  text-md font-semibold flex-middle">Stock Count: {each.avlQty===0 ? "Out of Stock" : each.avlQty} </p>
          <button
            onClick={(e) => addToCart(e, each)}
            className={`w-1/3  ${each.avlQty>0 ? 'bg-blue-500' : 'bg-gray-300'} text-white py-2 px-4 rounded`}
          >
            Add To Cart
          </button>
  
          <button 
          className="w-1/3 bg-rose-500 text-white py-2 px-4 rounded"
          onClick={() => handleDelete(each.id)}
          >Delete</button>
        </div>
      </div>
    ))}
  
    {showModal && <Modal />}
    <button
      onClick={() => console.log(formData)}
      className="mt-8 py-2 px-4 rounded bg-indigo-500 text-white"
    >
        Click Here
    </button>
  </div>
  )
}

export default Inventory