import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";

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
      <InputBox 
      data={data}
      handleInputChange={handleInputChange}
      handleClickToAdd={handleClickToAdd}
      />

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
