import React ,{useContext , useState, useEffect, useRef} from "react";
import { myContext } from "../Context/MyContext";
const Body = () => {

  const formRef = useRef();

   const {showModal,setShowModal,formData,setFormData,cartArr,setCartArr}=useContext(myContext)
    
   const [productObj, setProductObj] = useState({

    name:'',
    id:'',
    price:'',
    avlQty:0,
    desc:'',
   });

  const handleChange = (e) => {
    if(e.target.value==="")
    {
      alert('Please fill all the fields')
      
    } else
    {
       setProductObj({
        ...productObj, [e.target.name]: e.target.value
    })
    }
    
    console.log(productObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productObj.name &&
      productObj.id &&
      productObj.price &&
      productObj.avlQty &&
      productObj.desc &&
      productObj.avlQty > 0
    ) {
      setFormData((arr) => [...arr, productObj]);
    } else {
      alert('Please fill all the fields');
    }

    setProductObj({
      name:'',
    id:'',
    price:'',
    avlQty:0,
    desc:'',
    })
    formRef.current.reset()
  };

   useEffect(()=>{
    if(formData.length>0) {
      localStorage.setItem('Medicines',JSON.stringify(formData))}
   },[formData]);

   useEffect(()=>{
    const savedData= JSON.parse(localStorage.getItem('Medicines'))
    if(savedData && savedData.length > 0){
      setFormData(savedData)
    } 
   },[])

  


  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-wrap w-full p-4 mt-24 bg-gray-200 shadow rounded-lg"
    >
      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label htmlFor="productName" className="font-bold text-gray-600 mb-1">
          Product Name
        </label>
        <input
          id="productName"
          name="name"
          placeholder="Product Name"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label htmlFor="productId" className="font-bold text-gray-600 mb-1">
          Product Id
        </label>
        <input
          id="productId"
          type="text"
          name="id"
          placeholder="Product Id"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label
          htmlFor="productDescription"
          className="font-bold text-gray-600 mb-1"
        >
          Product Description
        </label>
        <input
          id="productDescription"
          name="desc"
          placeholder="Description"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label htmlFor="productPrice" className="font-bold text-gray-600 mb-1">
          Product Price
        </label>
        <input
          id="productPrice"
          name="price"
          placeholder="Price"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      <div className="flex border-b-2 pb-4 w-full gap-2 md:gap-4">
        <div>
          <label htmlFor="quantity" className="font-bold text-gray-600 mb-1">
            Quantity
          </label>
          <input
            id="quantity"
            name="avlQty"
            type="number"
            placeholder="quantity"
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-400 w-full rounded-md p-2 text-white font-bold mt-4"
      >
        Add Product
      </button>
    </form>
  );
};

export default Body;
