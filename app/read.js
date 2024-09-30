const { loadTasksFromFile } = require('./fileManager');

const readTasks = () => {
  const tasks = loadTasksFromFile();
  if (tasks.length === 0) {
    console.log('No hay tareas para mostrar.');
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.id}] ${task.titulo} - ${task.contenido}`);
    });
  }
};

module.exports = { readTasks };
