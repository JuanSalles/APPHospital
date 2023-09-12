export default class Consulta {
    constructor(consulta) {
        this.id = consulta.id;
        this.paciente = consulta.paciente;
        this.medico = consulta.medico;
        this.dataEHora = consulta.dataEHora;
        this.diagnosticos = consulta.diagnosticos;
        this.medicamentosPrescritos = consulta.medicamentosPrescritos;
    }
}
