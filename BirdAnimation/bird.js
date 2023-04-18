gsap.registerPlugin(InertiaPlugin);

let body = document.querySelector("#body");

let symbols = document.querySelector(".box");
let area1 = document.querySelector("#Area1");
let overlapThreshold = "99%";

Draggable.create("#cube", {
  // inertia: true,
  edgeResistance: 0.05,
  bounds: { top: 100, left: 0, width: 1000, height: 800 },
  // bounds: "#container",
  // liveSnap: {},
  onDrag: function (e) {
    if (this.hitTest(area1, overlapThreshold)) {
      $(this.target).addClass("highlight");
    } else {
      $(this.target).removeClass("highlight");
    }
  },
  onDragEnd: function (e) {
    //instead of doing hitTest again, just see if it has the highligh class.
    if (!$(this.target).hasClass("highlight")) {
      //if there isn't a highlight, send it back to starting position
      gsap.to(this.target, 0.2, {
        x: 0,
        y: 0,
      });
    } else {
      gsap.to("#text1", {
        duration: 2,
        opacity: 1,
        ease: "power",
      });
    }
  },
});
