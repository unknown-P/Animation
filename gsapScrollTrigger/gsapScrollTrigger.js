//register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);

// Timelines start (cleaner, more versatile)
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-1",
    markers: true,
    start: "top 50%",
    end: "center 70%",
  },
});
// Mic heading
tl.fromTo(
  "#mic",
  { y: 820 },
  { y: 175, duration: 3, ease: "power1", opacity: 1 }
);
// Stabilize section
tl.fromTo(
  "#section-1",
  { y: 749 },
  {
    y: 350,
    duration: 3,
    ease: "power1",
    opacity: 1,
  }
);

// Stabilize  Line SVG
tl.to(
  "#sec-1-svg",
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 0,
  },
  "-=3"
);

// Stabilize section
tl.fromTo(
  "#section-2",
  { y: 749 },
  {
    y: 350,
    duration: 3,
    ease: "power1",
    opacity: 1,
  }
);

// Stabilize  Line SVG
tl.to(
  "#sec-2-svg",
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 0,
  },
  "-=3"
);
