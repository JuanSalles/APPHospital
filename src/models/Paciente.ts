import salvarConsulta from "../app/salvarConsulta";
import { IPaciente } from "../interfaces/IPaciente";
import Consulta from "./Consulta";
import Diagnostico from "./Diagnostico";
import Medico from "./Medico";

const meuPrompt = require('prompt-sync')();

const listaDeMedicos = require('../../data/medicos.json')

export default class Paciente{
    private id: number
    private nome: string
    private documento: string
    private historicoMedico: Consulta[]
    private diagnosticosAnteriores: Diagnostico[]
    private consultasAgendadas: Consulta[]

    constructor(paciente: IPaciente){
        this.id = paciente.id
        this.nome = paciente.nome
        this.documento = paciente.documento
        this.historicoMedico = paciente.historicoMedico
        this.diagnosticosAnteriores = paciente.diagnosticosAnteriores
        this.consultasAgendadas = paciente.consultasAgendadas
    }

    marcarConsulta(){
        let condicao = true
        let medicoEscolhido
        let DataEHora = meuPrompt('Digite a data e hora no formato "DD/MM/YY HH:MM": ');
    
        console.log('Médicos disponiveis na clinica:\n');
        console.table(listaDeMedicos);

        while(condicao){
            let medicoID = parseInt(meuPrompt('Digite o ID do medico desejado: '));

            medicoEscolhido = listaDeMedicos.find((element: Medico) => element.id == medicoID)

            if(medicoEscolhido) condicao = false;

        }

        const paciente: IPaciente = {
            nome: this.nome,
            id: this.id,
            documento: this.documento,
            historicoMedico: this.historicoMedico,
            diagnosticosAnteriores: this.diagnosticosAnteriores,
            consultasAgendadas: this.consultasAgendadas
        }

        const consulta = {
            paciente: paciente,
            medico: medicoEscolhido,
            dataEHora: DataEHora,
            diagnosticos: [],
            medicamentosPrescritos: []
        }


        salvarConsulta(consulta);

        console.log("Consulta Marcada")
    }
}