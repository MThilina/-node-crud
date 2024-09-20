const  express = require('express')
const user_route = require('./routers/user.router')
const connectDB = require('./db/connection.db')
require('dotenv').config()

const port = 5000
const app = express()

// middleware initialization 
app.use(express.json())
// routers 
app.use('/api/users',user_route)


const initializeDB = async (url)=>{
    try{
        await connectDB(url)
        .then(()=>{
            console.log('Database has been connected.')
            app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        })
        .catch((error)=>{
            console.log(`Database connection failed: ${error.message}`)
        })
    }catch(error){
        console.log(`Error occured : ${error.message}`);
    }
}

// connecting through function 
initializeDB(process.env.MONGO_URI); // taking details from the env use the key to retrieve value 
