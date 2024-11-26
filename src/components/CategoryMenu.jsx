import React, { useState, useEffect } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/CategorySlice";
function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex align-middle gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 font-bold rounded-lg bg-gray-200  hover:bg-green-500 hover:text-white ${selectedCategory === "All" && 'bg-green-500 text-white'}`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => dispatch(setCategory(category))}
            className={`px-3 py-2 font-bold rounded-lg bg-gray-200  hover:bg-green-500 hover:text-white ${selectedCategory === category && 'bg-green-500 text-white'}`}
            >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
