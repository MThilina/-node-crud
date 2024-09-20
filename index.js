const  express = require('express')
const mongoose = require('mongoose')
const user_route = require('./routers/user.router')

const app = express()
const port = 5000

// middleware initialization 
app.use(express.json())
app.use('/api/users',user_route)


// password has to be URL encoded if there are especial characters 
mongoose.connect("mongodb+srv://thilinamanawadu:Tsl%4020638@backend.6ro5b.mongodb.net/Node-Crud?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
console.log("Database has been connected.");
})
.catch((e)=>{
    console.log("Database connection failed"+e.message);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))