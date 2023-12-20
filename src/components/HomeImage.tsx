import React from 'react'
import homeImg from "../assets/food.jpg"

const HomeImage = () => {
  return (
    <div>
        <img src={homeImg} className='w-full max-h-[600px] object-cover'/>
    </div>
  )
}

export default HomeImage