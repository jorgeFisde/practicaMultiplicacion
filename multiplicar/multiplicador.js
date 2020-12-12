const fs    = require('fs');
const color = require('colors');

const listarMulti = (base, limite = 10 ) => {

    for (let i = 0; i < limite; i++) {
       console.log( `${base} x ${i} = ${base * i} ` ); 
    }

}

const crearArchivo = async (base, limite  = 10 ) => {

    if (!Number(base)) throw `El valor introducido "${base}" no es un numero`;

    let data          = '',
        nombreArchivo = `tabla-${base}.txt`

    for (let i = 0; i < limite ; i++) {
        data += `${base} x ${i} = ${base * i} \n`
    }

    await fs.writeFile(`./tablas/${nombreArchivo}`, data, (err) => {

        if (err) throw err;

        
    });
    
    return nombreArchivo;
}

module.exports = {
    crearArchivo,
    listarMulti
};