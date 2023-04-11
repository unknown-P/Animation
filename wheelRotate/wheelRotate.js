// Timelines start (cleaner, more versatile)
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(InertiaPlugin);

let tl = gsap.timeline({
  repeat: -1,

  scrollTrigger: {
    trigger: ".container",
    scrub: true, // or time (in seconds) to catch up
    pin: true, // or selector or element to pin
    markers: true,
  },
});

tl.to("#inner-circle", {
  duration: 2,
  ease: "none",
  rotate: "360",
  transformOrigin: "50% 50%",
});

Draggable.create("#svg", {
  type: "rotation",
  inertia: true,
});

// tl.to("#outer-circle", {
//   duration: 3,
//   ease: "power1.In",
//   rotate: 360,
//   transformOrigin: "50% 50%",
//   delay: 2,
// });
