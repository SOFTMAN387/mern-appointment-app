import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

import { AiFillYoutube,AiFillGithub,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  return (
 <>
 <footer className='pb-16 pt-16'>
  <div className="container">
    <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
      <div>
        <img src={logo} alt='' />
        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
         
          //  Created by Er.Manish Gupta
          //  Copyright © 2023 . All rights reserved.
          //
          
          
        </p>
        <div className='flex items-center gap-3 mt-4'>
          <Link to="/" className=" w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"><AiFillLinkedin /></Link>
          <Link to="/" className=" w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"><AiOutlineInstagram /></Link>
          <Link to="/" className=" w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"><AiFillGithub /></Link>
        </div>
      </div>
      <div className='flex-col'>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
        <ul>
          <li className='mb-4 '>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Home</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>About</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Services</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Blog</Link>
          </li>
        </ul>
      </div>
      <div className='flex-col'>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I Want to</h2>
        <ul>
          <li className='mb-4 '>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Find a Doctor</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Request An Appoiontment</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Find Location</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Get Opinion</Link>
          </li>
        </ul>
      </div>
       <div className='flex-col'>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
        <ul>
          <li className='mb-4 '>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>Donate</Link>
            <Link to="/" className='text-[16px] leading-7 font-[400] text-textColor p-2'>ContactUs</Link>
      
          </li>
        </ul>
      </div>
    </div>
  </div>

 </footer>
 </>
  )
}

export default Footer;