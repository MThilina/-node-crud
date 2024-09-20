const mongoose = require('mongoose')
const express = require ('express')

const userSchema = mongoose.Schema({

        id:{
            type:String,
            required:[true,"Unique Identity"],
            trim:true
        },

        firstname:{
            type:String,
            required:[true,"First Name"],
            trim:true
        },

        lastname:{
            type:String,
            required:[true,"Last Name"],
            trim:true
        },

        passportno:{
            type:String,
            required:false,
            default:'NPM-00000',
            trim:true
        }
},
{timestamp:true})
   

const User = mongoose.model("User",userSchema); 
module.exports = User;