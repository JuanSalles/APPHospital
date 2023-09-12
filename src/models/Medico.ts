import { IMedico } from "../interfaces/IMedico"
import { ListaDeEspecializacoes } from "../interfaces/ListaDeEspecializacoes"
import { ListaDeHorarios } from "../interfaces/ListaDeHorarios"

export default class Medico{

    private _id: number
    private nome: string
    private especializacao: ListaDeEspecializacoes
    private numeroDeRegistro: number
    private horarioDeTrabalho: ListaDeHorarios

    constructor (medico: IMedico){
        this._id = medico.id
        this.nome = medico.nome
        this.especializacao = medico.especializacao
        this.numeroDeRegistro = medico.numeroDeRegistro
        this.horarioDeTrabalho = medico.horarioDeTrabalho
    }

    get id(): number{
        return this.id
    }
}