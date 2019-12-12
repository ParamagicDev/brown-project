import Person from '../src/js/person.js';

const mockPerson = {
  gender: 'female',
  name: {
    title: 'Mrs',
    first: 'Delores',
    last: 'Davidson',
  },
  dob: {
    date: '1990-08-29T02:41:36.593Z',
    age: 29,
  },
  nat: 'US',
};

describe('Person()', () => {
  describe('.firstName', () => {
    test('Should return the persons first name', () => {
      const person = new Person(mockPerson);
      expect(person.firstName).toBe(mockPerson.name.first);
    });
  });

  describe('.lastName', () => {
    test('Should return a users last name', () => {
      const person = new Person(mockPerson);
      expect(person.lastName).toBe(mockPerson.name.last);
    });
  });

  describe('.dateOfBirth', () => {
    test('Should return a users date of birth', () => {
      const person = new Person(mockPerson);
      const dob = new Date(mockPerson.dob.date);
      expect(person.dateOfBirth.getTime()).toBe(dob.getTime());
    });
  });

  describe('.dobMonth()', () => {
    test('Should return an integer value of month', () => {
      const person = new Person(mockPerson);
      expect(person.dobMonth).toBe(7);
    });
  });

  describe('.dobDay', () => {
    test('Should return an integer value of day', () => {
      const person = new Person(mockPerson);
      expect(person.dobDay).toBe(28);
    });
  });

  describe('.gender', () => {
    test("Should return a string value of person's gender", () => {
      const person = new Person(mockPerson);
      expect(person.gender).toBe('female');
    });
  });

  describe('.nationality', () => {
    test("Should return a string value of the person's nationality", () => {
      const person = new Person(mockPerson);
      expect(person.nationality).toBe('US');
    });
  });

  describe('#dateOfBirthString()', () => {
    test('Should return a / seperated string', () => {
      const person = new Person(mockPerson);

      expect(person.dateOfBirthString()).toBe('Aug / 28 / 1990');
    });
  });

  describe('#birthdayIsToday()', () => {
    test('Should return true if its the persons birthday', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 28);
      expect(person.birthdayIsToday(today)).toBe(true);
    });

    test('Should return false if their birthday is not today', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 20);
      expect(person.birthdayIsToday(today)).toBe(false);
    });
  });
  describe('#birthdayHasHappened()', () => {
    test('Should return true if the persons birthday in the past', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 29);

      expect(person.birthdayHasHappened(today)).toBe(true);
    });

    test('Should return false if the persons birthday is today', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 28);
      expect(person.birthdayHasHappened(today)).toBe(false);
    });

    test('Should return false if the persons birthday is in the future', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 27);
      expect(person.birthdayHasHappened(today)).toBe(false);
    });

    test('Should work with other months', () => {
      const person = new Person(mockPerson);
      let today = new Date(2018, 6, 27);

      expect(person.birthdayHasHappened(today)).toBe(false);

      today = new Date(2018, 8, 27);
      expect(person.birthdayHasHappened(today)).toBe(true);
    });
  });
  describe('#birthdayHasNotHappened()', () => {
    test('Should return true if the persons birthday is in the future', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 27);
      expect(person.birthdayHasNotHappened(today)).toBe(true);
    });

    test('Should return false if the persons birthday is today', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 7, 28);
      expect(person.birthdayHasNotHappened(today)).toBe(false);
    });

    test('Should return false if the persons birthday is in the past', () => {
      const person = new Person(mockPerson);
      const today = new Date(2018, 9, 30);
      expect(person.birthdayHasNotHappened(today)).toBe(false);
    });

    test('Should work with other months', () => {
      const person = new Person(mockPerson);
      let today = new Date(2018, 8, 29);

      expect(person.birthdayHasNotHappened(today)).toBe(false);

      today = new Date(2018, 6, 27);
      expect(person.birthdayHasNotHappened(today)).toBe(true);
    });
  });
});
