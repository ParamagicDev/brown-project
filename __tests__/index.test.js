import {appendParameters, retrieveData} from '../src/index.js';

describe('appendParameters()', () => {
  test('Should append parameters to a given url', () => {
    const url = 'https://randomuser.me/api';
    const parameters = {
      nationality: 'nat=us,ca',
      users: 'results=10',
      include: 'gender,name,nat,dob',
    };

    const newUrl = appendParameters(url, parameters);
    expect(newUrl).toBe(
      `${url}/?${parameters.nationality}&${parameters.users}&${parameters.include}`,
    );
  });
});
