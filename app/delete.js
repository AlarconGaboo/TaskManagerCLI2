const { loadTasksFromFile, saveTasksToFile } = require('./fileManager');
const _ = require('lodash'); // Importar lodash

const deleteTask = (id) => {
  const tasks = loadTasksFromFile();
  const initialLength = tasks.length;

  // Utilizar lodash para eliminar la tarea
  _.remove(tasks, (task) => task.id === id);

  if (tasks.length === initialLength) {
    console.log(`No se encontró la tarea con el ID: ${id}`);
    return;
  }

  saveTasksToFile(tasks);
  console.log('Tarea eliminada con éxito.');
};

module.exports = { deleteTask };
