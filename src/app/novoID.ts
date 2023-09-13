import { ListaDeOpcoesID } from "../interfaces/ListaDeOpcoesID";


const fs = require('fs')


export default function novoID (opcao: ListaDeOpcoesID): number{

    const listaDeIDS = require('../../data/IDs-criados.json');
    let resultado
    switch(opcao){
        case 0:
            listaDeIDS[0].pacientes++
            resultado = listaDeIDS[0].pacientes
            break
        case 1:
            listaDeIDS[0].medicos++
            resultado = listaDeIDS[0].medicos
            break
        case 2:
            listaDeIDS[0].consultas++
            resultado = listaDeIDS[0].consultas
            break
        
    }
    
    fs.writeFile('./data/IDs-criados.json', JSON.stringify(listaDeIDS), (err: Error) => {
        if (err) throw err;

    })

    return resultado
}