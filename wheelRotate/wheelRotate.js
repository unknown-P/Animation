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
let rotationSnap = 22.5;
let rotationSnapScroll = 15;
//set origin to center
gsap.set("#inner-circle", { transformOrigin: "50% 50%" });

Draggable.create("#inner-circle", {
  type: "rotation",
  inertia: true,
  edgeResistance: 1,
  clickable: "#inner-circle",
  snap: function (endValue) {
    //this function makes the end value snap to 15-degree increments
    // console.log(gsap.getProperty("#inner-circle", "rotation"));
    update();
    return Math.round(endValue / rotationSnap) * rotationSnap;
  },
  onDrag: function () {
    console.log(this.getDirection());
    gsap.set("#ques,#quesTxt,#quTxt", { opacity: 0 });
    update();
  },
  onDragStart: function () {
    gsap.set("#ques,#quesTxt,#quTxt", { opacity: 0 });
  },
  onDragEnd: function () {
    gsap.set("#ques,#quesTxt,#quTxt", { opacity: 0 });
  },
  minRotation: 5,
});

let velocity = 0;

//rotate on scroll using this plugin
Observer.create({
  target: "#outer-circle",
  type: "wheel, scroll",
  tolerance: 10,
  scrollSpeed: -2,
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
  let snap = Math.round(deltaTime / rotationSnapScroll) * rotationSnapScroll;
  gsap.set("#inner-circle", {
    rotate: `+=${adjustedVelocity % snap} `,
    ease: "none",
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

//variable for "-" path in svg
let icon = document.querySelector("#minusPathSVG");

//function to change "+" into "-" path (not working)

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

//Convert circle path (button) id's into arrays
let question = gsap.utils.toArray(
  "#qu1, #qu2, #qu3, #qu4, #qu5, #qu6, #qu7, #qu8, #qu9, #qu10, #qu11, #qu12, #qu13, #qu14, #qu15"
);
//Convert circle path (button) description id's into arrays
let questionDesc = gsap.utils.toArray(
  " #qu1Txt, #qu2Txt, #qu3Txt, #qu4Txt, #qu5Txt, #qu6Txt, #qu7Txt, #qu8Txt, #qu9Txt, #qu10Txt, #qu11Txt, #qu12Txt, #qu13Txt, #qu14Txt, #qu15Txt"
);
//Variables for empty text areas
let quests = document.querySelector("#ques");
let qutxt = document.querySelector("#quesTxt");

//reveal and hide question and their descriptions
function reveal() {
  if (
    window.getComputedStyle(quests).getPropertyValue("opacity") == 0 &&
    window.getComputedStyle(qutxt).getPropertyValue("opacity") == 0
  ) {
    gsap.to("#ques, #quTxt", {
      opacity: 1,
      duration: 2,
      ease: "power",
    });
  } else {
    gsap.to("#ques, #quTxt", {
      opacity: 0,
      // duration: 2,
      ease: "power",
    });
  }
}
// functions for onclick circle paths
function qu1() {
  reveal();
  quests.textContent = question[0].textContent;
  quTxt.textContent = questionDesc[0].textContent;

  if (
    icon.getAttribute(
      "d",
      "M320.09,542.4l-4,4.13-3-2.9,4-4.14-4.07-4,2.91-3,4.08,4,4-4.13,3,2.91-4,4.13,4,3.92-2.92,3Z"
    ) == true
  ) {
    icon.setAttribute(
      "d",
      "M737.23,357.41l-5.78.09-.06-4.16,5.77-.09,4.18-.07,5.77-.09.07,4.16-5.77.09Z"
    );
  } else {
  }
}

function qu2() {
  reveal();
  quests.textContent = question[1].textContent;
  quTxt.textContent = questionDesc[1].textContent;
}

function qu3() {
  reveal();
  quests.textContent = question[2].textContent;
  quTxt.textContent = questionDesc[2].textContent;
}

function qu4() {
  reveal();
  quests.textContent = question[3].textContent;
  quTxt.textContent = questionDesc[3].textContent;
}

function qu5() {
  reveal();
  quests.textContent = question[4].textContent;
  quTxt.textContent = questionDesc[4].textContent;
}

function qu6() {
  reveal();
  quests.textContent = question[5].textContent;
  quTxt.textContent = questionDesc[5].textContent;
}

function qu7() {
  reveal();
  quests.textContent = question[6].textContent;
  quTxt.textContent = questionDesc[6].textContent;
}

function qu8() {
  reveal();
  quests.textContent = question[7].textContent;
  quTxt.textContent = questionDesc[7].textContent;
}

function qu9() {
  reveal();
  quests.textContent = question[8].textContent;
  quTxt.textContent = questionDesc[8].textContent;
}

function qu10() {
  reveal();
  quests.textContent = question[9].textContent;
  quTxt.textContent = questionDesc[9].textContent;
}

function qu11() {
  reveal();
  quests.textContent = question[10].textContent;
  quTxt.textContent = questionDesc[10].textContent;
}

function qu12() {
  reveal();
  quests.textContent = question[11].textContent;
  quTxt.textContent = questionDesc[11].textContent;
}

function qu13() {
  reveal();
  quests.textContent = question[12].textContent;
  quTxt.textContent = questionDesc[12].textContent;
}

function qu14() {
  reveal();
  quests.textContent = question[13].textContent;
  quTxt.textContent = questionDesc[13].textContent;
}

function qu15() {
  reveal();
  quests.textContent = question[14].textContent;
  quTxt.textContent = questionDesc[14].textContent;
}
