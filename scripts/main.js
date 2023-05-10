
// reading JSON with content
function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}


function insertSection (Data) {
  const mainbody = document.querySelector('main')
  const points = document.getElementById("points")
  for (i = 0; i < Data.sections.length; i++) {
    // const text = document.createTextNode(Data.sections[i].text)
    const sectiontext = document.createElement('div')
    sectiontext.className = 'sectiontext'
    sectiontext.innerHTML = `
    <h1>
    ${Data.sections[i].header}
    </h1>
    <br>
    ${Data.sections[i].text}
    `
    const sectionimg = document.createElement('img')
    sectionimg.className = 'sectionimg'
    sectionimg.src = Data.sections[i].img
    const mysec = document.createElement('div')
    mysec.className = 'mysec'
    mysec.appendChild(sectiontext)
    mysec.appendChild(sectionimg)
    const bordersec = document.createElement('div')
    bordersec.className = 'bordersec'
    bordersec.id = `bordersec${i}`
    bordersec.appendChild(mysec)
    mainbody.appendChild(bordersec)
    // Result should look something like that:
    // mainbody.innerHTML += `
    // <div class="bordersec">
    //   <div class="mysec">
    //     <div class="sectiontext">
    //      <h1>
    //      ${Data.sections[i].header}
    //      </h1>
    //      ${Data.sections[i].text}
    //     </div>
    //     <img class="sectionimg" src="${Data.sections[i].img}" alt="SectionPicture">
    //   </div>
    // </div>`
    const pp = document.createElement("div");
    pp.classList.add('point')
    pp.id = `point${i}`
    pp.appendChild(document.createTextNode(`${Data.sections[i].title}`));
    points.appendChild(pp);
  }
}

loadJSON('./resources/content.json', insertSection, 'jsonp')
