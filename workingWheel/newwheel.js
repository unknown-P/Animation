gsap.registerPlugin(InertiaPlugin);
gsap.registerPlugin(Observer);

// select all the circle sector elements and store them in an array
const pieces = gsap.utils.toArray(
  "#sec1, #sec2, #sec3, #sec4, #sec5, #sec6, #sec7, #sec8, #sec9, #sec10, #sec11, #sec12, #sec13, #sec14, #sec15"
);

// set an offset angle value
const angleOffset = 0;

// select the indicator element
const indicator = document.querySelector("#indicator");

// get the current rotation value of the outer circle
let rotation_current = gsap.getProperty("#circ-out", "rotation");

// store the current rotation value in a variable for later use
let rotation_last = rotation_current;

// calculate the angle of each sector
const sectorAngle = 360 / pieces.length;

// calculate the next rotation value for the outer circle
let rotation_next =
  Math.floor((rotation_current + angleOffset) / sectorAngle) * sectorAngle +
  sectorAngle / 2 -
  angleOffset;

// calculate the selected index of the sector based on the next rotation value
let selectedIndex =
  pieces.length -
  1 -
  Math.floor(((rotation_next + angleOffset) % 360) / sectorAngle);

// a function to calculate the index of the sector based on its rotation value
function getIndexFromRotation(rotation) {
  // calculate the modulus of the rotation value and ensure it is between 0 and 359
  let rotation_mod = (((rotation + angleOffset) % 360) + 360) % 360;
  // calculate the index of the sector based on the rotation value
  const index = Math.floor((rotation_mod / 360) * pieces.length);
  return index;
}

// animate the indicator rotation to a starting position
gsap.to("#indicator", {
  duration: 0.13,
  rotation: -10,
  transformOrigin: "65% 36%",
});

// animate the indicator rotation to an end position with ease
gsap.to("#indicator", {
  duration: 0.13,
  rotation: 3,
  ease: "power4",
});

// animate the rotation of the outer circle to the next rotation value
gsap.to("#circ-out", {
  duration: 5,
  rotation: rotation_next,
  transformOrigin: "50% 50%",
  ease: "power4",
  onComplete: function () {
    console.log("selected", pieces[selectedIndex]);
  },
  onUpdate: function () {
    // update the tolerance of the rotation value
    let rotation_current = Math.round(
      gsap.getProperty("#circ-out", "rotation")
    );
    let tolerance = rotation_current - rotation_last;
    rotation_last = rotation_current;
  },
});

// create a draggable instance for the outer circle that snaps to the nearest sector
Draggable.create("#circ-out", {
  type: "rotation",
  inertia: true,
  snap: function (endValue) {
    const index = getIndexFromRotation(endValue);
    selectedIndex = index;
    return (
      Math.floor((endValue + angleOffset) / sectorAngle) * sectorAngle +
      sectorAngle / 2 -
      angleOffset
    );
  },
  onDragEnd: function () {
    console.log("selected", pieces[selectedIndex]);
  },
});

//Use observer for scrolling
Observer.create({
  target: "#circ-out", // The element to observe for scroll events
  type: "wheel,scroll", // The type of events to observe
  preventDefault: true, // Whether to prevent the default behavior of the scroll events
  scrollSpeed: -1, // The speed at which to scroll the element (negative for inverse scrolling)

  onChangeY(self) {
    // This function is called whenever a scroll event occurs
    const deltaY = (self.isDragging ? -self.deltaY : self.deltaY) / 15; // Get the distance of the scroll event (divided by 15 for smoother scrolling)
    console.log(deltaY);
    const rotation_increment = deltaY / 15; // Calculate the amount to rotate the element
    const direction = deltaY < 0 ? -1 : 1; // Determine the direction of the scroll (up or down)

    // Calculate the position of the indicator
    const indicatorRect = indicator.getBoundingClientRect();
    const indicatorX = indicatorRect.left + indicatorRect.width / 2;
    const indicatorY = indicatorRect.top + indicatorRect.height / 2;

    // Find the closest sector to the indicator
    let closestSectorIndex = 0;
    let closestSectorAngle = Infinity;
    pieces.forEach((piece, index) => {
      const pieceRect = piece.getBoundingClientRect();
      const pieceX = pieceRect.left + pieceRect.width / 2;
      const pieceY = pieceRect.top + pieceRect.height / 2;
      const dx = pieceX - indicatorX;
      const dy = pieceY - indicatorY;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const sectorAngle = angle < 0 ? angle + 360 : angle;
      const diff = Math.abs(sectorAngle - rotation_current);
      if (diff < closestSectorAngle) {
        closestSectorAngle = diff;
        closestSectorIndex = index;
      }
    });

    // Rotate the #circ-out element to snap to the closest sector
    const rotation = closestSectorIndex * sectorAngle + sectorAngle / 2;
    gsap.to("#circ-out", {
      duration: 2,
      rotation: rotation - rotation_increment * direction,
      ease: "power4",
      onComplete: function () {
        const adjustedRotation =
          gsap.getProperty("#circ-out", "rotation") + angleOffset;
        const selectedIndex = Math.floor(
          (adjustedRotation % 360) / sectorAngle
        );
        console.log("selected", pieces[selectedIndex]);
      },
    });

    // Update the selected index
    selectedIndex = closestSectorIndex;
  },

  onUpdate: function () {
    // This function is called every frame during scrolling
    const rotation_current = gsap.getProperty("#circ-out", "rotation"); // Get the current rotation of the element
    const rotation_diff = rotation_current - rotation_last; // Calculate the difference in rotation since the last frame
    gsap.set("#indicator", {
      // Set the rotation of the indicator to match the rotation of the element
      rotation: indicatorRotationStart + rotation_diff,
    });
    //recalculate tolerance
    rotation_current = Math.round(gsap.getProperty("#circ-out", "rotation")); // Get the current rotation of the element (rounded to the nearest integer)
    tolerance = rotation_current - rotation_last; // Calculate the tolerance between the current and last rotations
    rotation_last = rotation_current; // Store the current rotation for the next frame
  },
});
