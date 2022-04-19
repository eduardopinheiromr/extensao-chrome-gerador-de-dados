import { generateCNPJ } from "../utils/generateCNPJ";
import { generateCPF } from "../utils/generateCPF";
import { generateEmail } from "../utils/generateEmail";
import { generatePhone } from "../utils/generatePhone";

export const generators = [
  {
    name: "CPF",
    generatorFn: generateCPF,
  },
  {
    name: "CNPJ",
    generatorFn: generateCNPJ,
  },
  {
    name: "Celular",
    generatorFn: generatePhone,
  },
  {
    name: "Email",
    generatorFn: generateEmail,
  },
];
