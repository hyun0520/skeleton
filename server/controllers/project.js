import ProjectModel from '../models/project.js';

// Read all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find(); //db project.find()
        res.status(200).json(projects) // 200 HTTP status code for success
    } catch (error) {
        res.status(500).json({ message: error.message}); //500 HTTP status code for server error
    }
}

// Read a project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id); //db project.findById
        if (!project){
            return res.status(404).json({ message: 'Project not found'}); //404 HTTP status code for not found
        }
        res.status(200).json(project) // 200 HTTP status code for success
    } catch (error) {
        res.status(500).json({ message: error.message}); //500 HTTP status code for server error
    }
}

// Create a new project
export const createproject = async (req, res) => {
    try {
        const newProject = new ProjectModel(req.body) // Create a new project instance
        const savedProject = await newProject.save(); // Save the project to the database
        res.status(201).json(savedProject); //201 HTTP status code for created
    } catch (error) {
        
    }
}

// Update a project by ID
export const UpdateProject = async (req, res) => {
    try {
        const UpdateProject = await ProjectModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Return the updated document and run validators
        );
        if (!UpdateProject){
            return res.status(404).json({ message: 'project not found'}); // 404 HTTP status code for not found
        }
    } catch (error) {
        res.status(500).json({ message: error.message}); //500 HTTP status code for server error
    }
}
// Delete a project by ID
export const deleteProject = async(req, res) => {
    try {
        const deleteProject = await ProjectModel.findByIdAndDelete(req.params.id) //db.projects.findByIdAndeDelete(req.params.id)
        if (!deleteProject){
            return res.status(404).json({ message: 'project not found'}); // 404 HTTP status code for not found
        }
        res.status(200).json(project) // 200 HTTP status code for success

    } catch (error) {
        res.status(500).json({ message: error.message}); //500 HTTP status code for server error
    }
}