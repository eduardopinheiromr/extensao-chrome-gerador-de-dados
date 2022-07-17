import { ddds } from "../constants/ddds";

const validSecondDigits = [9, 8, 7, 6, 5];

const randomNumber = () => Math.floor(Math.random() * 10);

const getRandomDDD = () => {
  return ddds[Math.floor(Math.random() * ddds.length)];
};

const secondDigit = () =>
  validSecondDigits[Math.floor(Math.random() * validSecondDigits.length)];

export const generatePhone = ({ withPontuation }: GeneratorProps): string => {
  if (withPontuation)
    return `(${getRandomDDD()}) 9${secondDigit()}${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;

  return `${getRandomDDD()}${randomNumber()}9${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
};
