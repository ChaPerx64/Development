

function triggerPointAppearance () {
  const points = document.querySelectorAll('.point')
  const increment = 100
  let pointStart = 0
  els = Array.from(points);
  els.forEach((el) => {
    setTimeout(() => {
      el.classList.add('shown')
    }, pointStart)
    pointStart += increment
  })
}

function initializeSectionAnimations () {
  const sections = document.querySelectorAll('.bordersec')
  els = Array.from(sections)
  for (i = 0; i < els.length; i++) {
    addObserver(els[i], {pointerid: i, rootMargin: '-200px'}
  )}
}


function addObserver(el, options){
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const associatedPoint = document.getElementById(`point${options.pointerid}`)
      if(entry.isIntersecting){
        if(options.cb){
          options.cb(el)
        }else{
          entry.target.classList.add('active')
          associatedPoint.classList.add('inView')
        }
      } else {
        associatedPoint.classList.remove('inView')
      }
    })
  }, options)
  observer.observe(el)
}




