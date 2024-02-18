import React, { useContext, useState } from "react";
import { myContext } from "../Context/ProductContext";
import Modal from '../Component/Modal'
const CustomerBox = () => {
  const { sellerArr, customersArr, setCustomerArr,showModal } = useContext(myContext);
  const [qty, setQty] = useState(1);
  const [customerObj, setCustomerObj] = useState({
    name: "",
    id: "",
    lQty: 0,
    mQty: 0,
    sQty: 0,
    price: "",
  });

  const onQuantityChange = (e) => {
    setQty(parseInt(e.target.value, 10));
  };

  

  const handleBuy = (e, each,type) => {
    let newCustomerObj={
      ...customerObj,
      name: each.name,
      id: each.id,
      lQty: type === 'l' ? qty : 0,
      mQty: type === 'm' ? qty : 0,
      sQty: type === 's' ? qty : 0,
      price: each.price ,
    };

  

    let existingItem = customersArr.find((each) => each.id === newCustomerObj.id);
    if (existingItem) {
      const updatedArr = customersArr.map((each) =>
        each.id === newCustomerObj.id ?
         { ...each, 

            lQty: each.lQty + (type === 'l' ? qty : 0),
            mQty: each.mQty + (type === 'm' ? qty : 0),
            sQty: each.sQty + (type === 's' ? qty : 0),
        
        } : each
      );
      setCustomerArr(updatedArr);
    } else {
      setCustomerArr((arr) => [...arr, newCustomerObj]);
    }
    setCustomerObj(newCustomerObj);
  };

  return (
    <div className="flex flex-col items-center space-y-12 py-8 bg-gray-100">
      {sellerArr.map((each) => (
        <div
          className="flex flex-col items-start border border-gray-300 p-4 rounded-lg bg-white w-1/2"
          key={each.id}
        >
          <div className="grid grid-cols-3 gap-x-4 mb-4">
            <h2 className="text-2xl font-semibold">
              {each.name.toUpperCase()}
            </h2>
            <p className="text-2xl font-semibold">{each.des}</p>
            <h2 className="text-2xl font-semibold">₹{each.price}</h2>

            <div className="flex items-center space-x-2 mt-8">
              <label htmlFor="qty" className="font-medium">
                Quantity:
              </label>
              <input
                type="number"
                id="qty"
                min="0"
                placeholder="Quantity"
                className="border rounded py-1 px-2 text-lg"
                onChange={onQuantityChange}
                
              />
            </div>
          </div>
          <div className="w-full flex space-x-2">
            <button
              onClick={(e) => handleBuy(e, each, "l")}
              className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Buy Large Avl: {each.l}
            </button>
            <button
              onClick={(e) => handleBuy(e, each, "m")}
              className="w-1/3 bg-green-500 text-white py-2 px-4 rounded"
            >
              Buy Medium Avl: {each.m}
            </button>
            <button
              onClick={(e) => handleBuy(e, each, "s")}
              className="w-1/3 bg-yellow-500 text-white py-2 px-4 rounded"
            >
              Buy Small Avl: {each.s}
            </button>
          </div>
        </div>
      ))}

{showModal && <Modal />}
      <button
        onClick={() => console.log(customersArr)}
        className="mt-8 py-2 px-4 rounded bg-indigo-500 text-white"
      >
        Click Here
      </button>
    </div>
  );
};

export default CustomerBox;
