gsap.registerPlugin(MotionPathPlugin);

//declaring variables for bird
let birdAppear1 = document.querySelector("#birdAppear1");
let birdThrow1 = document.querySelector("#birdThrow1");

let birdAppear2 = document.querySelector("#birdAppear2");
let birdThrow2 = document.querySelector("#birdThrow2");

let birdAppear3 = document.querySelector("#birdAppear3");
let birdThrow3 = document.querySelector("#birdThrow3");

//used to display cubes
let cube = document.querySelector(".box");
let cube2 = document.querySelector(".box2");
let cube3 = document.querySelector(".box3");

//used to display icons
let icons = document.querySelector(".icons");
let icons2 = document.querySelector(".icons2");
let icons3 = document.querySelector(".icons3");

// a function to set the attributes of an icon
function setIconAttributes(icon, src, id) {
  icon.setAttribute("src", src);
  icon.setAttribute("class", "icon iconv2 iconv3 " + id);
  icon.setAttribute("id", id);
  icon.addEventListener("click", function () {
    handleClick1(this.id);
  });
}

// an array of icon sources and ids
let iconData = [
  ["./assets/icon1.png", "icon1"],
  ["./assets/icon2.png", "icon2"],
  ["./assets/icon3.png", "icon3"],
  ["./assets/icon4.png", "icon4"],
  ["./assets/icon5.png", "icon5"],
  ["./assets/icon6.png", "icon6"],
];

// a loop to create and append the icons
for (let data of iconData) {
  let icon = document.createElement("img");
  setIconAttributes(icon, data[0], data[1]);
  icons.appendChild(icon);
  icons2.appendChild(icon.cloneNode(true));
  icons3.appendChild(icon.cloneNode(true));
}

//remove unneeded classes from icons
if (icons && icons2 && icons3) {
  let iconsChildren = icons.children;
  // console.log(iconsChildren);
  for (let i = 0; i < iconsChildren.length; i++) {
    iconsChildren[i].classList.remove("iconv2", "iconv3");
  }

  let icons2Children = icons2.children;
  for (let i = 0; i < icons2Children.length; i++) {
    icons2Children[i].classList.remove("icon", "iconv3");
  }

  let icons3Children = icons3.children;
  for (let i = 0; i < icons3Children.length; i++) {
    icons3Children[i].classList.remove("icon", "iconv2");
  }
}

//Declaring dynamic text for images
let texts = ["Icon1!", "Icon2!", "Icon3!", "Icon4!", "Icon5!", "Icon6!"];

// Loop through the array and create a paragraph element for each text
texts.forEach((text, index) => {
  // Create a new paragraph element
  let newParagraph = document.createElement("p");

  // Set the class attribute to "text text1", "text text2", or "text text3" depending on the index
  newParagraph.setAttribute(
    "class",
    `text text${index + 1} text2_${index + 1} text3_${index + 1}`
  );

  // Set the text content to the corresponding text
  newParagraph.textContent = text;

  // Get all the elements with class "textPos"
  let textPosElements = document.querySelectorAll(
    ".textPos, .textPos2, .textPos3"
  );

  // Loop through the elements and append the paragraph element to each one
  textPosElements.forEach((element) => {
    element.appendChild(newParagraph.cloneNode(true));
  });
});

// //functions to handle click on images
// function handleClick1(id) {
//   let text1 = document.querySelector(".text1"),
//     text2 = document.querySelector(".text2"),
//     text3 = document.querySelector(".text3"),
//     text4 = document.querySelector(".text4"),
//     text5 = document.querySelector(".text5"),
//     text6 = document.querySelector(".text6");

