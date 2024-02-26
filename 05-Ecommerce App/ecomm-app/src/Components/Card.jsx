import React , {useContext, useState } from 'react';
 import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


import { MyContext } from '../Context/MyContext';

export default function ItemCard(props) {
  const loggedUser = JSON.parse(localStorage.getItem('user'))
  const Email = loggedUser.user.email
  const { item } = props;
  const navigate = useNavigate(); 
// Declare this at the start of your ItemCard function before the return statement.

 const goToDetails=(id)=>{
  navigate(`/product/${id}`)

 }


  const {cartArr, setCartArr} = useContext(MyContext)
  

  const handleClick = async (item) => {
    console.log("added")
    console.log("loggedUser",Email)

    const isItemExists = cartArr.find((each) => each.id === item.id);
    console.log(isItemExists);
    if(isItemExists) {
      let newCartArr = cartArr.map((each) => 
      each.id === item.id ?
       { ...isItemExists, quantity: isItemExists.quantity + 1 } : each
      );
      setCartArr(newCartArr);
      console.log(cartArr)
    } else {
      const cartObj = {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: 1,
      }
      setCartArr(prev => [...prev, cartObj]);
      console.log(cartArr)
    }

    //Put  req to firebase to store and update cartArr
    const emailKey = Email.replace('.',',');
    const res=await fetch(`https://fir-auth-01-3c109-default-rtdb.firebaseio.com/cartUserData/${emailKey}.json` ,
    {
      method:"PUT",
          headers:{
            "Content-Type":"application/json"
         },
      body: JSON.stringify({cartArr })
    })
    const data=await res.json()
    console.log(data)

  };


  return (
    <Card className="m-2 bg-white w-full shadow-md">
      <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transform hover:scale-125 transition-all duration-500"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="">
          {item.title}
        </Typography>
        <Typography className="text-gray-600">
          ₹{item.price}
        </Typography>
      </CardBody>
      <CardFooter className="flex">
      <Button 
        color="lightBlue" 
        ripple="light" 
        className="mr-2 bg-yellow-300 text-blue-gray-900"
        onClick={()=> goToDetails(item.id)}
        >Details</Button>

        <Button 
        color="lightBlue" 
        ripple="light" 
        className=""
        onClick={() => handleClick(item)}
        >Add to Cart</Button>
      </CardFooter>
      
    </Card>
  );
}