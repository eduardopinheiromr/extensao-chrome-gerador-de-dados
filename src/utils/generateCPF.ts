export const calcFirstChecker = (firstNineDigits: string): number => {
  let sum = 0;

  for (let i = 0; i < 9; ++i) {
    sum += Number(firstNineDigits.charAt(i)) * (10 - i);
  }

  const lastSumChecker = sum % 11;
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
};

export const calcSecondChecker = (cpfWithChecker1: string): number => {
  let sum = 0;

  for (let i = 0; i < 10; ++i) {
    sum += Number(cpfWithChecker1.charAt(i)) * (11 - i);
  }

  const lastSumChecker2 = sum % 11;
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
};

export const generateNineDigits = (): string => {
  let digits = "";
  for (let i = 0; i < 9; ++i) {
    digits += String(Math.floor(Math.random() * 10));
  }

  return digits;
};

export const hasCPFLength = (cpf: string): void | boolean => {
  return cpf.length > 11 || cpf.length < 11 ? false : true;
};

export const allDigitsAreEqual = (digits: string): boolean => {
  for (let i = 0; i < 10; i++) {
    if (digits === new Array(digits.length + 1).join(String(i))) {
      return true;
    }
  }

  return false;
};

export const cpfMask = (value: string) => {
  return value
    .split("")
    .map((char, index) => {
      if (index === 2 || index === 5) {
        return `${char}.`;
      }
      if (index === 9) {
        return `-${char}`;
      }
      return char;
    })
    .join("");
};

export const generateCPF = ({ withPontuation }: GeneratorProps): string => {
  let firstNineDigits = "";

  do {
    firstNineDigits = generateNineDigits();
  } while (allDigitsAreEqual(firstNineDigits));

  const firstChecker = calcFirstChecker(firstNineDigits);
  const secondChecker = calcSecondChecker(firstNineDigits + firstChecker);
  const generatedCPF = `${firstNineDigits}${firstChecker}${secondChecker}`;

  if (withPontuation) {
    return cpfMask(generatedCPF);
  }

  return generatedCPF;
};
