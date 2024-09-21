const ayncWrapper = (fn)=>{
    return async (req,res,next)=>{
        try{
            await fn(req,res,next)
        }catch(error){
            res.status(500).json({message:'Error Occured ',data:`${error.message}`});
            next(error.message)
        }
    }
}

module.exports = ayncWrapper;