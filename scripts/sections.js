function createSection (section, id) {
  const borderSec = document.createElement('div')
  borderSec.className = 'bordersec'
  borderSec.id = `bordersec${id}`
  borderSec.innerHTML = `
    <div class="mysec">
      <div class="sectiontext">
        <h1>
        ${section.header}
        </h1>
        ${section.text}
      </div>
      <div style="background-image: url(${section.img});" class="sectionimg">
        
      </div>
    </div>`
  return borderSec
}
// <img class="sectionimg" src="${section.img}" alt="SectionPicture">

function mountSections (sections) {
  const mainBody = document.querySelector('main')
  for (let i = 0; i < sections.length; i++) {
    mainBody.appendChild(createSection(sections[i], i))
  }
}

function createPoint (section, id) {
  const point = document.createElement("div")
  point.className = 'point'
  point.id = `point${id}`
  point.onclick = () => document.querySelector(`#bordersec${id}`).scrollIntoView({behavior: "smooth", block: "center"})
  point.appendChild(document.createTextNode(`${section.title}`));
  return point
}

function mountPoints (sections) {
  const points = document.querySelector('#points')
  for (let i = 0; i < sections.length; i++) {
    points.appendChild(createPoint(sections[i], i))
  }
}

function insertData (sections) {
  mountSections(sections)
  mountPoints(sections)
}