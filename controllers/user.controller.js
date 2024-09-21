const user_model = require('../models/user.model')
const userAsyncWrapper = require('../middleware/aync_wrapper.middleware')

const createUser = userAsyncWrapper(async (req, res) => {
    const product = await user_model.create(req.body);
    return res.status(201).json({ message: "User Created", data: product });
})

const getAllUsers = userAsyncWrapper(async (req, res) => {
    const { id } = req.params;
    const users = await user_model.find({});
    res.status(200).json({ message: "Users Found", data: users })

})

const getUserById = userAsyncWrapper(async (req, res) => {
    const { id } = req.params;
    const users = await user_model.findById(id)  // find one using mapping the coloums and req params
    res.status(200).json({ message: "User Found", data: users })

})

const updateUser = userAsyncWrapper(async (req, res) => {
    const { id } = req.params;
    // update the database and retrieve the new record with validators 
    const users = await user_model.findOneAndUpdate({ _id: id }, req.body, { new: true, validator: true });
    if (!users) {
        return res.status(404).json({ message: "Users Not Found", data: null });
    }
    return res.status(200).json({ message: "Users Found", data: users });

})


const deleteUser = userAsyncWrapper(async (req, res) => {
    const { id } = req.params;
    const users = await user_model.findByIdAndDelete(id); // hold the deleted user 

    // if the record is there , then the record will be deleted
    if (!users) {
        return res.status(404).json({ message: "Users Not Found", data: null });
    }

    return res.status(200).json({ message: "Users Found", data: users });

})


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}