import React from 'react'

function CategoryMenu() {
  return (
    <div className=''>
      <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='flex align-middle gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Snacks</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>

      </div>
    </div>
  )
}

export default CategoryMenu
