import inquirer from "inquirer";
import Consulta from "../models/Consulta";
import Medico from "../models/Medico";
import { IConsultasMarcadas } from "../interfaces/IConsultasMarcadas";

export default async function procurarConsultaMarcada (medico: Medico | undefined){
    let consultaMarcada: Consulta | undefined
    
    console.clear();
    console.log("\nConsultas encontradas: \n\n");
    const listaDeConsultas = require('../../data/consultas-marcadas.json');

    const listaDoMedico = listaDeConsultas.filter((consulta: IConsultasMarcadas) => consulta.medico == medico?.nome);

    const listaSimplificada = listaDoMedico.map((consulta: IConsultasMarcadas) => `${consulta.id}`)

    console.table(listaDoMedico);

    await inquirer.prompt([
        {
            name: "id",
            message: "Escolha a consulta deseja realizar pelo id exibido acima: ",
            type: "list",
            choices: listaSimplificada
        }
    ])
    .then((answer: any)=>{
        consultaMarcada = listaDeConsultas[Number(answer.id)-1];
    })
    
    return consultaMarcada
}

