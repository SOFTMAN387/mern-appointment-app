import { useState,useEffect } from 'react';
import { BASE_URL } from '../../config';
import { useSelector } from "react-redux/es/hooks/useSelector";

const useFetchData = (url) => {
    const userToken=useSelector((state)=>state.currentUser[0].token);
    const [data,setData]=useState();
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                setLoading(true);
                const res=await fetch(`${BASE_URL}/${url}`,{
                    headers:{
                        Authorization:`Bearer ${userToken}`
                    }
                })
                const result= await res.json();
                if(!res.ok){
                   throw new Error(result.message);
                }
                console.log(result);
                setData(result);
                setLoading(false);
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchData();
    },[url])
 
    return {data,loading,error}
}

export default useFetchData;