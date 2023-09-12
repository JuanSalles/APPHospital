import salvarConsulta from "../app/salvarConsulta";
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
    }
    marcarConsulta() {
        let condicao = true;
        let medicoEscolhido;
        let DataEHora = meuPrompt('Digite a data e hora no formato "DD/MM/YY HH:MM": ');
        console.log('Médicos disponiveis na clinica:\n');
        console.table(listaDeMedicos);
        while (condicao) {
            let medicoID = parseInt(meuPrompt('Digite o ID do medico desejado: '));
            medicoEscolhido = listaDeMedicos.find((element) => element.id == medicoID);
            if (medicoEscolhido)
                condicao = false;
        }
        const paciente = {
            nome: this.nome,
            id: this.id,
            documento: this.documento,
            historicoMedico: this.historicoMedico,
            diagnosticosAnteriores: this.diagnosticosAnteriores,
            consultasAgendadas: this.consultasAgendadas
        };
        const consulta = {
            paciente: paciente,
            medico: medicoEscolhido,
            dataEHora: DataEHora,
            diagnosticos: [],
            medicamentosPrescritos: []
        };
        salvarConsulta(consulta);
        console.log("Consulta Marcada");
    }
}
