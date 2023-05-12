function triggerPointsAppearance () {
  const points = document.querySelectorAll('.point');
  const elements = Array.from(points);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const delay = 100 * i;
    setTimeout(() => {
      element.classList.add('shown');
    }, delay);
  }
}

function animateSections () {
  const sections = document.querySelectorAll('.bordersec');
  const elements = Array.from(sections);
  for (let i = 0; i < elements.length; i++) {
    addObserver(elements[i], { pointerId: i, rootMargin: '-200px' });
  }
}

function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
    return el.classList.add('active');
  }

  // this takes a callback function which receives two arguments: the elemts list and the observer instance
  const handler = (entries) => {
    entries.forEach(entry => {
      const associatedPoint = document.getElementById(`point${options.pointerId}`);
      if(entry.isIntersecting) {
        if(options.cb){
          options.cb(el)
        } else {
          entry.target.classList.add('active');
          associatedPoint.classList.add('inView');
        }
      } else {
        associatedPoint.classList.remove('inView');
      }
    });
  };

  const observer = new IntersectionObserver(handler, options);
  observer.observe(el);
}
