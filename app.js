const argv = require('./config/yargs').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo cargado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}

/* 
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

console.log(base);




    */