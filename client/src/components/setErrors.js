export const setErrors = (
  elaboracion,
  inicio,
  fin,
  estudiante,
  institucion,
  horas,
  estado
) => {
  let errors = {};
  errors.elaboracion = elaboracion ? "" : "proyecto requerido";
  errors.inicio = inicio ? "" : "empresa requerido";
  errors.fin = fin ? "" : "datos requerido";
  errors.estudiante = estudiante ? "" : "descripcion requerido";
  errors.institucion = institucion ? "" : "avances requerido";
  errors.horas = horas ? "" : "dificultades requerido";
  errors.estado = estado ? "" : "comentarios requerido";

  return errors;
};
