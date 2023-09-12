const fs = require('fs');
const listaDeConsultas = require('../../data/consultas-marcadas.json');
export default function salvarConsulta(consulta) {
    const id = listaDeConsultas.length + 1;
    listaDeConsultas.push(Object.assign({ id: id }, consulta));
    fs.writeFile('./data/consultas-marcadas.json', JSON.stringify(listaDeConsultas), (err) => {
        if (err)
            throw err;
        console.log('Consulta salva no banco de dados!');
    });
}
