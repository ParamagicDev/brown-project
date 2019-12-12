class Person {
  constructor(attributes) {
    this.attributes = attributes;
  }

  get firstName() {
    return this.attributes.name.first;
  }

  get lastName() {
    return this.attributes.name.last;
  }

  get dateOfBirth() {
    const bday = this.attributes.dob.date;
  }

  get gender() {
    return this.attributes.gender;
  }

  get nationality() {
    return this.attributes.nat;
  }

  dateOfBirthString() {
    const dobAry = this.birthday.toDateString().split(' ');
    return dobAry[1] + ' / ' + dobAry[2];
  }

  renderFullName() {
    const firstName = document.createElement('p');
    firstName.className = 'first-name';
    firstName.innerText = this.firstName;
    const lastName = document.createElement('span');
    lastName.className = 'last-name';
    lastName.innerText = this.lastName;

    firstName.appendChild(lastName);
    return firstName;
  }

  renderGender() {
    const gender = document.createElement('p');
    gender.className = 'gender';
    gender.innerText = this.gender;
    return gender;
  }

  renderNationality() {
    const nationality = document.createElement('p');
    nationality.className = 'nationality';
    nationality.innerText = this.nationality;
    return nationality;
  }

  renderDateOfBirth() {
    const dob = document.createElement('p');
    dob.className = 'date-of-birth';
    dob.innerText = this.dateOfBirthString();
    return dob;
  }

  renderBirthday() {
    const values = {
      happened: 'already happened.',
      isToday: 'is today!',
      yetToOccur: 'has yet to occur.',
    };
  }
  render() {
    const div = document.createElement('div');
    div.className = 'person';

    const dob = renderDateOfBirth();
    const birthday = renderBirthday();
    const gender = renderGender();
    const name = renderFullName();
    const nationality = renderNationality();

    const children = [name, gender, nationality, dob, birthday];
    children.forEach(element => div.appendChild(element));

    return div;
  }
}
