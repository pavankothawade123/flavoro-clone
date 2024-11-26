import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import { Toaster } from "react-hot-toast";

const FoodItems = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map((food) => {
          return <FoodCard key={food.id} food={food} />;
        })}
      </div>
    </>
  );
};

export default FoodItems;
