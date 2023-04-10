// // Mic animation
// gsap.fromTo(
//   "#mic",
//   { y: 820 },
//   { y: 175, duration: 3, ease: "power1", opacity: 1 }
// );

// // Stabilize section
// gsap.fromTo(
//   "#section-1",
//   { y: 749 },
//   {
//     y: 350,
//     duration: 3,
//     delay: 2,
//     ease: "power1",
//     opacity: 1,
//   }
// );
// // Stabilize Line SVG
// gsap.to("#sec-1-svg", {
//   duration: 3,
//   delay: 2,
//   ease: "power1",
//   opacity: 1,
//   strokeDashoffset: 0,
// });

// // Stabilize section
// gsap.fromTo(
//   "#section-2",
//   { y: 749 },
//   {
//     y: 350,
//     duration: 3,
//     delay: 4,
//     ease: "power1",
//     opacity: 1,
//   }
// );
// // Stabilize Line SVG
// gsap.to("#sec-2-svg", {
//   duration: 3,
//   delay: 4,
//   ease: "power1",
//   opacity: 1,
//   strokeDashoffset: 0,
// });

// Timelines start (cleaner, more versatile)
let tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
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
  },
  3 //absolute start position, insert exactly '3 seconds' after start
);
// hide animation after it completes
tl.to("#section-1", 0.5, { autoAlpha: 0 }, "<3");
//insert delay 3 second after
//the START of the most recently added animation

// Stabilize  Line SVG
tl.to(
  "#sec-1-svg",
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 0,
  },
  3
);
// hide animation after it completes
tl.to("#sec-1-svg", 0.5, { autoAlpha: 0 }, "<3");

// Optimize section
tl.fromTo(
  "#section-2",
  { y: 749 },
  {
    y: 350,
    duration: 3,
    ease: "power1",
    opacity: 1,
  },
  6
);
// hide animation after it completes
tl.to("#section-2", 0.5, { autoAlpha: 0 }, "<3");

// Optimize Line svg
tl.fromTo(
  "#sec-2-svg",
  {
    duration: 3,
    strokeDashoffset: 0,
  },
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 2000,
  },
  6
);
// hide animation after it completes
tl.to("#sec-2-svg", 0.5, { autoAlpha: 0 }, "<3");

// Profit section
tl.fromTo(
  "#section-3",
  { y: 749 },
  {
    y: 350,
    duration: 3,
    ease: "power1",
    opacity: 1,
  },
  9
);
// hide animation after it completes
tl.to("#section-3", 0.5, { autoAlpha: 0 }, "<0");

// Profit Line svg
tl.to(
  "#sec-3-svg",
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 0,
  },
  9
);
// hide animation after it completes
tl.to("#sec-3-svg", 0.5, { autoAlpha: 0 }, "<3");

// Invest section
tl.fromTo(
  "#section-4",
  { y: 749 },
  {
    y: 350,
    duration: 3,
    ease: "power1",
    opacity: 1,
  },
  12
);
// hide animation after it completes
tl.to("#section-4", 0.5, { autoAlpha: 0 }, "<3");

// Invest circle1 svg
tl.to(
  "#sec-4-svg-c1",
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 0,
  },
  12
);

// Invest circle2 svg
tl.to(
  "#sec-4-svg-c2",
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 0,
  },
  12
);

// Invest Line svg
tl.fromTo(
  "#sec-4-svg-l",
  {
    duration: 3,
    strokeDashoffset: 1000,
  },
  {
    duration: 3,
    ease: "power1",
    opacity: 1,
    strokeDashoffset: 2000,
  },
  12.4
);

// hide animation after it completes
tl.to("#sec-4-svg-c1", 0.5, { autoAlpha: 0 }, "<0");
tl.to("#sec-4-svg-c2", 0.5, { autoAlpha: 0 }, "<0");
tl.to("#sec-4-svg-l", 0.5, { autoAlpha: 0 }, "<0");
