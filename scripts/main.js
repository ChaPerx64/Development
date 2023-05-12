loadJSON('./resources/content.json')
  .then((data) => {
    mountSections(data.sections);
    triggerPointsAppearance();
    animateSections();
  })
  .catch(console.error);
