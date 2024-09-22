import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around py-3 flex-wrap'>
      <h2 className='text-lg font-semibold '>Todo App</h2>
      <ul className= 'flex gap-[40px] text-m'>
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
