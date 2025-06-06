  /*
  FileName: ../controllers/users.js
  Name:Chunghyun Lee
  Student_number: 301000913
  Course: COMP229-401
  Date: 2025/06/06
  */
import UserModel from '../models/users.js';

// Read all users (Get)
export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Read all users ID (Get)
export const getUsersId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Created new users(Post)
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();

        const userData = newUser.toObject();
        delete userData.password;

        res.status(201).json({ message: 'Created new User', user: userData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Update a users by ID (Put)
export const updateUsers = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Cannot found users' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a users by ID (Delete)
export const deleteUserId = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};