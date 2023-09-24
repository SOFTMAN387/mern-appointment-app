import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import  jwt  from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const genToken=user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_TOKEN_KEY,{
        expiresIn:"15d",
    })
}
export const register=async(req,res)=>{
    const {name,email,password,photo,role,gender}=req.body;
    try {
        let user=null;
        if(role==='patient'){
            user=await User.findOne({email});
        }else if(role==='doctor'){
            user=await Doctor.findOne({email});
        }
    //Checking user exists or not ==========
        if(user){
            return res.status(400).json({message:"user already exists"});
        }
    //Hashing Password======================
    const salt=await bcryptjs.genSalt(10);
    const hasPassword=await bcryptjs.hash(password,salt);
    if(role==='patient'){
        user=new User({
            name,
            email,
            password:hasPassword,
            photo,
            role,
        })
    }

    if(role==='doctor'){
        user=new Doctor({
            name,
            email,
            password:hasPassword,
            photo,
            role,
        })
    }

    await user.save();
    res.status(200).json({success:true,message:"User Created Sucessfull !"});



    } catch (error) {
    res.status(500).json({success:false,message:"Internal server error...."});
        
    }
}


export const login=async(req,res)=>{
    let user=null
    const {email,password}=req.body;
    try {
        const patient=await User.findOne({email});
        const doctor=await User.findOne({email});
        if(patient){
            user=patient;
        }
        if(doctor){
            user=doctor;
        }
        if(!user){
            return res.status(400).json({message:"User Not Found !"});
        }

        const isPasswordMatch=await bcryptjs.compare(req.body.password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({status:false, message:"Invalid Credential"});

        }
        //Generate JWT==========
        const token=genToken(user);
        const {password,role,appointment,...rest}=user._doc
        return res.status(200).json({status:true,message:"Successfully Login..",token,data:{...rest},role});
    } catch (error) {
        return res.status(500).json({status:false, message:"Login Failed"});
    }
}