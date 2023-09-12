import { IMedicamento } from "../interfaces/IMedicamento"

export default class Medicamento {
    private id: number
    private nome: string
    private dosagem: string
    private instrucoes: string

    constructor(remedio: IMedicamento){
        this.id = remedio.id
        this.nome = remedio.nome
        this.dosagem = remedio.dosagem
        this.instrucoes = remedio.instrucoes
    }
}