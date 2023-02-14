import React from 'react'
import "./Testimoni.css";
import { AiOutlineStar } from 'react-icons/ai';

const Testimoni = () => {
    return (
        <div className='testimonials'>
            <div className='inner'>
                <h6>Client's Voice</h6>
                <h2>What Our Client Says !</h2>
                <div className='border'></div>
                <div className='row1'>
                    <div className='col'>
                        <div className='testmonial'>
                            <img src='' />
                            <div className='name'>SALLY</div>
                            <h6>Designer</h6>
                            <div className='star'>
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />

                            </div>
                            <p className='self'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                            </p>
                        </div>

                    </div>
                    <div className='col'>
                        <div className='testmonial'>
                            <img src='' />
                            <div className='name'>LEO</div>
                            <h6>Devops</h6>
                            <div className='star'>
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />

                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                            </p>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Testimoni