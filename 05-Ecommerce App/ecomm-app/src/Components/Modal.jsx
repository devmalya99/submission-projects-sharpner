import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const Modal = () => {
  const { showModal, setShowModal, cartArr, setCartArr } = useContext(
    MyContext
  );
  const removeFromCart = (id) => {
    const filteredArr = cartArr.filter((each) => each.id !== id);
    setCartArr(filteredArr);
  };

  const handleDecrease =(id)=>{
      
    setCartArr(prev=>
      
    prev.map((each)=>
    each.id ===id ?{...each,quantity: each.quantity > 0 ? each.quantity-1 : 0} :each))
    
  }
  
    const handleIncrease =(id)=>{
    
      setCartArr(prev=>prev.map((each)=>
      each.id===id ? {...each, quantity:each.quantity+1} : each
      ))
    }

    const total= cartArr.reduce((acc,curr)=>acc+curr.quantity*curr.price,0)

    return (
      <div
        className={`fixed z-10 inset-0 flex justify-end items-start bg-black bg-opacity-50 ${showModal ? "" : "hidden"}`}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div
          className="mt-16 mr-4 p-6 rounded-md w-1/4 overflow-auto"
          style={{ maxHeight: "80vh", backgroundColor: "#fff", border: "1px solid #ddd" }}
        >
          <h2 className="text-2xl mb-4">Cart</h2>
          {cartArr.map(({ id, title, imageUrl, price, quantity }) => (
            <div key={id} className="flex items-center justify-between py-3 border-b-2">
              <img src={imageUrl} alt={title} className="w-14 h-14 object-cover rounded mr-4" />
              <div>
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                <p className="text-sm text-gray-600">Price: ₹{price}</p>
              </div>
              <div className="ml-4">
                <button 
                   className="px-2 py-1 rounded bg-green-500 text-white mr-2"
                   onClick={() => handleIncrease(id)}
                >
                  +
                </button>
                <button 
                   className="px-2 py-1 rounded bg-red-500 text-white mr-2"
                   onClick={() => handleDecrease(id)}
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(id)}
                  className="text-sm text-gray-500 underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 font-semibold">
            Total: ₹{total}
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
};

export default Modal;