var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Menu_instances, _Menu_cabecalhoPaciente, _Menu_cabecalhoMedico, _Menu_menuPacienteCadastrado, _Menu_checkarPacienteCadastrado, _Menu_exibirMenuPaciente, _Menu_exibirMenuMedico;
import inquirer from "inquirer";
import cadastrarPaciente from "../app/cadastrarPaciente.js";
class Menu {
    constructor() {
        _Menu_instances.add(this);
    }
    exibirMenuPrincipal() {
        console.clear();
        console.log(`--Administrador hospitalar--`);
        inquirer.prompt([
            {
                name: "escolha",
                message: "Quem é você? ",
                type: "list",
                choices: ["Paciente", "Médico"]
            }
        ])
            .then((answer) => {
            switch (answer.escolha) {
                case "Paciente":
                    __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_exibirMenuPaciente).call(this);
                    break;
                default:
                    __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_exibirMenuMedico).call(this);
            }
        });
    }
}
_Menu_instances = new WeakSet(), _Menu_cabecalhoPaciente = function _Menu_cabecalhoPaciente() {
    console.clear();
    console.log(`\n--Menu do Paciente--`);
}, _Menu_cabecalhoMedico = function _Menu_cabecalhoMedico() {
    console.clear();
    console.log(`\n--Menu do Medico--`);
}, _Menu_menuPacienteCadastrado = function _Menu_menuPacienteCadastrado(paciente) {
    __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_cabecalhoPaciente).call(this);
    inquirer.prompt([
        {
            name: "escolha",
            message: "Ecolha a opção: ",
            type: "list",
            choices: ["Marcar consulta", "Voltar ao menu principal"]
        }
    ])
        .then((answer) => {
        switch (answer.escolha) {
            case "Marcar consulta":
                paciente.marcarConsulta();
                __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_menuPacienteCadastrado).call(this, paciente);
                break;
            default:
                this.exibirMenuPrincipal();
                break;
        }
    });
}, _Menu_checkarPacienteCadastrado = function _Menu_checkarPacienteCadastrado() {
    __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_cabecalhoPaciente).call(this);
    const listaDePacientes = require('../../data/listaDePacientes.json');
    const listaSimples = listaDePacientes.map((paciente) => {
        return paciente.nome;
    });
    inquirer.prompt([
        {
            name: "escolha",
            message: "Escolha o paciente: ",
            type: "list",
            choices: ["Voltar ao menu principal", ...listaSimples]
        }
    ])
        .then((answer) => {
        if (answer.escolha !== "Voltar ao menu principal") {
            const paciente = listaDePacientes.find((paciente) => paciente.nome == answer.escolha);
            __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_menuPacienteCadastrado).call(this, paciente);
        }
        else {
            this.exibirMenuPrincipal();
        }
    });
}, _Menu_exibirMenuPaciente = function _Menu_exibirMenuPaciente() {
    __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_cabecalhoPaciente).call(this);
    inquirer.prompt([
        {
            name: "escolha",
            message: "Escolha a opção desejada: ",
            type: "list",
            choices: ["Paciente cadastrado", "Cadastrar Paciente", "Voltar ao menu principal"]
        }
    ])
        .then((answer) => {
        switch (answer.escolha) {
            case "Paciente cadastrado":
                __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_checkarPacienteCadastrado).call(this);
                break;
            case "Cadastrar Paciente":
                const paciente = cadastrarPaciente();
                __classPrivateFieldGet(this, _Menu_instances, "m", _Menu_menuPacienteCadastrado).call(this, paciente);
            default:
                this.exibirMenuPrincipal();
        }
    });
}, _Menu_exibirMenuMedico = function _Menu_exibirMenuMedico() {
};
export default Menu;
