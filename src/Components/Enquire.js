import React from 'react'
import "./Enquire.css";
import { BiUser } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPhoneFill } from 'react-icons/bs';
import { BsFillPenFill } from 'react-icons/bs';

const Enquire = () => {
    return (
        <div className='enq'>
            <h2>Enquire Now</h2>
            <form className='form'>
                <label className='txt'><BiUser/>Full name</label>
                <input className='box' type="text" name='Name' placeholder='Name' />
                <label className='txt'>< HiOutlineMail/>Email</label>
                <input className='box' type="email" name='email' placeholder='Email' />
                <label className='txt'><BsFillPhoneFill/>Ph-Number</label>
                <input className='box' type="text" name='Number' placeholder='Number' />
                <br></br>
                <label className='txt'><BsFillPenFill/>Message</label>
                <textarea className='box_text'></textarea>
                <button className='btn_sub'>Submit</button>
            </form>
        </div>
    )
}

export default Enquire;