const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de Multiplicar'
    })
    .option('l',{
        alias: 'lista',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Es la opcion de listar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Es la opcion de hasta que numero multiplicar'
    })
    .check((argv,option) => {
        console.log('yargs', argv);
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

    module.exports = argv;