//   switch (id) {
//     case "icon1": {
//       if (window.getComputedStyle(text1).getPropertyValue("opacity") == 0) {
//         gsap.to(".text1", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 1,
//         });
//       } else if (
//         window.getComputedStyle(text1).getPropertyValue("opacity") == 1
//       ) {
//         gsap.to(".text1", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 0,
//         });
//       } else {
//         gsap.to(
//           ".text1",
//           {
//             autoAlpha: 0,
//           },
//           "<0.5"
//         );
//       }
//       break;
//     }
//     case "icon2": {
//       if (window.getComputedStyle(text2).getPropertyValue("opacity") == 0) {
//         gsap.to(".text2", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 1,
//         });
//       } else if (
//         window.getComputedStyle(text2).getPropertyValue("opacity") == 1
//       ) {
//         gsap.to(".text2", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 0,
//         });
//       } else {
//         gsap.to(
//           ".text1",
//           {
//             autoAlpha: 0,
//           },
//           "<0.5"
//         );
//       }
//       break;
//     }

//     case "icon3": {
//       if (window.getComputedStyle(text3).getPropertyValue("opacity") == 0) {
//         gsap.to(".text3", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 1,
//         });
//       } else if (
//         window.getComputedStyle(text3).getPropertyValue("opacity") == 1
//       ) {
//         gsap.to(".text3", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 0,
//         });
//       } else {
//         gsap.to(
//           ".text3",
//           {
//             autoAlpha: 0,
//           },
//           "<0.5"
//         );
//       }
//       break;
//     }

//     case "icon4": {
//       if (window.getComputedStyle(text4).getPropertyValue("opacity") == 0) {
//         gsap.to(".text4", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 1,
//         });
//       } else if (
//         window.getComputedStyle(text4).getPropertyValue("opacity") == 1
//       ) {
//         gsap.to(".text4", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 0,
//         });
//       } else {
//         gsap.to(
//           ".text4",
//           {
//             autoAlpha: 0,
//           },
//           "<0.5"
//         );
//       }
//       break;
//     }
//     case "icon5": {
//       if (window.getComputedStyle(text5).getPropertyValue("opacity") == 0) {
//         gsap.to(".text5", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 1,
//         });
//       } else if (
//         window.getComputedStyle(text5).getPropertyValue("opacity") == 1
//       ) {
//         gsap.to(".text5", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 0,
//         });
//       } else {
//         gsap.to(
//           ".text5",
//           {
//             autoAlpha: 0,
//           },
//           "<0.5"
//         );
//       }
//       break;
//     }
//     case "icon6": {
//       if (window.getComputedStyle(text6).getPropertyValue("opacity") == 0) {
//         gsap.to(".text6", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 1,
//         });
//       } else if (
//         window.getComputedStyle(text6).getPropertyValue("opacity") == 1
//       ) {
//         gsap.to(".text6", {
//           ease: "none",
//           duration: 0.5,
//           autoAlpha: 0,
//         });
//       } else {
//         gsap.to(
//           ".text6",
//           {
//             autoAlpha: 0,
//           },
//           "<0.5"
//         );
//       }
//       break;
//     }
//     default: {
//       // any other case
//     }
//   }
// }

//remove unneeded classes from textPos
let text1 = document.querySelector(".textPos");
let text2 = document.querySelector(".textPos2");
let text3 = document.querySelector(".textPos3");

// if (text1 && text2 && text3) {
//   let text1Children = text1.children;
//   // console.log(text1Children);
//   for (let i = 0; i < text1Children.length; i++) {
//     text1Children[i].classList.remove(
//       "text2_1",
//       "text2_2",
//       "text2_3",
//       "text2_4",
//       "text2_5",
//       "text2_6",
//       "text3_1"
//     );
//   }

//   let text2Children = text2.children;
//   // console.log(text1Children);
//   for (let i = 0; i < text2Children.length; i++) {
//     text2Children[i].classList.remove("text1", "text3_1");
//   }

//   let text3Children = text3.children;
//   // console.log(text1Children);
//   for (let i = 0; i < text3Children.length; i++) {
//     text3Children[i].classList.remove("text2_1", "text1");
//   }
// }

// Define an array of classes to remove
let classesToRemove1 = [
  "text2_1",
  "text2_2",
  "text2_3",
  "text2_4",
  "text2_5",
  "text2_6",
  "text3_1",
  "text3_2",
  "text3_3",
  "text3_4",
  "text3_5",
  "text3_6",
];

