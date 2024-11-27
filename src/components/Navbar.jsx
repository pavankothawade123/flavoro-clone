import React from 'react'
import { useDispatch } from "react-redux";
import { setSearchTerm } from '../redux/SearchSlice';

function Navbar() {
    const dispatch = useDispatch();
  return (
    
    <nav className='flex flex-col lg:flex-row justify-between sm:gap-3 mb-10 items-center h-[8vh] px-4 header-color'>
        <div className='flex items-center'>
            <h1 className='text-2xl font-bold'>Flavoro Foods</h1>
        </div>
        <div className='flex items-center'>
            <input type="text"
                    name='search'
                    id=''
                    placeholder='Search Here'
                    autoComplete='off'
                    className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
        </div>
    </nav>
  )
}

export default Navbar
