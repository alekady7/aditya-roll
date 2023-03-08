import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='navbar-comps'>
        <img src='https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png' alt='logo' />
        <input type='text' placeholder='Search for anything' />
        <span className='nav-icon'>social-icon1</span>
        <span className='nav-icon'>social-icon2</span>
        <span className='nav-icon'>social-icon3</span>
        <button className='login'>Login</button>
      </div>
    </div>
  )
}

export default Navbar