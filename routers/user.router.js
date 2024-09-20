const express = require('express')

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require ('../controllers/user.controller')

const user_route = express.Router()

user_route.route('/').post(createUser).get(getAllUsers);
user_route.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);


module.exports = user_route
