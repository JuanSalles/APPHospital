export default class Medico {
    constructor(medico) {
        this._id = medico.id;
        this.nome = medico.nome;
        this.especializacao = medico.especializacao;
        this.numeroDeRegistro = medico.numeroDeRegistro;
        this.horarioDeTrabalho = medico.horarioDeTrabalho;
    }
    get id() {
        return this.id;
    }
}
