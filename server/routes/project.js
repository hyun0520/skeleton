import express from 'express';
import { createproject, deleteProject, getAllProjects, getProjectById, UpdateProject } from '../controllers/project.js';

const router = express.Router();
// HTTP  Verbs for RESTful API GET, POST, PUT, DELETE


//GET / api/Projects
router.get('/', getAllProjects);

//GET / api/Projects/:id
router.get('/:id', getProjectById);

//GET / api/Projects
router.post('/', createproject);

//GET / api/Projects/:id
router.put('/:id', UpdateProject);

//delete / api/project/:id
router.delete('/:id', deleteProject);



export default router;