// Check if text1 exists
if (text1) {
  // Get the children of text1
  let text1Children = text1.children;

  // Loop through the children
  for (let i = 0; i < text1Children.length; i++) {
    // Loop through the classes to remove
    for (let j = 0; j < classesToRemove1.length; j++) {
      // Remove the class from the child element
      text1Children[i].classList.remove(classesToRemove1[j]);
    }
  }
}

// Define an array of classes to remove
let classesToRemove2 = [
  "text1",
  "text2",
  "text3",
  "text4",
  "text5",
  "text6",
  "text3_1",
  "text3_2",
  "text3_3",
  "text3_4",
  "text3_5",
  "text3_6",
];

// Check if text1 exists
if (text2) {
  // Get the children of text1
  let text2Children = text2.children;

  // Loop through the children
  for (let i = 0; i < text2Children.length; i++) {
    // Loop through the classes to remove
    for (let j = 0; j < classesToRemove2.length; j++) {
      // Remove the class from the child element
      text2Children[i].classList.remove(classesToRemove2[j]);
    }
  }
}

// Define an array of classes to remove
let classesToRemove3 = [
  "text1",
  "text2",
  "text3",
  "text4",
  "text5",
  "text6",
  "text2_1",
  "text2_2",
  "text2_3",
  "text2_4",
  "text2_5",
  "text2_6",
];

// Check if text1 exists
if (text3) {
  // Get the children of text1
  let text3Children = text3.children;

  // Loop through the children
  for (let i = 0; i < text3Children.length; i++) {
    // Loop through the classes to remove
    for (let j = 0; j < classesToRemove3.length; j++) {
      // Remove the class from the child element
      text3Children[i].classList.remove(classesToRemove3[j]);
    }
  }
}

// functions to handle click on images
function handleClick1(id) {
  //select all text elements
  let texts = document.querySelectorAll(
    ".text1, .text2, .text3, .text4, .text5, .text6"
  );
  //find the index of the text element that matches the id
  let index = parseInt(id.slice(-1)) - 1;
  //toggle the opacity of the text element using gsap
  gsap.to(texts[index], {
    ease: "none",
    duration: 0.5,
    autoAlpha: function () {
      if (texts[index].style.opacity == 0) {
        return 1;
      } else {
        return 0;
      }
    },
  });
}

icons2.addEventListener("click", function () {
  handleClick2(this.id);
});

// functions to handle click on images
function handleClick2(id) {
  //select all text elements
  let texts = document.querySelectorAll(
    ".text2_1, .text2_2, .text2_3, .text2_4, .text2_5, .text2_6"
  );
  //find the index of the text element that matches the id
  //use a regular expression to extract the number from the id
  // let index = id.match(/\d+/) - 1;
  for (let i = 0; i < texts.length; i++) {
    // console.log(texts[i]);
    //toggle the opacity of the text element using gsap
    gsap.to(texts[i], {
      ease: "none",
      duration: 0.5,
      autoAlpha: function () {
        if (texts[i].style.opacity == 0) {
          return 1;
        } else {
          return 0;
        }
      },
    });
  }
}

icons3.addEventListener("click", function () {
  handleClick2(this.id);
});

// functions to handle click on images
function handleClick3(id) {
  //select all text elements
  let texts = document.querySelectorAll(
    ".text3_1, .text3_2, .text3_3, .text3_4, .text3_5, .text3_6"
  );
  //find the index of the text element that matches the id
  //use a regular expression to extract the number from the id
  // let index = id.match(/\d+/) - 1;
  for (let i = 0; i < texts.length; i++) {
    console.log(texts[i]);
    //toggle the opacity of the text element using gsap
    gsap.to(texts[i], {
      ease: "none",
      duration: 0.5,
      autoAlpha: function () {
        if (texts[i].style.opacity == 0) {
          return 1;
        } else {
          return 0;
        }
      },
    });
  }
}

//creating a timeline
let tl = gsap.timeline({ repeat: -1 });

tl.to(birdAppear1, { duration: 3, ease: "none", autoAlpha: 1 });
//hide animation after it completes
tl.to(birdAppear1, { autoAlpha: 0 }, "<3");

tl.to(birdThrow1, { duration: 0.3, ease: "none", autoAlpha: 1 }, 3);
tl.to(birdThrow1, { autoAlpha: 0 }, "<4");

