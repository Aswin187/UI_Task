import React from 'react'
import "./Product.css";
import { images } from '../Constants';

const Product = () => {
    return (
        <section className='product'>
            <h6 className='sub_heading'> Featured product </h6>
            <h3 className='main_heading'> Our Products </h3>

            <div className='box_container'>
                <div className='box'>
                    <img src= {images.mugimg} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.cardimg} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.flower} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.coffee} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.booklet} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.tshirt} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.paper} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>

                <div className='box'>
                    <img src= {images.mock} />
                    <h6>Product Name</h6>
                    <p>Category</p>
                    <h6 className='moq'>MOQ:</h6>
                    <p className='khd'>GAKJDXGDN</p>
                    <button className='wp'>whatsapp</button>
                    <button className='en'>Enquiry</button>
                </div>


                
            </div>
        </section>
    )
}

export default Product;