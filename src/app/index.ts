import { IPaciente } from "../interfaces/IPaciente";
import Paciente from "../models/Paciente";
import cadastrarPaciente from "./cadastrarPaciente";

const meuPrompt = require('prompt-sync')();

const novoPaciente = cadastrarPaciente();

console.clear();

novoPaciente.marcarConsulta();
