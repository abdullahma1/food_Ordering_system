import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#fe5200] py-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
            <span className='text-3xl text-white font-bold tracking-tight'>
                FoodEats.com
            </span>    
            <span className='text-white font-bold tracking-tight  flex gap-4'>
                <span>Privacy</span>
                <span>Terms of Services</span>

            </span>
        </div>    
    </div>
  )
}

export default Footer