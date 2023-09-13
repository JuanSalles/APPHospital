import inquirer from "inquirer";
import { IMedico } from "../interfaces/IMedico";
import { ListaDeEspecializacoes } from "../interfaces/ListaDeEspecializacoes";
import { ListaDeHorarios } from "../interfaces/ListaDeHorarios";
import Paciente from "./Paciente";
import Consulta from "./Consulta";
import { IHistoricoDeConsulta } from "../interfaces/IHistoricoDeConsultas";

export default class Medico{

    private _id: number
    private _nome: string
    private especializacao: ListaDeEspecializacoes
    private numeroDeRegistro: number
    private horarioDeTrabalho: ListaDeHorarios

    constructor (medico: IMedico){
        this._id = medico.id
        this._nome = medico.nome
        this.especializacao = medico.especializacao
        this.numeroDeRegistro = medico.numeroDeRegistro
        this.horarioDeTrabalho = medico.horarioDeTrabalho
    }

    get id(): number{
        return this.id
    }

    get nome(): string{
        return this._nome
    }

    realizarConsulta(consulta: Consulta | undefined){
        
    }

}