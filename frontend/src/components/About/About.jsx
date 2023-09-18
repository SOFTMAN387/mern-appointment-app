import React from 'react'
import aboutImage from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';
const About = () => {
  return (
   <>
   <section>
    <div className='container'>
        <div className='flex justify-vetween gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/*++++++++++++++About Image+++++++++++++*/}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImage} alt=''/>
            <div className='absolute z-20 bottom-4 w-[220px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
            <img src={aboutCard} alt=''/>
            </div>
            </div>
           {/*=======About Content========*/}
           <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel voluptatibus delectus a cumque ipsum recusandae omnis voluptas, et esse minima placeat expedita enim minus explicabo quia, aliquid consequatur est?
            </h2>
            <p className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatum culpa modi dolor ex repudiandae sit illum id molestiae, eius debitis inventore amet sequi excepturi ea velit sapiente vero sed.</p>
            <p className='text__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel, voluptate ipsam libero odit, nostrum suscipit veritatis similique culpa repudiandae cum quasi accusantium magnam cupiditate praesentium? Quibusdam deserunt fuga tempore.</p>
            <Link to="/">
                <button className='btn'>Learn More...</button>
            </Link>
           </div>

        </div>
    </div>
   </section>
   </>
  )
}

export default About;