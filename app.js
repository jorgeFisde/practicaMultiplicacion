const { crearArchivo, listarMulti }= require('./multiplicar/multiplicador');
const {argv}  = require('./config/yargs');
const color   = require('colors');
const comando = argv._[0];



switch (comando) {
    case 'listar':
        listarMulti(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo: ${archivo.green} creado con exito!`))
            .catch(console.log);
        break;
    default:
        break;
}






