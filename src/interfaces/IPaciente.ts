import Consulta from "../models/Consulta"
import Diagnostico from "../models/Diagnostico"

export interface IPaciente {
    id: number
    nome: string
    documento: string
    historicoMedico: Consulta[]
    diagnosticosAnteriores: Diagnostico[]
    consultasAgendadas: Consulta[]
}