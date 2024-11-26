import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const [filteredData, setFilteredData] = useState(FoodData);
  const handleToast = (name) => toast.success(`${name} added to cart!`);
  const selectedCategory = useSelector((state) => state.category.category);
  const searchTerm = useSelector((state) => state.searchTerm.searchTerm);

  useEffect(() => {
    setFilteredData(getFilterData(selectedCategory, searchTerm));
    console.log(filteredData);
  }, [selectedCategory, searchTerm]);

  const getFilterData = (category, term) => {
    if (category === "All") {
      return FoodData.filter((item) =>
        item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
    }
    return FoodData.filter(
      (item) =>
        item.category === category &&
        item.name.toLocaleLowerCase().includes(term?.toLocaleLowerCase())
    );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {filteredData.map((food) => {
          return (
            <FoodCard key={food.id} food={food} handleToast={handleToast} />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
