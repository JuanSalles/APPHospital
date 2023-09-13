import inquirer from "inquirer";
import cadastrarPaciente from "../app/cadastrarPaciente";
import { IPaciente } from "../interfaces/IPaciente";
import Paciente from "./Paciente";
import { IMedico } from "../interfaces/IMedico";
import Medico from "./Medico";
import procurarConsultaMarcada from "../app/procurarConsultaMarcada";
const meuPrompt = require('prompt-sync')()

export default class Menu {

    #cabecalhoPaciente() {
        console.clear();
        console.log(`\n--Menu do Paciente--`);
    }

    #cabecalhoMedico() {
        console.clear();
        console.log(`\n--Menu do Medico--`);
    }

    #menuPacienteCadastrado(paciente: Paciente) {
        this.#cabecalhoPaciente();
        inquirer.prompt([
            {
                name: "escolha",
                message: "Ecolha a opção: ",
                type: "list",
                choices: ["Marcar consulta", "Consultas marcadas", "Historico", "Voltar ao menu principal"]
            }
        ])
            .then((answer: any) => {
                switch (answer.escolha) {
                    case "Marcar consulta":
                        paciente.marcarConsulta()
                            .then(() =>
                                this.#menuPacienteCadastrado(paciente)
                            )
                        break;

                    case "Consultas marcadas":
                        console.table(paciente.consultasAgendadas);
                        meuPrompt('\n\n Aperte qualquer tecla para voltar ao menu!')
                        this.#menuPacienteCadastrado(paciente)
                        break;

                    //  
                    default:
                        this.exibirMenuPrincipal();
                        break;
                }
            });
    }

    #checkarPacienteCadastrado() {
        this.#cabecalhoPaciente();
        const listaDePacientes = require('../../data/pacientes.json');
        const listaSimples: string[] = listaDePacientes.map((paciente: IPaciente) => {
            return paciente.nome
        })
        inquirer.prompt([
            {
                name: "escolha",
                message: "Escolha o paciente: ",
                type: "list",
                choices: ["Voltar ao menu principal", ...listaSimples]
            }

        ])
            .then((answer: any) => {
                if (answer.escolha !== "Voltar ao menu principal") {
                    const paciente = new Paciente(listaDePacientes.find((paciente: IPaciente) => paciente.nome == answer.escolha));
                    this.#menuPacienteCadastrado(paciente);
                } else {
                    this.exibirMenuPrincipal();
                }
            });
    }

    // #diagnosticoMedico(medicoEscolhido: Medico) {
    //     inquirer.prompt([
    //         {
    //             name: "medico",
    //             message: "escolha: ",
    //             type: "input",
    //             choices: ["Novo diagnostico", "Novo medicamento", "Finalizar Consulta"]
    //         }
    //     ])
    //         .then((answer: any) => {
    //             switch (answer.escolha) {
    //                 case "Novo diagnostico":
    //                     medicoEscolhido.novoDiagnostico()
    //                     break
    //                 case "Novo medicamento":
    //                     break
    //                 case "Finalizar Consulta":
    //                     break
    //             }
    //         });
    // }

    async #escolherMedico() {
        const listaDeMedicos = require('../../data/medicos.json')
        const listaSimplificada = listaDeMedicos.map((medico: IMedico) => medico.nome);
        let medicoEscolhido: Medico | undefined
        console.clear()
        await inquirer.prompt([
            {
                name: "medico",
                message: "Ecolha o medico: ",
                type: "list",
                choices: listaSimplificada
            }
        ])
            .then((answer: any) => {
                medicoEscolhido = new Medico(listaDeMedicos.find((medico: IMedico) => medico.nome == answer.medico));
            });

        return medicoEscolhido
    }

    #exibirMenuPaciente() {
        this.#cabecalhoPaciente();
        inquirer.prompt([
            {
                name: "escolha",
                message: "Escolha a opção desejada: ",
                type: "list",
                choices: ["Paciente cadastrado", "Cadastrar Paciente", "Voltar ao menu principal"]
            }
        ])
            .then((answer: any) => {
                switch (answer.escolha) {
                    case "Paciente cadastrado":
                        this.#checkarPacienteCadastrado()
                        break;
                    case "Cadastrar Paciente":
                        const paciente = cadastrarPaciente();
                        this.#menuPacienteCadastrado(paciente);
                        break
                    default:
                        this.exibirMenuPrincipal();
                        break
                }
            });
    }

    #exibirMenuMedico() {
        this.#cabecalhoMedico();
        inquirer.prompt([
            {
                name: "escolha",
                message: "Escolha a opção desejada: ",
                type: "list",
                choices: ["Realizar consulta", "Voltar ao menu principal"]
            }
        ])
            .then(async (answer: any) => {
                switch (answer.escolha) {
                    case "Realizar consulta":
                        const medico = await this.#escolherMedico()
                        const consulta = await procurarConsultaMarcada(medico);
                        medico?.realizarConsulta(consulta);
                        meuPrompt('Aperte Qualquer tecla para voltar ao Menu Principal!')
                        this.exibirMenuPrincipal();
                        break;
                    default:
                        this.exibirMenuPrincipal();
                        break
                }
            });
    }

    exibirMenuPrincipal() {
        console.clear();
        console.log(`--Administrador hospitalar--\n\n`)
        inquirer.prompt([
            {
                name: "escolha",
                message: "Quem é você? ",
                type: "list",
                choices: ["Paciente", "Médico", "Fechar Aplicação"]
            }
        ])
            .then((answer: any) => {
                switch (answer.escolha) {
                    case "Paciente":
                        this.#exibirMenuPaciente()
                        break;
                    case "Médico":
                        this.#exibirMenuMedico()
                    default:
                        break;
                }
            });

    }




}


