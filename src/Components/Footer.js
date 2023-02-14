import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import {BsFillTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import {HiLocationMarker } from 'react-icons/hi'
import "./Footer.css"

const Footer =() =>{
  return (
    <footer className='footer'>
        <div className='cont'>
            <div className='foot_row'>
                <div className='foot_col'>
                    <h4>Quick Link</h4>
                    <ul>
                        <li><a href='#'><AiFillRightCircle/>About</a></li>
                        <li><a href='#'><AiFillRightCircle/>Service</a></li>
                        <li><a href='#'><AiFillRightCircle/>Product</a></li>
                        <li><a href='#'><AiFillRightCircle/>Blog</a></li>
                        <li><a href='#'><AiFillRightCircle/>Contact</a></li>
                    </ul>
                </div>
                <div className='foot_col'>
                    <h4>Our Srvice</h4>
                    <ul>
                        <li><a href='#'><AiFillRightCircle/>Graphic Designing</a></li>
                        <li><a href='#'><AiFillRightCircle/>Advertising</a></li>
                        <li><a href='#'><AiFillRightCircle/>Digital Painting</a></li>
                        <li><a href='#'><AiFillRightCircle/>Customized Gift</a></li>
                        <li><a href='#'><AiFillRightCircle/>Digital Painting</a></li>
                        <li><a href='#'><AiFillRightCircle/>Customized Gift</a></li>
                    </ul>
                </div>
                <div className='foot_col'>
                    <h4>Get Help</h4>
                    <ul>
                    <li><a href='#'><AiFillRightCircle/>Advertising</a></li>
                    <li><a href='#'><AiFillRightCircle/>Digital Painting</a></li>
                        <li><a href='#'><AiFillRightCircle/>Customized Gift</a></li>
                        <li><a href='#'><AiFillRightCircle/>Digital Painting</a></li>
                        <li><a href='#'><AiFillRightCircle/>Customized Gift</a></li>
                    </ul>
                </div>
                <div className='foot_col'>
                    <h4>Contact</h4>
                    <ul>
                        <li><a><BsFillTelephoneFill/>+94849049000</a></li>
                        <li><a><FiMail/>sales@notebook.com</a></li>
                        <li><a><HiLocationMarker/>Near london hotel Wamby singnal Dubai UAE</a></li>
                        
                    </ul>
                    <div className='links_socio'>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
