import React from 'react'
import { Link } from 'react-router-dom'
import './stylej/navBar.css'

const  NavBar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar_title'><Link to='/'>E-commerce</Link></h1>
         <ul className='navbar_list'>
            <li className='navbar_item'><Link to='/login'>Login</Link></li>
            <li className='navbar_item'><Link to='/purchases'>Purchase</Link></li>
            <li className='navbar_item'><Link to='/cart'><ion-icon name="cart-outline"></ion-icon>
</Link></li>
         </ul>
    </nav>
  )
}

export default NavBar
