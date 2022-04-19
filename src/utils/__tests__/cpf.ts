import { validate, generate } from "gerador-validador-cpf";
import { generateCPF } from "../generateCPF";
import { VALID_CPF, INVALID_CPF } from "../../constants/testMocks";

test("Should return true for testing a valid CPF", () => {
  expect(validate(VALID_CPF)).toBe(true);
});

test("Should return false for testing an invalid CPF", () => {
  expect(validate(INVALID_CPF)).toBe(false);
});

test("Should generate a valid CPF with pontuation", () => {
  const cpf = generateCPF({ withPontuation: true });
  expect(validate(cpf)).toBe(true);
});

test("Should generate a valid CPF without pontuation", () => {
  const cpf = generateCPF({ withPontuation: false });
  expect(validate(cpf)).toBe(true);
});
