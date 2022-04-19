import { ddds } from "../constants/ddds";

const randomNumber = () => Math.floor(Math.random() * 10);

const getRandomDDD = () => {
  return ddds[Math.floor(Math.random() * ddds.length)];
};

export const generatePhone = ({ withPontuation }: GeneratorProps): string => {
  if (withPontuation)
    return `(${getRandomDDD()}) 9${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;

  return `${getRandomDDD()}${randomNumber()}9${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
};
