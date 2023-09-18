import React from 'react'
import DoctorCard from "../../components/Doctors/DoctorCard";
import {doctors} from "../../assets/data/doctors";
import Testimonials from '../../components/Testimonials/Testimonials';
const Doctors = () => {
  return (
 <>
 <section className='bg-[#fff9ea]'>
  <div className="container text-center">
    <h2 className='heading'>Find a Doctor</h2>
    <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
      <input type='search' className='py-4 pl-4 pr-2 bg-transparent m-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='search Doctor'/>
      <button className='btn mt-0 rounded-[0px] rounded-r4-md'>Search</button>
    </div>

  </div>
 </section>
 <section>
  <div className="container">
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:grid-cols-4 '>
    {doctors.map((doctor)=>{
        return(<>
        <DoctorCard key={doctor.id} doctor={doctor} />
        </>)
    })}
  </div>
  <Testimonials />
  </div>

 </section>
 
 </>
  )
}

export default Doctors