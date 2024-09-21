const errorHandel = (error,req,res,next) => {
    return res.status(500).json({message:'Error Occured',
                                data:error.message})
}

module.exports = errorHandel;