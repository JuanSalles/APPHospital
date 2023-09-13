import { IConsultasMarcadas } from "../interfaces/IConsultasMarcadas";
import { IHistoricoDeConsulta } from "../interfaces/IHistoricoDeConsultas";
import { IPaciente } from "../interfaces/IPaciente";
import Diagnostico from "./Diagnostico";
import Medicamento from "./Medicamento";
import Medico from "./Medico";


export default class Consulta{
    private id: number
    private paciente: string
    private medico: string
    private dataEHora: string
    private _diagnosticos: Diagnostico[]
    private _medicamentosPrescritos: Medicamento[] 

    constructor(consulta: IConsultasMarcadas){
        this.id = consulta.id
        this.paciente = consulta.paciente
        this.medico = consulta.medico
        this.dataEHora = consulta.dataEHora
        this._diagnosticos = []
        this._medicamentosPrescritos = []
    }

}