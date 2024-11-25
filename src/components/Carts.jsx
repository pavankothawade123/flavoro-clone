import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
const Carts = () => {
  return (
    <>
      <div className="fixed right-0 top-0 lg:w-[20vw] bg-white h-full p-5">
        <div className="flex justify-between align-middle my-3">
          <span>My Order</span>
          <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: </h3>
          <h3 className="font-semibold text-gray-800">Total Amount : </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 w-[90vw] rounded-lg lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Carts;
