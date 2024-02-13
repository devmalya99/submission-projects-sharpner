import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    id: "",
    category: "",
  });

  const [arr, setArr] = useState([]);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClickToAdd = () => {
    if (
      data.name === "" ||
      data.price === "" ||
      data.id === "" ||
      data.category === ""
    ) {
      alert("Please fill all the fields before adding the product");
      return;
    }

    setArr((arr) => [...arr, data]);
    setData({
      name: "",
      price: "",
      id: "",
      category: "",
    });

    console.log(data);
  };

  const handleDelete = (id) => {
    const filteredArr = arr.filter((each) => each.id !== id);
    setArr(filteredArr);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("prod"));
    if (savedData) setArr(savedData);
  }, []);

  useEffect(() => {
    if (arr.length > 0) localStorage.setItem("prod", JSON.stringify(arr));
  }, [arr]);

  const categoryArr = ["Electronics", "Food", "Clothes"];

  return (
    <div>
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

      <div className="list-container">
        <header className="text-2xl font-semibold p-2 m-2">
          <h2>Product Lists:</h2>
          <hr className=" border-red-800"></hr>
        </header>

        {categoryArr.map((catg) => (
          <section key={catg}>
            <h2 className=" text-xl font-semibold p-2 m-2 text-blue-800">
              {catg}:
            </h2>
            {arr
              .filter((item) => item.category === catg)
              .map((item) => (
                <div
                  className="border-2 p-2 m-2 border-gray-500 w-auto"
                  key={item.id}
                >
                  <h3>
                    🛒{item.name.toUpperCase()}- ₹{item.price}
                  </h3>
                  <button
                    className="border-1 px-2 ml-2 mr-2 bg-rose-500"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
