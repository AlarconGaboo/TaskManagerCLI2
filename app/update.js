const { loadTasksFromFile, saveTasksToFile } = require('./fileManager');

const updateTask = (id, titulo, contenido) => {
  const tasks = loadTasksFromFile();
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    console.log(`No se encontró la tarea con el ID: ${id}`);
    return;
  }

  tasks[index].titulo = titulo || tasks[index].titulo;
  tasks[index].contenido = contenido || tasks[index].contenido;
  saveTasksToFile(tasks);
  console.log('Tarea actualizada:', tasks[index]);
};

module.exports = { updateTask };
