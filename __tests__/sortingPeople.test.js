import sortingPeople from '../src/js/sortingPeople.js';
import Person from '../src/js/person.js';

const person1 = new Person({
  gender: 'female',
  name: {
    title: 'Miss',
    first: 'Vanessa',
    last: 'Peterson',
  },
  dob: {
    date: '1974-05-21T21:18:45.557Z',
    age: 45,
  },
  nat: 'US',
});

const person2 = new Person({
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Byron',
    last: 'Perez',
  },
  dob: {
    date: '1980-04-01T13:30:19.389Z',
    age: 39,
  },
  nat: 'US',
});

const person3 = new Person({
  gender: 'female',
  name: {
    title: 'Ms',
    first: 'Josephine',
    last: 'Reynolds',
  },
  dob: {
    date: '1982-08-30T17:57:06.095Z',
    age: 37,
  },
  nat: 'US',
});

const person4 = new Person({
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Clinton',
    last: 'Cooper',
  },
  dob: {
    date: '1964-04-14T21:32:34.860Z',
    age: 55,
  },
  nat: 'US',
});

const people = [
  person1, // vanessa peterson 45
  person2, // byron perez 39
  person3, // josephine reynolds 37
  person4, // clinton cooper 55
];

describe('sortingPeople', () => {
  describe('#sortByFirstName()', () => {
    test('Should sort alphabetically (a-z) by first name', () => {
      const sortedPeople = sortingPeople.sortByFirstName(people);

      expect(sortedPeople[0]).toBe(person2);
      expect(sortedPeople[1]).toBe(person4);
      expect(sortedPeople[2]).toBe(person3);
      expect(sortedPeople[3]).toBe(person1);
    });
  });
  describe('#sortByLastName()', () => {
    test('Should sort alphabetically (a-z) by last name', () => {
      const sortedPeople = sortingPeople.sortByLastName(people);

      expect(sortedPeople[0]).toBe(person4);
      expect(sortedPeople[1]).toBe(person2);
      expect(sortedPeople[2]).toBe(person1);
      expect(sortedPeople[3]).toBe(person3);
    });
  });
  describe('#sortByDateOfBirth()', () => {
    const sortedPeople = sortingPeople.sortByDateOfBirth(people);

    expect(sortedPeople[0]).toBe(person3);
    expect(sortedPeople[1]).toBe(person2);
    expect(sortedPeople[2]).toBe(person1);
    expect(sortedPeople[3]).toBe(person4);
  });
});
