export default (function sortingPeople() {
  function sortByFirstName(people) {
    const compareFirst = (person1, person2) => {
      const name1 = person1.firstName + ' ' + person1.lastName;
      const name2 = person2.firstName + ' ' + person2.lastName;

      if (name1 < name2) {
        return -1;
      }

      if (name1 > name2) {
        return 1;
      }

      // Must be equal
      return 0;
    };

    return people.sort(compareFirst);
  }

  function sortByLastName(people) {
    const compareLast = (person1, person2) => {
      const name1 = person1.lastName + ' ' + person1.firstName;
      const name2 = person2.lastName + ' ' + person2.firstName;

      if (name1 < name2) {
        return -1;
      }

      if (name1 > name2) {
        return 1;
      }

      // Must be equal
      return 0;
    };

    return people.sort(compareLast);
  }

  function sortByDateOfBirth(people) {
    const compareDob = (person1, person2) => {
      const dob1 = person1.dateOfBirth.getTime();
      const dob2 = person2.dateOfBirth.getTime();

      if (dob1 > dob2) {
        return -1;
      }

      if (dob1 < dob2) {
        return 1;
      }

      return 0;
    };

    return people.sort(compareDob);
  }

  function sortByDobMonthDay(people) {
    const compareMonthAndDay = (person1, person2) => {
      const month1 = person1.dobMonth;
      const month2 = person2.dobMonth;
      const day1 = person1.dobDay;
      const day2 = person2.dobDay;

      if (month1 > month2) {
        return 1;
      }

      if (month1 < month2) {
        return -1;
      }

      if (month1 === month2) {
        if (day1 > day2) {
          return 1;
        }

        if (day1 < day2) {
          return -1;
        }
      }

      return 0;
    };

    return people.sort(compareMonthAndDay);
  }

  return {
    sortByFirstName,
    sortByLastName,
    sortByDateOfBirth,
    sortByDobMonthDay,
  };
})();
