const  express = require('express')
const user_route = require('./routers/user.router')
const connectDB = require('./db/connection.db')
const notFount = require('./middleware/not_found.middleware')
const errorHandelMiddleware = require('./middleware/error_handel.middleware')

require('dotenv').config()

const port = 5000
const app = express()

// middleware initialization 
app.use(express.json())
// routers 
app.use('/api/users',user_route)
app.use(notFount) // this is set for the URI which are not found 


app.use(errorHandelMiddleware) // seperate middleware for errorhandel


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
