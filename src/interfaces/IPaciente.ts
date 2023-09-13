
import Diagnostico from "../models/Diagnostico"
import { IConsultasMarcadas } from "./IConsultasMarcadas"
import { IHistoricoDeConsulta } from "./IHistoricoDeConsultas"

export interface IPaciente {
    id: number
    nome: string
    documento: string
    historicoMedico: IHistoricoDeConsulta[]
    diagnosticosAnteriores: Diagnostico[]
    consultasAgendadas: IConsultasMarcadas[]
}