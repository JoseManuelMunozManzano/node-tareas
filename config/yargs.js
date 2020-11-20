const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea',
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea',
  type: 'boolean',
};

const argv = require('yargs')
  .command('crear', 'Crear una tarea por hacer', { descripcion })
  .command('listar', 'Listar tareas', { completado })
  .command('actualizar', 'Actualiza el estado de una tarea', {
    descripcion,
    completado,
  })
  .command('borrar', 'Borrar una tarea', { descripcion })
  .help().argv;

module.exports = {
  argv,
};
