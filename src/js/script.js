$(document).ready(function(){
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();  

  // Pin the intro 
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#goldpen',
    triggerHook: 0,
    duration:1
  })
  .setPin('.logo',{
    pushFollowers: false,
  })
  .setTween(TweenMax.to('.logo', 1,{autoAlpha:0, y: -50,delay: 1} ))
  
  .addIndicators({
     name:'Pinning  scene'
  })
  .addTo(controller);

  // Parallax scene
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.parallax',
    triggerHook: 1, 
    duration: '200%'
  })
  .setTween(TweenMax.from('.bcg',1,{y: 300, ease: Power0.easeNone}))
  .addTo(controller)

  // Greeting Scene
  var sceneOne = new ScrollMagic.Scene({
    triggerElement: '#intro',
    duration: '100%',
    triggerHook: 0.5
  })
  .setClassToggle('#greeting', 'fade-in')
  .addTo(controller)
  .addIndicators({
     name:'greeting scene'
  });
  

});

