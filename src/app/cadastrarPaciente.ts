import { IPaciente } from "../interfaces/IPaciente";
import { ListaDeOpcoesID } from "../interfaces/ListaDeOpcoesID";
import Paciente from "../models/Paciente";
import novoID from "./novoID";

const meuPrompt = require('prompt-sync')();

export default function cadastrarPaciente(): Paciente{
    const fs = require('fs');
    const listaDePacientes = require('../../data/pacientes.json');
    const nomeDoPaciente = meuPrompt('Digite o seu nome: ');
    const documentoDoPaciente = meuPrompt('Digite o numero do seu documento: ');

    const paciente: IPaciente = {
        id: novoID(ListaDeOpcoesID["paciente"]),
        nome: nomeDoPaciente,
        documento: documentoDoPaciente,
        historicoMedico: [],
        diagnosticosAnteriores: [],
        consultasAgendadas: []
    }

    listaDePacientes.push(paciente);

  

    fs.writeFile('./data/pacientes.json', JSON.stringify(listaDePacientes), (err: Error) => {
        if (err) throw err;
    })
    
    return new Paciente(paciente)
}