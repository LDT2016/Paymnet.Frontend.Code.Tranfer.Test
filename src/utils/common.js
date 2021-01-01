import { get } from './request';

export const getHiddenValue = (hidId) => {
  let hiddenVal = '';
  if (document.getElementById(hidId) && document.getElementById(hidId).value) {
    hiddenVal = document.getElementById(hidId).value;
  }
  return hiddenVal;
};
export const filterParams = (obj) => {
  const _newPar = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return filterParams(obj[key]);
    }
    if (
      (obj[key] === 0 || obj[key] === false || obj[key]) &&
      obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== ''
    ) {
      _newPar[key] = obj[key];
    }
  }
  return _newPar;
};

export const ttsAction = (msg) => {
  try {
    if (window.tts && typeof window.tts === 'function') {
      window.tts(msg);
    }
  } catch (_error) {}
};

export const ttsAction1 = (text) => (dispatch) => {
  try {
    console.log('ttsAction1-text: ', text);

    const url = 'http://localhost:8000/my/tts?' + text;
    get(url);
  } catch (_error) {}
};
