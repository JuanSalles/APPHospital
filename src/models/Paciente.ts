import inquirer from "inquirer";
import novoID from "../app/novoID";
import salvarConsulta from "../app/salvarConsulta";
import { IPaciente } from "../interfaces/IPaciente";
import { ListaDeOpcoesID } from "../interfaces/ListaDeOpcoesID";
import Diagnostico from "./Diagnostico";
import { IMedico } from "../interfaces/IMedico";
import Medico from "./Medico";
import { IHistoricoDeConsulta } from "../interfaces/IHistoricoDeConsultas";
import { IConsultasMarcadas } from "../interfaces/IConsultasMarcadas";
import Consulta from "./Consulta";

const listaDeMedicos = require('../../data/medicos.json')

export default class Paciente{
    private id: number
    private nome: string
    private documento: string
    private _historicoMedico: IHistoricoDeConsulta[]
    private _diagnosticosAnteriores: Diagnostico[]
    private _consultasAgendadas: IConsultasMarcadas[]

    constructor(paciente: IPaciente){
        this.id = paciente.id
        this.nome = paciente.nome
        this.documento = paciente.documento
        this._historicoMedico = paciente.historicoMedico
        this._diagnosticosAnteriores = paciente.diagnosticosAnteriores
        this._consultasAgendadas = paciente.consultasAgendadas
    }

    get consultasAgendadas (): IConsultasMarcadas[]{
        return this._consultasAgendadas
    }

    async marcarConsulta(){
        let medicoEscolhido: Medico

        const listaSimplificada = listaDeMedicos.map((medico: IMedico) => medico.nome);
        console.clear()

        console.table(listaDeMedicos);

        await inquirer.prompt([
            {
                name: "medico",
                message: "Ecolha o medico: ",
                type: "list",
                choices: listaSimplificada
            },
            {
                name: "dataEHora",
                message: 'Digite a data e hora no formato "MM/DD/YY HH:MM": ',
                type: "input"
            }
        ])
        .then((answer: any) => {
            medicoEscolhido = listaDeMedicos.find((medico: IMedico) => medico.nome == answer.medico);
            
            const dataNaoFormatada = new Date(answer.dataEHora);
            const dataEHora = dataNaoFormatada.toLocaleString();

            const consulta = {
                id: novoID(ListaDeOpcoesID["consulta"]),
                paciente: this.nome,
                medico: medicoEscolhido.nome,
                dataEHora: dataEHora,
                diagnosticos: [],
                medicamentosPrescritos: []
            }
    
            if(medicoEscolhido) {
                salvarConsulta(consulta, this.id);
                console.log("Consulta Marcada")
            }

            
        });
    

    }

    consultaFinalizada(consulta: Consulta, diagnostico: Diagnostico){
        
    }
}