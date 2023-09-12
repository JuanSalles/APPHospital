import { IConsulta } from "../interfaces/IConsulta"
import { IPaciente } from "../interfaces/IPaciente"
import Diagnostico from "./Diagnostico"
import Medicamento from "./Medicamento"
import Medico from "./Medico"


export default class Consulta{
    private id: number
    private paciente: IPaciente
    private medico: Medico
    private dataEHora: string
    private diagnosticos: Diagnostico[]
    private medicamentosPrescritos: Medicamento[] 

    constructor(consulta: IConsulta){
        this.id = consulta.id
        this.paciente = consulta.paciente
        this.medico = consulta.medico
        this.dataEHora = consulta.dataEHora
        this.diagnosticos = consulta.diagnosticos
        this.medicamentosPrescritos = consulta.medicamentosPrescritos
    }

}