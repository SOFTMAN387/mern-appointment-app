import React from 'react'

const DoctorAbout = () => {
  return (
  <>
  <div>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>MK. Jha</span>
        </h3>
        <p className='text__para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos eveniet ea dolor quidem, reprehenderit quasi veritatis facilis nobis magnam veniam aperiam nemo, reiciendis ab velit corporis architecto, magni eligendi fugiat consequatur. Distinctio voluptates commodi et quis, ad, fuga obcaecati repudiandae laudantium dignissimos, odit atque! Necessitatibus sit voluptatum cumque delectus.
        </p>
      
    </div>
    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h3>
        <ul className='mt-12'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>Sep 26,2014 - jul 2016</span>
                    <p className='text-[16px] leading-6 font-medium text-textCOlor'>PHD in surgoen</p>
                    
                </div>
                <p className='text-[14px] leading-5 font-medium text-textCOlor'>New,Apollo Hospital,india</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>Nov 20,2010 - Aug 8 2014</span>
                    <p className='text-[16px] leading-6 font-medium text-textCOlor'>PHD in surgoen</p>
                    
                </div>
                <p className='text-[14px] leading-5 font-medium text-textCOlor'>New,Apollo Hospital,india</p>
            </li>
        </ul>
    </div>
    <div className='mt-12'>
    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                jan 18,2017 - jul 2016
                </span>
                <p className='text-[16px] leading-6 font-medium text-textCOlor'>
                    Sr.surgoen</p>
                <p className='text-[14px] leading-5 font-medium text-textCOlor'>New,Apollo Hospital,india</p>

            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                jan 18,2017 - jul 2016
                </span>
                <p className='text-[16px] leading-6 font-medium text-textCOlor'>
                    Sr.surgoen</p>
                <p className='text-[14px] leading-5 font-medium text-textCOlor'>New,Apollo Hospital,india</p>

            </li>
        </ul>
    </div>
  </div>
  </>
  )
}

export default DoctorAbout