import Diagnostico from "../models/Diagnostico"
import Medicamento from "../models/Medicamento"
import Medico from "../models/Medico"
import { IPaciente } from "./IPaciente"

export interface IConsulta {
    id: number
    paciente: IPaciente
    medico: Medico
    dataEHora: string
    diagnosticos: Diagnostico[]
    medicamentosPrescritos: Medicamento[] 
}