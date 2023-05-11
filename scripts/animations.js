
const t_start = 2000 //ms
ppid = 0
incr = 100

function trigger_points () {
  const points = document.querySelectorAll('.point')
  els = Array.from(points);
  for (i = 0; i < els.length; i++) {
    setTimeout(() => {
      document.getElementById(`point${ppid}`).classList.add('shown')
      ppid++
    }, i*incr)
  }
}

function animate_sec () {
  const sections = document.querySelectorAll('.bordersec')
  els = Array.from(sections)
  for (i = 0; i < els.length; i++) {
    addObserver(els[i], {pointerid: i, rootMargin: '-200px'}
  )}
}


function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
    if(options.cb){
      options.cb(el)
    }else{
      entry.target.classList.add('active')
    }
    return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
    // for (i = 0; i < entries.length; i++) {
    entries.forEach(entry => {
      const pp = document.getElementById(`point${options.pointerid}`)
      if(entry.isIntersecting){
        if(options.cb){
          options.cb(el)
        }else{
          entry.target.classList.add('active')
          pp.classList.add('inView')
        }
        // observer.unobserve(entry.target)
      } else {
        if (pp.classList.contains('inView')) {pp.classList.remove('inView')}
      }
    })
    // entries.forEach(entry => {

    // })
  }, options)
  observer.observe(el)
}


setTimeout(() => trigger_points(), t_start)
setTimeout(() => animate_sec(), t_start)

