const user_model = require('../models/user.model')

const createUser = async (req,res)=>{
    try{
        const product = await user_model.create(req.body);
        return res.status(201).json({message:"User Created",data:product});
    }catch(error){
        console.log(`Error occured: ${error.message}`);
        return res.status(500).json({message:"Error occured",data:error.message});
    }
}

const getAllUsers = async (req,res)=>{
    const {id} = req.params;
    try{
        const users = await user_model.find({});
        res.status(200).json({message:"Users Found",data:users})
    }catch(error){
        console.log(`Error occured: ${error.message}`);
        return res.status(500).json({message:"Error occured",data:error.message});
    }
}

const getUserById = async (req,res)=>{
    const {id} = req.params;
    try{
        const users = await user_model.findOne({id:id})  // find one using mapping the coloums and req params
        res.status(200).json({message:"User Found",data:users})
    }catch(error){
        console.log(`Error occured: ${error.message}`);
        return res.status(500).json({message:"Error occured",data:error.message});
    }
}

const updateUser = async (req,res)=>{
    const {id} = req.params;
    try{
        const users = await user_model.findByIdAndUpdate(id,req.body);
       
        if(!users){
           return res.status(404).json({message:"Users Not Found",data:null});
        }

        // check updated user and return
        const updatedUsers = await user_model.findById(id);

       return res.status(200).json({message:"Users Found",data:updatedUsers});
    }catch(error){
        console.log(`Error occured: ${error.message}`);
        return res.status(500).json({message:"Error occured",data:error.message});
    }
}


const deleteUser = async (req,res)=>{
    const {id} = req.params;
    try{
        const users = await user_model.findByIdAndDelete(id); // hold the deleted user 
       
         // if the record is there , then the record will be deleted
        if(!users){
           return res.status(404).json({message:"Users Not Found",data:null});
        }

       return res.status(200).json({message:"Users Found",data:users});
    }catch(error){
        console.log(`Error occured: ${error.message}`);
        return res.status(500).json({message:"Error occured",data:error.message});
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}