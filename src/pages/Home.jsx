import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Carts from '../components/Carts'
function Home() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <CategoryMenu/>
        <FoodItems/>
        <Carts/>
    </div>
  )
}

export default Home
