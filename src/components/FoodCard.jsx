import React from "react";
import { GoStarFill } from "react-icons/go";
const FoodCard = ({food}) => {
    const { id, name, price, desc, img, rating } = food; // Destructure properties
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal ">
        {desc.slice(0,50)}
      </p>
      <div className="flex justify-between">
        <span className="flex items-center justify-center">
            <GoStarFill className="mr-1 text-yellow-500"/> {rating}
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
