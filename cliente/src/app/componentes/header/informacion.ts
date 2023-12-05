interface acceso{
    nombre:string;
    ruta:string;
}
const roles:acceso[] = [
    { nombre: "Administrador", ruta:  "administrador"},
    { nombre: "Director", ruta:  "directorMain"},
    { nombre: "Jefatura", ruta:  "jefaturaMain"},
    { nombre: "Consejo de Facultad", ruta:  ""},
    { nombre: "Evaluador", ruta:  "evaluadorRegistros"},
    { nombre: "Coordinación", ruta:  "coordinadorRegistro"}]
export default roles;