const ayncWrapper = (fn)=>{
    return async (req,res,next)=>{
        try{
            await fn(req,res,next)
        }catch(error){
            next(error) // sending error object to next calling func
        }
    }
}

module.exports = ayncWrapper;