import React, { Fragment } from 'react'
import "./About.css";
import { images } from '../Constants';

const About = () => {
    return (
        <Fragment>
            <section className='about'>
                <div className='row'>
                    <div className='column'>
                        <img src={images.about} />
                    </div>

                    <div className='about-info'>
                        <div className='head'>
                            <h6>WHO WE ARE?</h6>
                            <h2>Notebook Advertising LLC</h2>
                        </div>
                        <p className='para1'>
                            Notebook Advertising LLC  is a printing company in Dubai offering the full range of print services to a variety of clients operating across many different industry sectors.
                             We are a one-stop shop for all your printing requirements;our customised solutions are tailored specifically to your individual needs, ensuring the best.
                        </p>
                        <p className='para2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book.
                        </p>
                         <button className='button'>Know More</button>
                    </div>
            
                
                </div>
            </section>
        </Fragment>
    )
}

export default About;