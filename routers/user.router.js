const express = require('express')

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require ('../controllers/user.controller')

const user_route = express.Router()

user_route.post('/',createUser);
user_route.get('/',getAllUsers);
user_route.get('/:id',getUserById);
user_route.put('/:id',updateUser);
user_route.delete('/:id',deleteUser);



module.exports = user_route
