  /*
  FileName: ../controllers/contact.js
  Name:Chunghyun Lee
  Student_number: 301000913
  Course: COMP229-401
  Date: 2025/06/06
  */

import ProjectModel from '../models/contacts.js';

// Read all contacts
export const getAllProjects = async (req, res) => {
    try {
       const projects = await  ProjectModel.find(); //db.projects.find() if run using mongo shell
       res.status(200).json(projects) // 200 HTTP status code for success
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Read a contacts by ID
export const getProjectById = async (req, res) => {
    try {
       const project = await  ProjectModel.findById(req.params.id); //db.projects.findById(req.params.id) if run using mongo shell
       if (!project){
            return res.status(404).json({ message: 'contacts not found' }); // 404 HTTP status code for not found
       }
       
       res.status(200).json(project) // 200 HTTP status code for success
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Create contacts
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ message: 'Need firstName and email' });
    }

    const newContact = new ProjectModel({ firstName, lastName, email });
    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a contacts by ID
export const updateProject = async (req, res) => {
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Return the updated document and run validators
        );
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' }); // 404 HTTP status code for not found
        }
        res.status(200).json(updatedProject); // 200 HTTP status code for success
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Delete a contacts by ID
export const deleteProject = async(req, res) => {
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id); //db.projects.findByIdAndDelete(req.params.id) if run using mongo shell
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' }); // 404 HTTP status code for not found
        }
        res.status(200).json({ message: 'Project deleted successfully' }); // 200 HTTP status code for success
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    } 
}
