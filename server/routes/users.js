  /*
  FileName: ../routes/users.js
  Name:Chunghyun Lee
  Student_number: 301000913
  Course: COMP229-401
  Date: 2025/06/06
  */
import express from 'express';
import { createUser, getUsers, getUsersId, deleteUserId, updateUsers} from '../controllers/users.js';

const router = express.Router();

// create a User POST /api/users/login
router.post('/', createUser);
// GET /api/users
router.get('/', getUsers);
// GET /api/users/:id
router.get('/:id', getUsersId);
// DELETE /api/users/:id
router.delete('/:id', deleteUserId);
// PUT /api/users/:id
router.put('/:id', updateUsers);
export default router;