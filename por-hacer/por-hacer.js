const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  const data = JSON.stringify(listadoPorHacer);
  fs.writeFile('./db/data.json', data, err => {
    if (err) {
      throw new Error('No se puedo grabar', err);
    }
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = descripcion => {
  cargarDB();

  const porHacer = {
    descripcion,
    completado: false,
  };
  listadoPorHacer.push(porHacer);

  guardarDB();

  return porHacer;
};

const getListado = (completado = true) => {
  cargarDB();
  return listadoPorHacer.filter(tarea => tarea.completado === completado);
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();

  const index = listadoPorHacer.findIndex(
    tarea => tarea.descripcion === descripcion
  );

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = descripcion => {
  cargarDB();

  const index = listadoPorHacer.findIndex(
    tarea => tarea.descripcion === descripcion
  );

  if (index >= 0) {
    const tarea = listadoPorHacer.splice(index, 1);
    guardarDB();
    return tarea;
  } else {
    return 'Tarea no encontrada';
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
