const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 1, listar = false, limite = 10) => {

    return new Promise((resolve, reject) => {
        
        let salida = "";
        let consola = "";
        
        for (let i = 1; i <= limite; i++) {
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${i * base}\n`;
            salida += `${base} x ${i} = ${i * base}\n`;
        }
        
        if(listar) {
            console.log("=========================================".green);
            console.log(`             Tabla del:`, colors.blue(base));
            console.log("=========================================".green);
            console.log(consola);
        }
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      
        resolve(`tabla-${base}.txt`);
    })
};

module.exports = {
    crearArchivo
}