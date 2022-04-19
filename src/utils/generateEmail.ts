import faker from "@faker-js/faker";

export const generateEmail = () => {
  return faker.internet.email().toLowerCase();
};
