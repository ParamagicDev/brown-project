import appendParameters from '../src/js/appendParameters.js';

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

  test('Should not do anything given an empty params', () => {
    const url = 'https://randomuser.me/api';
    const params = {};
    const newUrl = appendParameters(url, params);
    expect(newUrl).toBe(url);
  });
});
