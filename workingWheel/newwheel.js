gsap.registerPlugin(InertiaPlugin);
gsap.registerPlugin(Observer);

const pieces = gsap.utils.toArray(
  "#sec1, #sec2, #sec3, #sec4, #sec5, #sec6, #sec7, #sec8, #sec9, #sec10, #sec11, #sec12, #sec13, #sec14, #sec15"
);
const angleOffset = 0;
const indicator = document.querySelector("#indicator");
let rotation_current = gsap.getProperty("#circ-out", "rotation");
let rotation_last = rotation_current;
const sectorAngle = 360 / pieces.length;
let rotation_next =
  Math.floor((rotation_current + angleOffset) / sectorAngle) * sectorAngle +
  sectorAngle / 2 -
  angleOffset;
let selectedIndex =
  pieces.length -
  1 -
  Math.floor(((rotation_next + angleOffset) % 360) / sectorAngle);

function getIndexFromRotation(rotation) {
  // Calculate modulus of rotation and
  // ensure that the result is always between 0 and 359
  let rotation_mod = (((rotation + angleOffset) % 360) + 360) % 360;
  const index = Math.floor((rotation_mod / 360) * pieces.length);
  return index;
}

gsap.to("#indicator", {
  duration: 0.13,
  rotation: -10,
  transformOrigin: "65% 36%",
});
gsap.to("#indicator", {
  duration: 0.13,
  rotation: 3,
  ease: "power4",
});

gsap.to("#circ-out", {
  duration: 5,
  rotation: rotation_next,
  transformOrigin: "50% 50%",
  ease: "power4",
  onComplete: function () {
    console.log("selected", pieces[selectedIndex]);
  },
  onUpdate: function () {
    //recalculate tolerance
    let rotation_current = Math.round(
      gsap.getProperty("#circ-out", "rotation")
    );
    let tolerance = rotation_current - rotation_last;
    rotation_last = rotation_current;
  },
});

const indicatorRotationStart = gsap.getProperty("#indicator", "rotation");

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

Observer.create({
  target: "#circ-out",
  type: "wheel,scroll",
  preventDefault: true,
  scrollSpeed: -1,
  onChangeY(self) {
    const deltaY = (self.isDragging ? -self.deltaY : self.deltaY) / 15;
    console.log(deltaY);
    const rotation_increment = deltaY / 15;
    const direction = deltaY < 0 ? -1 : 1;
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
    const rotation_current = gsap.getProperty("#circ-out", "rotation");
    const rotation_diff = rotation_current - rotation_last;
    gsap.set("#indicator", {
      rotation: indicatorRotationStart + rotation_diff,
    });
    //recalculate tolerance
    rotation_current = Math.round(gsap.getProperty("#circ-out", "rotation"));
    tolerance = rotation_current - rotation_last;
    rotation_last = rotation_current;
  },
});
