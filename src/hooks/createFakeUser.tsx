import { faker } from '@faker-js/faker';
import type { User } from '../types/User';

export function createRandomUser(): User {
  return {
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.firstName(),
    phoneNumber: faker.phone.number('(###) ###-###'),
  };
}

export function fakeUsers(num: number): User[] {
  const USERS: User[] = [];
  Array.from({ length: num }).forEach(() => {
    USERS.push(createRandomUser());
  });
  return USERS;
}
