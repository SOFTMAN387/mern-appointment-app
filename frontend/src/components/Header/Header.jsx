import {useEffect,useRef} from 'react'
import logo from "../../assets/images/logo.png"
import {NavLink,Link} from "react-router-dom"
import {BiMenu} from "react-icons/bi"
import { useSelector } from 'react-redux/es/hooks/useSelector'
// import userImg from "../../assets/images/avatar-icon.png"
import { actions } from '../../redux/Reducers/authReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loginData = useSelector((state) => state.currentUser[0]) || [];
  // console.log(loginData);
  const navLinks=[
    {
      path:"/home",
      display:"Home"
    },
    {
      path:"/doctors",
      display:"Find a Doctor"
    },
    {
      path:"/services",
      display:"Services"
    },
    {
      path:"/contact",
      display:"Contact"
    },
    
  ];

  const headerRef=useRef(null);
  const menuRef=useRef(null);
  const handleStickyHeader =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header');
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return ()=>window.removeEventListener('scroll',handleStickyHeader)
  })
  const toggleMenu=()=>menuRef.current.classList.toggle('show__menu');
  const logout=()=>{
    // localStorage.removeItem('userData');
    // navigate("/login");
    dispatch(actions.logoutUser());
    navigate("/login");
  }
  return (
<>
<header className='header flex items-center' ref={headerRef}>
<div className="container">
  <div className='flex items-center justify-between'>
    {/* ===========Logo============*/}
    <div>
      <img src={logo} alt='logo'/>
    </div>
        {/* ===========Menu============*/}
        <div className="navigation" ref={menuRef} >
          <ul className='menu flex items-center gap-[2.7rem]' onClick={toggleMenu}>
            {navLinks.map((link,index)=>{
             return(
              <>
               <li key={index}>
                <NavLink 
                to={link.path}
                className={navClass=>navClass.isActive?"text-primaryColor text-[16px] leading-7 font-[600]":
                "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}
                
                >{link.display}</NavLink>
              </li>
              </>
             )
            })}
          </ul>
        </div>
         {/* ===========Nav Right============*/}
         <div className='items-center flex gap-4'>
         {loginData?.token && <div >
            <Link to={`${loginData?.role==='doctor'?'/doctor/profile/me':'/users/profile/me'}`}>
              <figure className='w-[35px] rounded-full '>
                <img src={loginData?.data.photo} alt='' className='w-full rounded-full'/>
              </figure>
            </Link>
          </div> }
         
         
          {loginData?.length===0?(
             <Link to="/login">
             <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex overflow-hidden items-center justify-center rounded-[50px]'>Login</button>
           </Link>
          ):(
           
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex overflow-hidden items-center justify-center rounded-[50px]'  onClick={logout}>LogOut</button>
         
          )}
         
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>
         </div>

  </div>
</div>
</header>
</>  )
}

export default Header;