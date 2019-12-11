import appendParameters from './appendParameters.js';

export default async function retrieveData(url, parameters) {
  const newUrl = appendParameters(url, parameters);

  const response = await fetch(newUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  console.log(JSON.stringify(result));

  return result;
}
