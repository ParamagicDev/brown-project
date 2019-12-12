export default function appendParameters(url, parameters) {
  // If the obj given is blank, dont append anything
  if (Object.entries(parameters).length === 0) {
    return url;
  }

  let newUrl = url + '/?';

  const paramsAry = Object.values(parameters);
  for (let i = 0; i < paramsAry.length; i++) {
    newUrl += paramsAry[i];

    // If its the last param, dont append the '&'
    if (i === paramsAry.length - 1) {
      break;
    }

    newUrl += '&';
  }

  return newUrl;
}
