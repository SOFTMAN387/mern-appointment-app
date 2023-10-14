import Bookings from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
export const updateDoctor=async(req,res)=>{
    const id=req.params.id;
    try {
        const updateDoctorById=await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true,message:"Successfully Updated...",data:updateDoctorById});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Updated..."});
    }
}



export const deleteDoctor=async(req,res)=>{
    const id=req.params.id;
    try {
        const deleteDoctorById=await Doctor.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully Deleted..."});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Deleted..."});
    }
}



export const findDoctor=async(req,res)=>{
    const id=req.params.id;
  

    try {
        const findDoctorById= await Doctor.findById(id).populate('reviews').select('-password');
        res.status(200).json({success:true,message:"Successfully Found Doctor...",data:findDoctorById});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Found Doctor..."});
    }
}



export const FindAllDoctor=async(req,res)=>{
   

    try {
        const {query}=req.query;
        let doctor;
        if(query){
        const FindAllDoctor=await Doctor.find({
            isApproved:"approved",
            $or:[
                {name:{$regex:query,$options:"i"} },
                {specialization:{$regex:query,$options:"i"} },
            ],
        }).select('-password');
        res.status(200).json({success:true,message:"Successfully Found ALL Doctor..",data:FindAllDoctor});
        }else{
            const FindAllDoctor=await Doctor.find({
                isApproved:"approved"
            }).select('-password');
            res.status(200).json({success:true,message:"Successfully Found ALL Doctor..",data:FindAllDoctor});
        }
      
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Found ALL Doctor.."});
    }
}





export const findDoctorProfile=async(req,res)=>{
    const doctorId=req.userId;
  

    try {
        const finddoctorById= await Doctor.findById(doctorId).select('-password');
        if(!finddoctorById){
            res.status(500).json({success:false,message:"Doctor Not Found!..."});
        }
        const appointments =await Bookings.find({doctor:doctorId});
        res.status(200).json({success:true,message:"Profile Info is Getting...",data:finddoctorById});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Something Went Wrong..."});
    }
}
