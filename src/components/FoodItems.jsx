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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 pb-2 my-10 overflow-auto h-[75vh]">
  {filteredData.map((food) => (
    <FoodCard key={food.id} food={food} handleToast={handleToast} />
  ))}
</div>

    </>
  );
};

export default FoodItems;
