import React , {useContext, useState} from 'react';
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
  const { item } = props;

  const {cartArr, setCartArr} = useContext(MyContext)
  

  const handleClick =(e)=>{
    const cartObj ={
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity:item.quantity,
    }

    setCartArr(prev=>[...prev,cartObj])
    console.log(cartArr);
  }


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
      <CardFooter className="">
        <Button 
        color="lightBlue" 
        ripple="light" 
        className="w-full"
        onClick={() => handleClick()}
        >Read More</Button>
      </CardFooter>
    </Card>
  );
}