const notFound=(req,res)=>{
    res.status(404).json('Requested URI Not Found');
}



module.exports = notFound