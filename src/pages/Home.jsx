import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Carts from '../components/Carts'
function Home() {
  return (
    <div className='p-4'>
        <Navbar/>
        <CategoryMenu/>
        <FoodItems/>
        <Carts/>
    </div>
  )
}

export default Home
