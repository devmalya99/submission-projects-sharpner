
import React , {useState, useEffect }from 'react'


const InputBox = ({handleInputChange,handleClickToAdd,data}) => {
  return (
    <div className="inputContainer flex flex-col w-full mt-10 justify-center items-center">
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter Product Name"
          className="border-2 px-10 text-lg m-2 border-rose-500 rounded-lg shadow-md bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={data.price}
          placeholder="Enter Product price"
          className="border-2 px-10 text-lg m-2 border-rose-500 rounded-lg shadow-md bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="id"
          value={data.id}
          placeholder="Enter Product id"
          className="border-2 px-10 text-lg m-2 border-rose-500 rounded-lg shadow-md bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={handleInputChange}
        />

        <select
          name="category"
          value={data.category}
          placeholder="Select Category"
          className="border-2 px-10 text-lg m-2 border-black-500 rounded-lg shadow-md bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={handleInputChange}
        >
          <option value={""}>Select...</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
        </select>

        <button
          className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 px-6 m-2 text-white font-semibold rounded-full shadow-md transition duration-200 ease-in-out hover:from-pink-500 hover:to-purple-600"
          onClick={handleClickToAdd}
        >
          Add Product
        </button>
      </div>
  )
}


export default InputBox