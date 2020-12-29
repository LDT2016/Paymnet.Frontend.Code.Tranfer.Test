window.tts = function (text) {
  console.log('text: ', text);

  var url = 'http://localhost:8000/my/tts?' + text;
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
};
