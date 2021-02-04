// Requireds
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
     
        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ colors.blue(base) } ${'x'.red} ${ colors.yellow(i) } ${'='.red} ${ colors.green(base * i) }\n`;
        }

        if ( listar ){
            console.log('==================='.green);
            console.log('  Tabla del:'.green, colors.magenta(base) );
            console.log('==================='.green);

            console.log(consola);
        }

        fs.writeFileSync( `tablas/tabla-${base}.txt`, salida );
            
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}