gsap.set(cube, {
  transformOrigin: "50% 50%",
  x: "-65px",
  y: "94px",
  opacity: 0,
});

tl.to(
  cube,
  {
    duration: 3,
    ease: "none",
    autoAlpha: 1,
    // plot a curve through these coordinates. The target's current coordinates will automatically be added to the start:
    motionPath: {
      path: "M 159.4 155.3 c 0 0 43 -120.3 -84.9 -190.3 s -109.7 139.9 -139.7 159.9",
      start: 0,
      end: -1,
      autoRotate: 90,
      type: "cubic",
    },
  },
  3
);

tl.to(cube, { autoAlpha: 0 }, "<3.5");

tl.to(
  ".icon",
  {
    keyframes: {
      y: [0, 10, 20, 30, 20, 10, 0],
    },
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
    stagger: 0.5,
  },
  3.5
);

tl.to(".icon", { autoAlpha: 0 }, "<3");

// tl.to(".text1", { autoAlpha: 0 }, "<0");
// tl.to(".text2", { autoAlpha: 0 }, "<0");
// tl.to(".text3", { autoAlpha: 0 }, "<0");
// tl.to(".text4", { autoAlpha: 0 }, "<0");
// tl.to(".text5", { autoAlpha: 0 }, "<0");
// tl.to(".text6", { autoAlpha: 0 }, "<0");

//section 2 starts from here
tl.to(birdAppear2, { duration: 3, ease: "none", autoAlpha: 1 }, 7);
//hide animation after it completes
tl.to(birdAppear2, { autoAlpha: 0 }, "<3");

tl.to(birdThrow2, { duration: 0.3, ease: "none", autoAlpha: 1 }, 10);

tl.to(birdThrow2, { autoAlpha: 0 }, "<4");

gsap.set(cube2, {
  transformOrigin: "50% 50%",
  x: "-65px",
  y: "94px",
  opacity: 0,
});

tl.to(
  cube2,
  {
    duration: 3,
    ease: "none",
    autoAlpha: 1,
    // plot a curve through these coordinates. The target's current coordinates will automatically be added to the start:
    motionPath: {
      path: "M 159.4 155.3 c 0 0 43 -120.3 -84.9 -190.3 s -109.7 139.9 -139.7 159.9",
      start: 0,
      end: -1,
      autoRotate: 90,
      type: "cubic",
    },
  },
  10
);

tl.to(cube2, { autoAlpha: 0 }, "<3.5");

tl.to(
  ".iconv2",
  {
    keyframes: {
      y: [0, 10, 20, 30, 20, 10, 0],
    },
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
    stagger: 0.5,
  },
  10.5
);

tl.to(".iconv2", { autoAlpha: 0 }, "<3");

//Section 3 starts from here
tl.to(birdAppear3, { duration: 3, ease: "none", autoAlpha: 1 }, 13);
//hide animation after it completes
tl.to(birdAppear3, { autoAlpha: 0 }, "<3");

tl.to(birdThrow3, { duration: 0.3, ease: "none", autoAlpha: 1 }, 16);
gsap.set(".icon, .cube", { opacity: 0 }, "<4");

gsap.set(cube3, {
  transformOrigin: "50% 50%",
  x: "-65px",
  y: "94px",
  opacity: 0,
});

tl.to(
  cube3,
  {
    duration: 3,
    ease: "none",
    autoAlpha: 1,
    // plot a curve through these coordinates. The target's current coordinates will automatically be added to the start:
    motionPath: {
      path: "M 159.4 155.3 c 0 0 43 -120.3 -84.9 -190.3 s -109.7 139.9 -139.7 159.9",
      start: 0,
      end: -1,
      autoRotate: 90,
      type: "cubic",
    },
  },
  16
);

gsap.set(cube3, { opacity: 0 }, "<3.5");

tl.to(
  ".iconv3",
  {
    keyframes: {
      y: [0, 10, 20, 30, 20, 10, 0],
    },
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
    stagger: 0.5,
  },
  16.5
);
gsap.set(".iconv3", { opacity: 0 }, "<3");
