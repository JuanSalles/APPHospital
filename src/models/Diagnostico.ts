export default class Diagnostico{
    private nome: string
    private descricao: string
    private tratamentoSugerido: string

    constructor(nomeDoDiagnostico: string, descricaoDoDiagnostico: string, tratamento: string){
        this.nome = nomeDoDiagnostico
        this.descricao = descricaoDoDiagnostico
        this.tratamentoSugerido = tratamento
    }
}