import {useState} from 'react'
import signupImg from "../assets/images/signup.gif";
import { Link,useNavigate} from 'react-router-dom';
// import avatarImg from "../assets/images/doctor-img01.png";
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import HashLoader from "react-spinners/HashLoader";
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [selectFile,setFile]=useState(null);
  const [previewUrl,setPreviewUrl]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    name:'',
    email:"",
    password:'',
    photo:selectFile,
    gender:'',
    role:'patient'
  });
  const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleFileInputChang=async(e)=>{
    const file= e.target.files[0];
    const data=await uploadImageToCloudinary(file);
    setPreviewUrl(data.url);
    setFile(data.url);
    setFormData({...formData,photo:data.url})
    console.log(data);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const res=await fetch(`${BASE_URL}/api/v1/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const {message}=await res.json();
      if(!res.ok){
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');
      
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }

  }
  return (
   <>
   <section className='px-5 xl:px-0'>
    <div className='max-w-[1170px] mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/*============image Box============*/}
        <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
          <figure className='rounded-l-lg'>
            <img src={signupImg} alt='' />
          </figure>
        </div>
         {/*============signUp Form============*/}
         <div className='rounded-l-lg lg:pl-16 py-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
            Create an <span className='text-primaryColor'>account</span>
          </h3>
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
      <div className='mb-5'>
            <input type='password' 
            placeholder='Enter Your Password' 
            onChange={handleInputChange}
            value={formData.password}
            name='password' 
            //  onChange={handleInputChange}
            required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            plaholder:text-textColor rounded-md cursor-pointer'/>
      </div>
      <div className='mb-5 flex items-center justify-between'>
        <label  className='text-headingColor font-bold text-[16px] leading-7'>
          are you a:
          <select name="role" 
            onChange={handleInputChange}
            value={formData.role} 
            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
            <option value="patient"> Patient</option>
            <option value="doctor"> doctor</option>
          </select>
                  
        </label>
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
       {selectFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex
        items-center jsutify-center'>
          <img src={previewUrl} alt='' className='w-full rounded-full' />

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
        <button disabled={loading && true} className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2'>{loading ? <HashLoader size={35} color='#fffffff' />: "Sign Up"}</button>
      </div>
      <p className='mt-5 text-textColor text-center'>Already have an account ? <Link to="/login" className=' text-primaryColor font-medium ml-1 cursor-pointer'>Login here</Link></p>
          </form>
      
         </div>
      </div>
    </div>

   </section>
   </>
  )
}

export default SignUp