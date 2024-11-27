import React from "react";
import { GoStarFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
const FoodCard = ({ food, handleToast }) => {
  const { id, name, price, desc, img, rating } = food; // Destructure properties
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-full h-[350px] p-5 flex flex-col rounded-lg justify-between shadow-md bg-white">
      <div className="flex justify-center">
        <img
          src={img}
          alt=""
          className="h-[130px] w-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 150)}</p>
      <div className="flex justify-between">
        <span className="flex items-center justify-center">
          <GoStarFill className="mr-1 text-yellow-500" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
