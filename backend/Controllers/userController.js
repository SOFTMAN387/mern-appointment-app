import User from "../models/UserSchema.js";

export const updateUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const updateUserById=await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true,message:"Successfully Updated...",data:updateUserById});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Updated..."});
    }
}



export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const deleteUserById=await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully Deleted..."});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Deleted..."});
    }
}



export const findUser=async(req,res)=>{
    const id=req.params.id;
  

    try {
        const findUserById= await User.findById(id).select('-password');
        res.status(200).json({success:true,message:"Successfully Found user...",data:findUserById});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Found user..."});
    }
}



export const FindAllUser=async(req,res)=>{

    try {
        const FindAllUser=await User.find({}).select('-password');
        res.status(200).json({success:true,message:"Successfully Found ALL User..",data:FindAllUser});
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Found ALL User.."});
    }
}


