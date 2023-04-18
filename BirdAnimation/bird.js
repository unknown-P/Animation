gsap.registerPlugin(InertiaPlugin);

// declaring variables
let droppables = document.querySelectorAll(".box");
let dropZones = document.querySelectorAll(".dropArea");

//used to detect how much cube is to collide with another object
let overlapThreshold = "80%";

//using for each loop for all the elements that have ".box" class
//so that each calculation is applied on each element
droppables.forEach(initDroppable);

//main function
function initDroppable(i, element) {
  //used to detect if cube is inside the box
  let insideZone = false;
  // console.log(i);

  //just to check if cube inside the box is functioning
  let highlightAnimation = gsap.to(i, 0.3, {
    fill: "green",
    paused: true,
  });

  Draggable.create(i, {
    inertia: true,
    bounds: { top: 0, left: 0, width: 1350, height: 600 },
    onDrag: function () {
      //we are not inside the box so it's false
      insideZone = false;
      //looping all dropzones or boxes
      //and checking hitTest on each of the box
      for (let i = 0; i < dropZones.length; i++) {
        if (this.hitTest(dropZones[i], overlapThreshold)) {
          //if we are inside the box make "insideZone = true"
          insideZone = true;
          //break out of the loop if we're inside the box
          break;
        }
      }

      if (insideZone) {
        highlightAnimation.play();
      } else {
        highlightAnimation.reverse();
      }
    },
    onDragEnd: function () {
      if (!insideZone) {
        //used to send cube back if we're not inside
        // the box. (I'm using inertia instead)
        // gsap.to(this.target, 0.2, {
        //   x: 0,
        //   y: 0,
        // });
      } else {
        gsap.to("#text1", {
          duration: 2,
          opacity: 1,
          ease: "power",
        });
        console.log(insideZone);
      }
    },
  });
}

// Draggable.create(droppables, {
//   onDrag: function(e) {
//     if (this.hitTest(dropArea1,overlapThreshold)) {
//       $(this.target).addClass("highlight");
//     }
//     else if (this.hitTest(dropArea2,overlapThreshold)) {
//       $(this.target).addClass("highlight");
//     }
//         else if (this.hitTest(dropArea3,overlapThreshold)) {
//       $(this.target).addClass("highlight");
//     }
//         else if (this.hitTest(dropArea4,overlapThreshold)) {
//       $(this.target).addClass("highlight");
//     }
//         else if (this.hitTest(dropArea5,overlapThreshold)) {
//       $(this.target).addClass("highlight");
//     }
//         else if (this.hitTest(dropArea6,overlapThreshold)) {
//       $(this.target).addClass("highlight");
//     }
//     else {
//       $(this.target).removeClass("highlight");
//     }
//   },
// onDragEnd: function(e) {
//   //checking if the cube has the highligh class.
//   if (!$(this.target).hasClass("highlight")) {
//     //if there isn't a highlight, send it back to starting position
//     TweenLite.to(this.target, 0.2, {
//       x: 0,
//       y: 0
//     });
//   }

// }
// });
