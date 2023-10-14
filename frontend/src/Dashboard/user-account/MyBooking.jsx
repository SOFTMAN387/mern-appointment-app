import React from 'react'
import useFetchData from '../../hooks/useFetchData';
import DoctorCard from "../../components/Doctors/DoctorCard";
import HashLoader from "react-spinners/HashLoader";
const MyBooking = () => {
    const {data,loading,error}=useFetchData("api/v1/users/appointments/my-appointment");
    console.log(data);
  return (
   <>
   <section>
   <div className=' flex items-center justify-center max-w-[1170px] px-5 mx-auto '>
            {loading &&!error && <div className="max-w-[1170px] px-5 mx-auto">
            <HashLoader color="#0067FF" />
        </div>}
        </div>
        <div className='flex  items-center justify-center max-w-[1170px] px-5 mx-auto '>
            {error&& !loading && <div className="max-w-[1170px] px-5 mx-auto">
           <p>{error}</p>
        </div>}
        </div>
    {!loading && !error && 
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {data?.data?.map((doctor,index)=>{
            return (<>
            <DoctorCard doctor={doctor} key={doctor._id} />
            </>)
        })}
    </div>}
    {!loading && !error && data?.data?.length ===0 && (
        <h2 className='mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor'>
            Oops ! You didn't have any appointment yet..
        </h2>
    )}

   </section>
   </>
  )
}

export default MyBooking;