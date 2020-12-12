// YARGS TE AYUDA A RESIVIR MEJOR LAS VARIABLES POR LINEA DE COMANDOS Y ASI CREAR OTROS COMANDOS PARA SER EJECUTADOS
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar', 'Escribir en consola el listado de la multiplicacion', opt)
    .command('crear', 'Crear un archivo de texto con la tabla de multiplicar seleccionada', opt)
    .help()
    .argv;

module.exports = {
    argv
}