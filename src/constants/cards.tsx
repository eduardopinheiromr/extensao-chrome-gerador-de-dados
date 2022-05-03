import { FaCcAmex, FaCcDinersClub } from "react-icons/fa";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";
const generator = require("creditcard-generator");

export const cards = [
  {
    name: "Mastercard",
    Icon: RiMastercardFill,
    generatorFn: () => generator.GenCC("Mastercard") as string,
  },
  {
    name: "Visa",
    Icon: RiVisaFill,
    generatorFn: () => generator.GenCC("VISA") as string,
  },
  {
    name: "American Express",
    Icon: FaCcAmex,
    generatorFn: () => generator.GenCC("Amex") as string,
  },
  {
    name: "Diners Club",
    Icon: FaCcDinersClub,
    generatorFn: () => generator.GenCC("Diners") as string,
  },
];
