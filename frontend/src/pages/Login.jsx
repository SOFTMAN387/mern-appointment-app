import {useState} from 'react'
import {Link} from "react-router-dom";
import { actions } from '../redux/Reducers/authReducer';
import { useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { toast } from 'react-toastify';
import { BASE_URL } from '../../config';
const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);
  const [formData,setFormData]=useState({
    email:'',
    password:''
  });
  const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const res=await fetch(`${BASE_URL}/api/v1/auth/login`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const userData=await res.json();
      if(!res.ok){
        throw new Error(message);
      }
      // console.log(userData);
      dispatch(actions.loginUser([userData]));
      setLoading(false);
      toast.success(userData.message);
      navigate('/');
      
    } catch (err) {
      toast.error(userData.message);
      setLoading(false);
    }

  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     username: usernameRef.current.value,
  //     password: passwordRef.current.value,
  //   };
  //   try {
  //     const res = await axios.post("/users/login", user);
  //     console.log(res);
  //     // setCurrentUsername(res.data.username);
  //     dispatch(actions.loginUser([res.data,token,role]));
  //     // myStorage.setItem('user',JSON.stringify( res.data));
  //     setShowLogin(false);
  //   } catch (err) {
  //     setError(true);
  //   }
  // };
  return (
   <>
   <section className='px-5 lg:px-0'>
    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
        Hello!<span className='text-primaryColor '> Welcome </span>Back </h3>
        <form className='py-4 md:py-0' onSubmit={handleSubmit}>
      <div className='mb-5'>
        <input type='email' placeholder='Enter Your Email' value={formData.email} name='email' onChange={handleInputChange}
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
      <button disabled={loading && true} className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2'>{loading ? <HashLoader size={35} color='#fffffff' />: "Sign In"}</button>
      </div>
      <p className='mt-5 text-textColor text-center'>Don't have an account ? <Link to="/register" className=' text-primaryColor font-medium ml-1 cursor-pointer'>Register here</Link></p>
    </form>
    </div>
   

   </section>
   </>
  )
}

export default Login