const t_start = 2000 //ms

loadJSON('./resources/content.json')
  .then((data) => {
    insertData(data.sections)
    setTimeout(triggerPointAppearance, t_start)
    setTimeout(initializeSectionAnimations, t_start)
  })
  .catch(console.error)
