import {useState} from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedBackForm = () => {
    const [rating,setRating]=useState(0);
    const [hover,sethover]=useState(0);
    const [review,setReview]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
    }
  return (
    <>
    <form action=''>
        <div>
            <h3 className='text-headingColor text-[16px] mt-0 leading-6 font-semibold mb-4'>
                How would you rate the overall experience ?.
            </h3>
            <div>
                {[...Array(5).keys()].map((_,index)=>{
                    index +=1;
                    return(<>
                    <button key={index} 
                    className={`${index<=((rating && hover) ||hover) ?"text-yellowColor":
                "text-grey-400"}
                bg-transparent border-none outline-none text-[22px] cursor-pointer
                    `}
                     onClick={()=>setRating(index)}
                     onMouseEnter={()=>setRating(index)}
                     onMouseLeave={()=>sethover(index)}
                     onDoubleClick={()=>{
                        setRating(0);
                        sethover(0);
                     }}>
                    
                        <span>
                            <AiFillStar />
                        </span>
                    </button>
                </>)
                })}
            </div>
      </div>
        <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] mt-0 leading-6 font-semibold mb-4'>
          Share your feedback and suggestions*
       </h3>
       <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryCOlor w-full px-4 py-3 rounded-md' rows="5" placeholder='write your message'
       onChange={e=>setReview(e.target.value)}></textarea>
       <button type='submit' onClick={handleSubmit} className='btn'>Submit Feedback</button>
        </div>
    </form>
    </>
  )
}

export default FeedBackForm