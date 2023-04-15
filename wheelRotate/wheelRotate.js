// Timelines start (cleaner, more versatile)
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(InertiaPlugin);
gsap.registerPlugin(Observer);

let tl = gsap.timeline({
  // repeat: -1,
  // scrollTrigger: {
  //   trigger: "#svg",
  //   // start: "top center",
  //   // end: "bottom center",
  //   scrub: true,
  //   pin: true,
  //   markers: true,
  // },
});

//we have total 15 questions,
//so 15 mod 360 is 15.
let rotationSnap = 15;
//set origin to center
gsap.set("#inner-circle", { transformOrigin: "50% 50%" });

Draggable.create("#inner-circle", {
  type: "rotation",
  inertia: true,
  clickable: "#inner-circle",
  snap: function (endValue) {
    //this function makes the end value snap to 15-degree increments
    console.log(gsap.getProperty("#inner-circle", "rotation"));
    update();

    return Math.round(endValue / rotationSnap) * rotationSnap;
  },
  onDrag: function () {
    console.log(this.getDirection());
    update();
  },
  onDragStart: function () {
    gsap.set("#ques", { opacity: 0, ease: "power" });
    gsap.set("#quesTxt", { opacity: 0, ease: "power" });
  },
});

// function rotate(value) {
//   gsap.to("#inner-circle", {
//     rotate: value,
//     ease: "back.out",
//     duration: 0.2,
//     // onComplete: () => { animating = false }
//   });
// }

// Observer.create({
//   target: "#inner-circle", // can be any element (selector text is fine)
//   type: "wheel,scroll", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
//   onChange: () => {
//     rotate(360);
//   },
// });

let velocity = 0;

Observer.create({
  target: "#outer-circle",
  type: "wheel, scroll",
  // tolerance: 10,
  preventDefault: true,
  onChangeY(self) {
    if (Math.abs(self.velocityY) > Math.abs(velocity)) {
      velocity = self.velocityY;
    }
  },
});

gsap.ticker.add((time, deltaTime) => {
  if (Math.abs(velocity) < 50) {
    velocity = 0;
    return;
  }

  const adjustedVelocity = (deltaTime * velocity) / 8000;
  let snap = Math.round(deltaTime / rotationSnap) * rotationSnap;
  gsap.set("#inner-circle", {
    rotate: `+=${adjustedVelocity % snap} `,
    ease: Sine.easeInOut,
  });
  // console.log(gsap.getProperty("#inner-circle", "rotation"));

  velocity *= 0.8;
  gsap.set("#ques", { opacity: 0, ease: "power" });
  gsap.set("#quesTxt", { opacity: 0, ease: "power" });
  update();
});

var numItems = 15;
var wheel = document.querySelector("#inner-circle");
var info = document.querySelector("#info");
var arc = 360 / numItems;
var ques = [
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  // "1",
  "1",
  "15",
  "14",
  "13",
  "12",
  "11",
  "10",
];

function update() {
  var rotation = gsap.getProperty(wheel, "rotation");
  var angle = rotation - 360 * Math.floor(rotation / 360);
  var index = Math.floor((360 + angle) / arc) % ques.length;
  var displayQues = ques[index];
  let rec = document.querySelector("#rec");
  rec.textContent = "Recommendation " + displayQues;
  gsap.to("#rec, #rec-txt, #line", {
    opacity: 1,
    duration: 2,
    ease: "power",
  });
}

let icon = document.querySelector("#minusPathSVG");

// function changeIcon(q) {
//   console.log(q + "clicked");
//   if (
//     icon.getAttribute(
//       "d",
//       "M737.23,357.41l-5.78.09-.06-4.16,5.77-.09,4.18-.07,5.77-.09.07,4.16-5.77.09Z"
//     ) == true
//   ) {
//     icon.setAttribute(
//       "d",
//       "M320.09,542.4l-4,4.13-3-2.9,4-4.14-4.07-4,2.91-3,4.08,4,4-4.13,3,2.91-4,4.13,4,3.92-2.92,3Z"
//     );
//   } else if (
//     icon.getAttribute(
//       "d",
//       "M320.09,542.4l-4,4.13-3-2.9,4-4.14-4.07-4,2.91-3,4.08,4,4-4.13,3,2.91-4,4.13,4,3.92-2.92,3Z"
//     ) == false
//   ) {
//     icon.setAttribute(
//       "d",
//       "M737.23,357.41l-5.78.09-.06-4.16,5.77-.09,4.18-.07,5.77-.09.07,4.16-5.77.09Z"
//     );
//   }
// }

function quest(q) {
  console.log(q + "clicked");

  let ques = document.querySelector("#ques");
  let qutxt = document.querySelector("#quesTxt");

  if (
    window.getComputedStyle(ques).getPropertyValue("opacity") == 0 &&
    window.getComputedStyle(qutxt).getPropertyValue("opacity") == 0
  ) {
    gsap.to("#ques, #quesTxt", {
      opacity: 1,
      duration: 2,
      ease: "power",
    });
  }
}
