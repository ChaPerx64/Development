function renderSection(section) {
  return `
    <div id="${section.id}" class="bordersec">
      <div class="mysec">
        <div class="sectiontext">
          <h1>
            ${section.header}
          </h1>
          ${section.text}
        </div>
        <img class="sectionimg" src="${section.img}" alt="SectionPicture">
      </div>
    </div>
  `;
}

function renderSections(sections) {
  return sections.map((section) => renderSection(section)).join('');
}

function mountPoints(sections, pointsRoot) {
  for (i = 0; i < sections.length; i++) {
    const section = sections[i];
    const pointEl = document.createElement("div");
    pointEl.className = 'point'
    pointEl.id = `point${i}`
    pointEl.onclick = () => document
      .getElementById(section.id)
      .scrollIntoView({behavior: "smooth", block: "center"});
    pointEl.appendChild(document.createTextNode(section.title));
    pointsRoot.appendChild(pointEl);
  }
}

function mountSections(sections) {
  const root = document.querySelector('main');
  const pointsRoot = document.getElementById("points");
  root.innerHTML = renderSections(sections);
  mountPoints(sections, pointsRoot);
}
