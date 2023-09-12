import { ListaDeEspecializacoes } from "../interfaces/ListaDeEspecializacoes";

const fs = require('fs')
const listaDeConsultas = require('../../data/consultas-marcadas.json')


export default function salvarConsulta (consulta: any) {

    const id = listaDeConsultas.length+1;
    
    listaDeConsultas.push({id: id, ...consulta});
    
    fs.writeFile('./data/consultas-marcadas.json', JSON.stringify(listaDeConsultas), (err: Error) => {
        if (err) throw err;
        console.log('Consulta salva no banco de dados!');
    })
}     