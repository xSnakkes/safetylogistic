const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    path: [
        {x: (window.innerWidth/8), y: -20},
        {x: (window.innerWidth/8)*2, y: 10},
        {x: (window.innerWidth/8)*3, y: 50},  // Изменено значение y
        {x: (window.innerWidth/8)*4, y: 150}, // Изменено значение y
        {x: (window.innerWidth/8)*3, y: 200}, // Изменено значение y
        {x: (window.innerWidth/8)*5, y: 300}, // Изменено значение y
        {x: (window.innerWidth/8)*7, y: 400}, // Изменено значение y
        {x: window.innerWidth + 150, y: 500}  // Изменено значение y
    ],
  };
  
  gsap.registerPlugin(MotionPathPlugin);
  const tween = gsap.timeline();
  
  tween.to(".paper-plane", 1, {
    motionPath: flightPath,
    ease: Power1.easeInOut,
  });
  
  const controller = new ScrollMagic.Controller();
  
  const scene = new ScrollMagic.Scene({
    triggerElement: ".animated",
    duration: 5000,
    triggerHook: 0,
  })
    .setTween(tween)
    .setPin(".animated")
    .addTo(controller);