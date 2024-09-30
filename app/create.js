const { v4: uuidv4 } = require('uuid');
const { loadTasksFromFile, saveTasksToFile } = require('./fileManager');

const createTask = (titulo, contenido) => {
  const tasks = loadTasksFromFile();
  const newTask = {
    id: uuidv4().substring(0, 8),
    titulo,
    contenido,
  };
  tasks.push(newTask);
  saveTasksToFile(tasks);
  console.log('Tarea creada:', newTask);
};

module.exports = { createTask };
