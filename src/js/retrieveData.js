import appendParameters from './appendParameters.js';

export default async function retrieveData(url, parameters) {
  const newUrl = appendParameters(url, parameters);

  try {
    const response = await fetch(newUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Handles any non 200-299 status codes. 404's / 500's do not error out
    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
