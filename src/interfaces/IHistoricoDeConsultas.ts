import Diagnostico from "../models/Diagnostico"
import Medicamento from "../models/Medicamento"
import Medico from "../models/Medico"


export interface IHistoricoDeConsulta{
    id: number
    paciente: any
    medico: Medico
    dataEHora: string
    diagnosticos: Diagnostico[]
    medicamentosPrescritos: Medicamento[] 
}