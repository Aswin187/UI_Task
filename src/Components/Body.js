import React from 'react'
import "./Body.css";
import { images } from '../Constants';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Body = () => {
  return (
    <section className="banner">
      <div className="content__area">
        <div className="socials">
          <h5>Follow  </h5>
          <ul className="links">
            <a href="/"> <BsTwitter /> </a><br></br>
            <a href="/"> <BsLinkedin /> </a><br></br>
            <a href="/"> <BsInstagram /> </a><br></br>
            <a href="/"> <BsFacebook /> </a>
          </ul>
        </div>
        <div className="content">
          <h5>Modern <br></br>
            <span>Printing</span> Agency</h5>
          <div className='para'>
            <p>
              We are committed to make every project successful,
              regardless of its size.We are a strong and reliable
              partner and we work closely with our customers.
            </p>
          </div>
         
          <button className='btn_1'>Contact Now</button>
          <button className='btn_2'>Know more</button>
        
        </div>
      </div>
      <div className="banner__img">
        <img src={images.banner} alt="banner" />
      </div>
    </section>
  )
}

export default Body;