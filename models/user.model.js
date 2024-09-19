const mongoose = require('mongoose')
const express = require ('express')

const userSchema = mongoose.Schema({

        id:{
            type:String,
            required:[true,"Unique Identity"]
        },

        firstname:{
            type:String,
            required:[true,"First Name"]
        },

        lastname:{
            type:String,
            required:[true,"Last Name"]
        },

        passportno:{
            type:String,
            required:false,
            default:'NPM-00000'
        }
})
   

const User = mongoose.model("User",userSchema); 
module.exports = User;