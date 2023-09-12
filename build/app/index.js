// import { IPaciente } from "../interfaces/IPaciente";
// import Paciente from "../models/Paciente";
// import cadastrarPaciente from "./cadastrarPaciente";
// const meuPrompt = require('prompt-sync')();
// const novoPaciente = cadastrarPaciente();
// console.clear();
// novoPaciente.marcarConsulta();
import inquirer from "inquirer";
inquirer.prompt([
    {
        name: "greeting",
        message: "What would you like to say?",
        type: "input",
    },
    {
        name: "colors",
        message: "What's your favorite color?",
        type: "list",
        choices: ["black", "red", "blue", "yellow", "green", "whitesmoke"]
    }
])
    .then(function (answer) {
    console.log(answer.greeting);
    console.log(answer.colors);
});
