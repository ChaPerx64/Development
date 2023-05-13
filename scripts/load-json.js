// reading JSON with content
function loadJSON(path, success, error) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
        else {
          reject(xhr.response);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
  })
}