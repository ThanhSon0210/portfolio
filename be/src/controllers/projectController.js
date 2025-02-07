const Project = require('../models/projectModel');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProject = async (req, res) => {
  const { name, link } = req.body;
  if (!name || !link) {
    return res.status(400).json({ message: 'Name and link are required' });
  }
  try {
    const projectId = await Project.createProject(name, link);
    res.status(201).json({ message: 'Project created', projectId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const { name, link } = req.body;
  try {
    const updatedRows = await Project.updateProject(req.params.id, name, link);
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deletedRows = await Project.deleteProject(req.params.id);
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
