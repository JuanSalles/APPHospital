import { ListaDeEspecializacoes } from "./ListaDeEspecializacoes"
import { ListaDeHorarios } from "./ListaDeHorarios"

export interface IMedico {
    id: number
    nome: string
    especializacao: ListaDeEspecializacoes
    numeroDeRegistro: number
    horarioDeTrabalho: ListaDeHorarios
}