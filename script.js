let controler = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo(".sun", { y: -20 }, { y: 200, duration: 3 })
  .fromTo(".bg", { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(
    ".content-images",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 5,
    },
    "-=2"
  )
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 5 }, "-=3");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controler);
