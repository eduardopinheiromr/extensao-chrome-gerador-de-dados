import { cnpjValidator } from "../cnpjValidator";
import { generateCNPJ } from "../generateCNPJ";
import { VALID_CNPJ, INVALID_CNPJ } from "../../constants/testMocks";

test("Should return true for testing a valid CNPJ", () => {
  expect(cnpjValidator(VALID_CNPJ)).toBe(true);
});

test("Should return false for testing an invalid CNPJ", () => {
  expect(cnpjValidator(INVALID_CNPJ)).toBe(false);
});

test("Should generate a valid CNPJ with pontuation", () => {
  const cnpj = generateCNPJ({ withPontuation: true });
  expect(cnpjValidator(cnpj)).toBe(true);
});

test("Should generate a valid CNPJ without pontuation", () => {
  const cnpj = generateCNPJ({ withPontuation: false });
  expect(cnpjValidator(cnpj)).toBe(true);
});
