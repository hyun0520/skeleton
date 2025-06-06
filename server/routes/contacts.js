  /*
  FileName: ../routes/contact.js
  Name:Chunghyun Lee
  Student_number: 301000913
  Course: COMP229-401
  Date: 2025/06/06
  */
import express from 'express';
import {deleteProject, getAllProjects, getProjectById, updateProject, createContact  } from '../controllers/contacts.js';

const router = express.Router();
// POST /api/contacts
router.post('/', createContact);

// GET /api/contacts
router.get('/', getAllProjects);

// GET /api/contacts/:id
router.get('/:id', getProjectById);

// PUT /api/contacts/:id
router.put('/:id', updateProject);

// DELETE /api/contacts/:id
router.delete('/:id', deleteProject)

export default router;