import {useState} from 'react'
import {Link} from "react-router-dom"
const Login = () => {
  const [formData,setFormData]=useState({
    name:'',
    password:''
  });
  const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
   <>
   <section className='px-5 lg:px-0'>
    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
        Hello!<span className='text-primaryColor '> Welcome </span>Back </h3>
        <form className='py-4 md:py-0'>
      <div className='mb-5'>
        <input type='email' placeholder='Enter Your Email' value={formData.eamil} name='email' onChange={handleInputChange}
        required className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
         text-[16px] leading-7 text-headingColor
        plaholder:text-textColor rounded-md cursor-pointer'/>
      </div>
      <div className='mb-5'>
        <input type='password' placeholder='Enter Your Password' value={formData.password} name='password' onChange={handleInputChange}
        required className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
        plaholder:text-textColor rounded-md cursor-pointer'/>
      </div>
      <div className='mt-2'>
        <button className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2'>Login</button>
      </div>
      <p className='mt-5 text-textColor text-center'>Don't have an account ? <Link to="/register" className=' text-primaryColor font-medium ml-1 cursor-pointer'>Register here</Link></p>
    </form>
    </div>
   

   </section>
   </>
  )
}

export default Login