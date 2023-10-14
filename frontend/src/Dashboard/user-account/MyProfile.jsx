
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import uploadImageToCloudinary from '../../../utils/uploadCloudinary';
import HashLoader from "react-spinners/HashLoader";
import { BASE_URL } from '../../../config';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux/es/hooks/useSelector";
const MyProfile = ({user}) => {
    console.log(user);
    const userToken=useSelector((state)=>state.currentUser[0].token);
    const [selectFile,setFile]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
      name:'',
      email:"",
      password:'',
      photo:null,
      gender:'',
      bloodType:'',
    });

    useEffect(()=>{
        setFormData({
            name:user?.data?.name,email:user?.data?.email,password:user?.password,photo:user?.data?.photo,gender:user?.data?.gender,bloodType:user?.data?.bloodType
        });
    },[user]);
    const handleInputChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleFileInputChang=async(e)=>{
      const file= e.target.files[0];
      const data=await uploadImageToCloudinary(file);
      setFile(data.url);
      setFormData({...formData,photo:data.url})
      console.log(data);
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      setLoading(true);
      try {
        const res=await fetch(`${BASE_URL}/api/v1/users/${user?.data?._id}`,{
          method:'put',
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${userToken}`
          },
          body: JSON.stringify(formData)
        })
        const {message}=await res.json();
        if(!res.ok){
          throw new Error(message);
        }
  
        setLoading(false);
        toast.success(message);
        navigate('/');
        
      } catch (err) {
        toast.error(err.message);
        setLoading(false);
      }
  
    }
  return (
   <>
   <div className='mt-10'>
   <form onSubmit={handleSubmit}>
          <div className='mb-5'>
            <input type='text' 
            placeholder='Full Name' 
            onChange={handleInputChange}
            value={formData.name}
            name='name' 
            //  onChange={handleInputChange}
            required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            plaholder:text-textColor rounded-md cursor-pointer'/>
      </div>
      <div className='mb-5'>
            <input type='email' 
            placeholder='Enter Your Email' 
            onChange={handleInputChange}
            value={formData.email}
            name='email' 
            //  onChange={handleInputChange}
            required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            plaholder:text-textColor rounded-md cursor-pointer'/>
      </div>
      {/* <div className='mb-5'>
            <input type='password' 
            placeholder='Enter Your Password' 
            onChange={handleInputChange}
            value={formData.password}
            name='password' 
            //  onChange={handleInputChange}
            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            plaholder:text-textColor rounded-md cursor-pointer'/>
      </div> */}
      <div className='mb-5'>
            <input type='text' 
            placeholder='Enter Your Blood Group' 
            onChange={handleInputChange}
            value={formData.bloodType}
            name='bloodType' 
            //  onChange={handleInputChange}
            required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            plaholder:text-textColor rounded-md cursor-pointer'/>
      </div>
      <div className='mb-5 flex items-center justify-between'>
        <label  className=' ml-2 text-headingColor font-bold text-[16px] leading-7'>
         Gender
          <select name='gender'
            onChange={handleInputChange}
            value={formData.gender}
             className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
            <option value="male"> male</option>
            <option value="female"> female</option>
            <option value="other"> other</option>
          </select>
                  
        </label>
      </div>
      <div className='mb-5 flex items-center gap-3'>
       {formData && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex
        items-center jsutify-center'>
          <img src={selectFile?selectFile:formData.photo} alt='' className='w-full rounded-full' />

        </figure>}
        <div className='relative w-[130px] h-[50px] '>
          <input type='file' 
            onChange={handleFileInputChang}
           
            name='photo' id='customFile' accept='.jpg, .png' className='
          absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer ' />
          <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center
           px-[0.75rem] py-[0.376rem] text-[16px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer '>
            Upload Photo
            </label>
        </div>
      </div>
      <div className='mt-7'>
        <button disabled={loading && true} className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2'>{loading ? <HashLoader size={25} color='#fffffff' />: "Update"}</button>
      </div>
  
          </form>
   </div>
  
   </>
  )
}

export default MyProfile;