import { IConsultasMarcadas } from "../interfaces/IConsultasMarcadas";

const fs = require('fs')


export default function salvarConsulta (consulta: IConsultasMarcadas, id: number) {

    const listaDeConsultas = require('../../data/consultas-marcadas.json');
    const listaDePacientes = require('../../data/pacientes.json');

    listaDePacientes[id-1].consultasAgendadas.push(consulta);

    listaDeConsultas.push(consulta);

    
    fs.writeFile('./data/pacientes.json', JSON.stringify(listaDePacientes), (err: Error) => {
        if (err) throw err;
    })
    
    fs.writeFile('./data/consultas-marcadas.json', JSON.stringify(listaDeConsultas), (err: Error) => {
        if (err) throw err;
    })
}     