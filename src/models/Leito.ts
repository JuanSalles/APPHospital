import { ILeito } from "../interfaces/ILeito"

export default class Leito {
    
    private id: number
    private ocupado: boolean
    private statusLimpeza: boolean
    private pacienteId: number

    constructor(leito: ILeito){
        this.id = leito.id
        this.ocupado = leito.ocupado
        this.statusLimpeza = leito.statusLimpeza
        this.pacienteId = leito.pacienteId
    }
}