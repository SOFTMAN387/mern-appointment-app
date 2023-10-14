import userImg from "../../assets/images/doctor-img01.png";
import { actions } from '../../redux/Reducers/authReducer';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import MyBooking from "./MyBooking";
import MyProfile from "./MyProfile";
import useFetchData from "../../hooks/useFetchData";
const UserAccount = () => {
  const {data,loading,error}=useFetchData('api/v1/users/profile/me');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [tab,setTab]=useState("bookings");
 
  const logout=()=>{
    // localStorage.removeItem('userData');
    // navigate("/login");
    dispatch(actions.logoutUser());
    navigate("/login");
  }
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

    
    {!loading  && !error && 
     <div className='grid md:grid-cols-3 gap-10'>
     <div className='pb-[50px] px-[30px] rounded-md'>
       <div className=' flex items-center justify-center'>
         <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
           <img  src={userImg} alt='' className='w-full h-full '/>
         </figure>
       </div>
       <div className='text-center mt-4'>
         <h3 className='text-[19px] leading-[30px] text-headingColor font-bold'>Dr.Manish Gupta</h3>
         <p className='text-textColor text-[15px] leading-6 font-medium'>ermanishgupa@gmail.com</p>
         <p className='text-textColor text-[15px] leading-6 font-medium'>Blood Type: <span className='ml-2 text-headingColor text-[22px] leading-8'>O +ve</span></p>
       </div>
       <div className='mt-[50px] md:mt-[100px]'>
         <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white' onClick={logout}>
           Logout
         </button>
         <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
         Delete Account
         </button>
       </div>
     </div>
     <div className='md:col-span-2 md:px-[30px] '>
       <div>
         <button onClick={()=>setTab("bookings")} className={`${tab==="bookings" && 'bg-primaryColor text-white font-normal' } p-2 mr-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
           My Bookings
         </button>
         <button  onClick={()=>setTab("settings")} className={`${tab==="settings" && 'bg-primaryColor text-white font-normal' } p-2 mr-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
          Profile Setting
         </button>
       </div>
       {tab==="bookings" && <MyBooking />}
       {tab==="settings" && <MyProfile user={data} />}
     </div>
   </div>
    }
   

 
  </section>
  
  </>
  )
}

export default UserAccount;