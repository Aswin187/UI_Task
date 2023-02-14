import React from 'react'
import "./Navbar.css";
import { BsSearch } from 'react-icons/bs';
import { images } from '../Constants';

const Navbar = () => {
    return (
        <div className='header'>
            <img className='logo' src={images.logo} />

            <ul className='ul'>
                <li><a href='#'> About </a></li>
                <li><a href='#'> Service </a></li>
                <li><a href='#'> Product </a></li>
                <li><a href='#'> Gallery </a></li>
                <li><a href='#'> Blog </a></li>
                <li><a href='#'> Contact</a></li>
            </ul>
            < BsSearch />
            <button className='btn'> Get a Quote </button>
            <button className='btn1'> e-Brochures </button>
        </div>


    )
}

export default Navbar