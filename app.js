const { argv } = require('./config/yargs');
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

const comando = argv._[0];
switch (comando) {
  case 'crear':
    const tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    const listado = porHacer.getListado(argv.completado);
    for (const tarea of listado) {
      console.log('========== Por Hacer =========='.green);
      console.log(tarea.descripcion);
      console.log('Estado:', tarea.completado);
      console.log('==============================='.green);
    }
    break;
  case 'actualizar':
    const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    const borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log('Comando no reconocido');
}
