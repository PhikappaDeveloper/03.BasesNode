const fs = require('fs');
const { off } = require('process');
const colors = require('colors');

// Con Promesa
const crearArchivo = (base = 5, listar = false, hasta = 10) => {

    try{
        return new Promise((resolve, reject)=> {   
            
            let  salida = '';
            let consola = '';
        
            for (let i = 1; i<=hasta; i++){
                salida += `${base} x ${i} = ${base * i} \n`;
                consola += `${base} ${'x'.blue} ${i} ${'='.green} ${base * i} \n`;
            }
            if(listar){
                console.log('=================='.green);
                console.log('Tabla del:'.green , colors.blue(base));
                console.log('=================='.green);
                console.log(consola);
            }
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        });
    }catch{
        throw err;
    }

}

// Con Async
// const crearArchivo = async (base = 5) => {

//         console.log('==================');
//         console.log(` Tabla del: ${base}`);
//         console.log('==================');
    
//         let  salida = '';
    
//         for (let i = 1; i<=10; i++){
//             salida += `${base} x ${i} = ${base * i} \n`;
//         }
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         return `tabla-${base}.txt`;

// }

module.exports = {
     crearArchivo
}