import { IPaciente } from "../interfaces/IPaciente";
import Paciente from "../models/Paciente";

const meuPrompt = require('prompt-sync')();

export default function cadastrarPaciente(): Paciente{
    const fs = require('fs');
    const listaDePacientes = require('../../data/pacientes.json');
    const nomeDoPaciente = meuPrompt('Digite o seu nome: ');
    const documentoDoPaciente = meuPrompt('Digite o numero do seu documento: ');

    const paciente: IPaciente = {
        id: listaDePacientes.length+1,
        nome: nomeDoPaciente,
        documento: documentoDoPaciente,
        historicoMedico: [],
        diagnosticosAnteriores: [],
        consultasAgendadas: []
    }

    listaDePacientes.push(paciente);

    console.log(listaDePacientes);

    fs.writeFile('./data/pacientes.json', JSON.stringify(listaDePacientes), (err: Error) => {
        if (err) throw err;
        console.log('Paciente salvo no banco de dados!');
    })
    
    return new Paciente(paciente)
}