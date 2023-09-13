import inquirer from "inquirer";
import novoID from "../app/novoID.js";
import salvarConsulta from "../app/salvarConsulta.js";
import { ListaDeOpcoesID } from "../interfaces/ListaDeOpcoesID.js";
const meuPrompt = require('prompt-sync')();
const listaDeMedicos = require('../../data/medicos.json');
export default class Paciente {
    constructor(paciente) {
        this.id = paciente.id;
        this.nome = paciente.nome;
        this.documento = paciente.documento;
        this.historicoMedico = paciente.historicoMedico;
        this.diagnosticosAnteriores = paciente.diagnosticosAnteriores;
        this.consultasAgendadas = paciente.consultasAgendadas;
        this.todosOsDados = paciente;
    }
    marcarConsulta() {
        let medicoEscolhido;
        let dataEHora = meuPrompt('Digite a data e hora no formato "DD/MM/YY HH:MM": ');
        const listaSimplificada = listaDeMedicos.map((medico) => medico.nome);
        console.table(listaDeMedicos);
        inquirer.prompt([
            {
                name: "medico",
                message: "Ecolha o medico: ",
                type: "list",
                choices: listaSimplificada
            },
            {
                name: "DataEHora",
                message: 'Digite a data e hora no formato "DD/MM/YY HH:MM": ',
                type: "input"
            }
        ])
            .then((answer) => {
            medicoEscolhido = listaDeMedicos.find((medico) => medico.nome == answer.medico);
            const dataNaoFormatada = new Date(answer.dataEHora);
            dataEHora = dataNaoFormatada.toLocaleString();
            const consulta = {
                id: novoID(ListaDeOpcoesID["consulta"]),
                paciente: this.todosOsDados,
                medico: medicoEscolhido,
                dataEHora: dataEHora,
                diagnosticos: [],
                medicamentosPrescritos: []
            };
            if (medicoEscolhido) {
                salvarConsulta(consulta);
                this.consultasAgendadas.push(consulta);
                console.log("Consulta Marcada");
            }
        });
    }
}
