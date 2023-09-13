const listaDeIDS = require('../../data/IDs-criados.json');
export default function novoID(opcao) {
    const ids = listaDeIDS[0];
    switch (opcao) {
        case 0:
            return ids.pacientes + 1;
        case 1:
            return ids.medicos + 1;
        case 2:
            return ids.consultas + 1;
    }
}
