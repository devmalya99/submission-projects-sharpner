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

  return (
    <div
      className={`fixed z-10 inset-0 flex justify-end items-start bg-black bg-opacity-50 ${showModal ? "" : "hidden"}`}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="bg-white mt-16 mr-4 p-4 rounded-lg w-1/4 overflow-auto">
        <h2 className="text-2xl mb-4">Cart</h2>
        {cartArr.map(({ id, title, imageUrl, price, quantity }) => (
          <div key={id} className="flex items-center justify-between py-2 border-b">
            <img
              src={imageUrl}
              alt={title}
              className="w-14 h-14 object-cover rounded mr-3"
            />
            <div className="flex-1">
              <h3 className="mb-1">{title}</h3>
              <p>Quantity: {quantity}</p>
              <p>Price: {price}</p>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;