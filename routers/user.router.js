const express = require('express')

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require ('../controllers/user.controller')

const user_route = express.Router()

user_route.post('/api/users',createUser);
user_route.get("/api/users",getAllUsers);
user_route.get("/api/users/:id",getUserById);
user_route.put("/api/users/:id",updateUser);
user_route.delete("/api/users/:id",deleteUser);



module.exports = user_route
