
const  { v4:uuidv4 }  =  require ( 'uuid' ) ;  // <== ¡ELIMINADO!

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {
        this.desc = desc;
        this.id = uuidv4();
    }
}
module.exports = Tarea;