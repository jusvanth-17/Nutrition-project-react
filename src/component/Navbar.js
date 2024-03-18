import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
import rem from '../component/rem.png'
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
        <nav className='navbar'>
        <img className='headimg' src={rem} width={50} height={50} />     
        <h2>Nutrition Kaaran</h2>   
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/food'>Food</NavLink>
        <NavLink to='/product'>Blog</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/users'>BMI</NavLink>
        <NavLink to='/bmr'>BMR</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}
