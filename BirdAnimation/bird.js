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

// add icons dynamically
let icon1 = document.createElement("img");

icon1.setAttribute("src", "./assets/icon1.png");
icon1.setAttribute("class", "icon iconv2 iconv3 icon1");
icon1.setAttribute("onclick", "handleClick1(this)");

icons.appendChild(icon1);
icons2.appendChild(icon1.cloneNode(true));
icons3.appendChild(icon1.cloneNode(true));

let icon2 = document.createElement("img");
icon2.setAttribute("src", "./assets/icon2.png");
icon2.setAttribute("class", "icon iconv2 iconv3 icon2");
icon2.setAttribute("onclick", "handleClick2(this)");

icons.appendChild(icon2);
icons2.appendChild(icon2.cloneNode(true));
icons3.appendChild(icon2.cloneNode(true));

let icon3 = document.createElement("img");
icon3.setAttribute("src", "./assets/icon3.png");
icon3.setAttribute("class", "icon iconv2 iconv3 icon3");
icon3.setAttribute("onclick", "handleClick3(this)");

icons.appendChild(icon3);
icons2.appendChild(icon3.cloneNode(true));
icons3.appendChild(icon3.cloneNode(true));

let icon4 = document.createElement("img");
icon4.setAttribute("src", "./assets/icon4.png");
icon4.setAttribute("class", "icon iconv2 iconv3 icon4");
icon4.setAttribute("onclick", "handleClick4(this)");

icons.appendChild(icon4);
icons2.appendChild(icon4.cloneNode(true));
icons3.appendChild(icon4.cloneNode(true));

let icon5 = document.createElement("img");
icon5.setAttribute("src", "./assets/icon5.png");
icon5.setAttribute("class", "icon iconv2 iconv3 icon5");
icon5.setAttribute("onclick", "handleClick5(this)");

icons.appendChild(icon5);
icons2.appendChild(icon5.cloneNode(true));
icons3.appendChild(icon5.cloneNode(true));

let icon6 = document.createElement("img");
icon6.setAttribute("src", "./assets/icon6.png");
icon6.setAttribute("class", "icon iconv2 iconv3 icon6");
icon6.setAttribute("onclick", "handleClick6(this) handle3Click6(this)");

icons.appendChild(icon6);
icons2.appendChild(icon6.cloneNode(true));
icons3.appendChild(icon6.cloneNode(true));

if (icons && icons2 && icons3) {
  let iconsChildren = icons.children;
  console.log(iconsChildren);
  for (let i = 0; i < iconsChildren.length; i++) {
    iconsChildren[i].classList.remove("iconv2", "iconv3");
  }

  let icons2Children = icons2.children;
  for (let i = 0; i < icons2Children.length; i++) {
    icons2Children[i].classList.remove("icon", "iconv3");
  }

  let icons3Children = icons3.children;
  for (let i = 0; i < icons3Children.length; i++) {
    icons3Children[i].classList.remove("icon", "iconv2", "text6");
  }
}

//Declaring dynamic text for images
let someText1 = "Icon1!";
let newParagraph = document.createElement("p");
newParagraph.setAttribute("class", "text text1");
newParagraph.textContent = someText1;
document.querySelector(".textPos").appendChild(newParagraph);

let someText2 = "Icon2!";
let newParagraph2 = document.createElement("p");
newParagraph2.setAttribute("class", "text text2");
newParagraph2.textContent = someText2;
document.querySelector(".textPos").appendChild(newParagraph2);

let someText3 = "Icon3!";
let newParagraph3 = document.createElement("p");
newParagraph3.setAttribute("class", "text text3");
newParagraph3.textContent = someText3;
document.querySelector(".textPos").appendChild(newParagraph3);

let someText4 = "Icon4!";
let newParagraph4 = document.createElement("p");
newParagraph4.setAttribute("class", "text text4");
newParagraph4.textContent = someText4;
document.querySelector(".textPos").appendChild(newParagraph4);

let someText5 = "Icon5!";
let newParagraph5 = document.createElement("p");
newParagraph5.setAttribute("class", "text text5");
newParagraph5.textContent = someText5;
document.querySelector(".textPos").appendChild(newParagraph5);

let someText6 = "Icon6!";
let newParagraph6 = document.createElement("p");
newParagraph6.setAttribute("class", "text text6 text3_6");
newParagraph6.textContent = someText6;
document.querySelector(".textPos").appendChild(newParagraph6);

//functions to handle click on images
function handleClick1(q) {
  let text = document.querySelector(".text");
  if (window.getComputedStyle(text).getPropertyValue("opacity") == 0) {
    gsap.to(".text1", {
      ease: "none",
      duration: 0.5,
      autoAlpha: 1,
    });
  } else if (window.getComputedStyle(text).getPropertyValue("opacity") == 1) {
    gsap.to(".text1", {
      ease: "none",
      duration: 0.2,
      autoAlpha: 0,
    });
  } else {
    gsap.set(
      text,
      {
        autoAlpha: 0,
      },
      "<=1"
    );
  }
}

function handleClick2(q) {
  let text = document.querySelector(".text");
  if (window.getComputedStyle(text).getPropertyValue("opacity") == 0) {
    gsap.to(".text2", {
      ease: "none",
      duration: 0.5,
      autoAlpha: 1,
    });
  } else if (window.getComputedStyle(text).getPropertyValue("opacity") == 1) {
    gsap.to(".text2", {
      ease: "none",
      duration: 0.2,
      autoAlpha: 0,
    });
  } else {
    gsap.set(
      text,
      {
        autoAlpha: 0,
      },
      "<=1"
    );
  }
}
function handleClick3(q) {
  let text = document.querySelector(".text");
  if (window.getComputedStyle(text).getPropertyValue("opacity") == 0) {
    gsap.to(".text3", {
      ease: "none",
      duration: 0.5,
      autoAlpha: 1,
    });
  } else {
    gsap.set(".text3", {
      ease: "none",
      duration: 0.2,
      opacity: 0,
    });
  }
}
function handleClick4(q) {
  let text = document.querySelector(".text");
  text.style = "opacity:0";
  text.classList.toggle(".text");
  gsap.to(".text4", {
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
  });
}
function handleClick5(q) {
  console.log(q.name + "clicked from icon");
  gsap.to(".text5", {
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
  });
}
function handleClick6(q) {
  console.log(q.name + "clicked from icon");
  gsap.to(".text6", {
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
  });
}
function handle3Click6(q) {
  console.log(q.name + "clicked from icon");
  gsap.to(".text3_6", {
    ease: "none",
    duration: 0.5,
    autoAlpha: 1,
  });
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
