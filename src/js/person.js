export default class Person {
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
    return new Date(this.attributes.dob.date);
  }

  get dobMonth() {
    return this.dateOfBirth.getMonth();
  }

  get dobDay() {
    return this.dateOfBirth.getDate();
  }

  get gender() {
    return this.attributes.gender;
  }

  get nationality() {
    return this.attributes.nat;
  }

  dateOfBirthString() {
    const dobAry = this.dateOfBirth.toDateString().split(' ');
    return dobAry[1] + ' / ' + dobAry[2] + ' / ' + dobAry[3];
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

  birthdayIsToday(comparedDate) {
    const today = comparedDate || new Date();

    if (today.getMonth() === this.dobMonth && today.getDate() === this.dobDay) {
      return true;
    }

    return false;
  }

  birthdayHasHappened(comparedDate) {
    const today = comparedDate || new Date();

    // Prior month
    if (this.dobMonth < today.getMonth()) {
      return true;
    }
    // Account for same month, but prior day
    if (this.dobMonth === today.getMonth() && this.dobDay < today.getDate()) {
      return true;
    }

    return false;
  }

  birthdayHasNotHappened(comparedDate) {
    const today = comparedDate || new Date();

    if (this.dobMonth > today.getMonth()) {
      return true;
    }
    // Account for same month, but prior day
    if (this.dobMonth === today.getMonth() && this.dobDay > today.getDate()) {
      return true;
    }

    return false;
  }

  renderBirthday() {
    const birthday = document.createElement('p');
    const values = {
      happened: 'Birthday already happened.',
      isToday: 'Birthday is today!',
      hasNotHappened: 'Birthday has yet to occur.',
    };

    if (this.birthdayHasHappened()) {
      birthday.innerText = values.happened;
    }

    if (this.birthdayIsToday()) {
      birthday.innerText = values.today;
    }

    if (this.birthdayHasNotHappened()) {
      birthday.innerText = values.hasNotHappened;
    }

    return birthday;
  }

  render() {
    const div = document.createElement('div');
    div.className = 'person';

    const dob = this.renderDateOfBirth();
    const birthday = this.renderBirthday();
    const gender = this.renderGender();
    const name = this.renderFullName();
    const nationality = this.renderNationality();

    const children = [name, gender, nationality, dob, birthday];
    children.forEach(element => div.appendChild(element));

    return div;
  }
}
