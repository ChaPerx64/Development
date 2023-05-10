
const t_start = 2000 //ms
ppid = 0
incr = 100

function trigger_points () {
  const points = document.querySelectorAll('.point')
  els = Array.from(points);
  for (i = 0; i < els.length; i++) {
    setTimeout(() => {
      document.getElementById(`point${ppid}`).classList.add('active')
      ppid++
    }, i*incr)
  }
}

function animate_sec () {
  const sections = document.querySelectorAll('.bordersec')
  els = Array.from(sections)
  els.forEach(el => {
    addObserver(el, {rootMargin: '-200px'})
  })
}


setTimeout(() => trigger_points(), t_start)
setTimeout(() => animate_sec(), t_start)



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
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active')
              }
              // observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}