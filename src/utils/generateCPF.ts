function dig(n1: number, n2: number, n3: number, n4?: number) {
  const nums = String(n1)
    .split("")
    .concat(String(n2).split(""), String(n3).split(""));
  if (n4 !== undefined) {
    nums[9] = String(n4);
  }

  let x = 0;
  for (let i = n4 !== undefined ? 11 : 10, j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }

  const y = x % 11;
  return y < 2 ? 0 : 11 - y;
}

function randomNumber() {
  const random = String(Math.floor(Math.random() * 999));
  return Number(random.padStart(3, "0"));
}

function generate({ withPontuation }: GeneratorProps) {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const num3 = randomNumber();
  const dig1 = dig(num1, num2, num3);
  const dig2 = dig(num1, num2, num3, dig1);

  if (isNaN(dig1) || isNaN(dig2)) throw Error("Invalid digit");

  if (withPontuation) {
    return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
  }
  return `${num1}${num2}${num3}${dig1}${dig2}`;
}

export const generateCPF = ({ withPontuation }: GeneratorProps) => {
  try {
    return generate({ withPontuation });
  } catch {
    return generate({ withPontuation });
  }
};
