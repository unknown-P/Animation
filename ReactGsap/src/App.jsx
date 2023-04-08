import { gsap } from "gsap";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import MainAnim from "./Components/MainAnim";
import "./App.css";

function App() {
  //using state to toggle animation
  const [reversed, setReversed] = useState(false);

  /* making a reference for top level div
  that will contain all our child div's or elements,
  so that we can access them in dom for animation */
  const app = useRef(); // <- Refs allow us to access DOM nodes (for scoping)

  // store the timeline in a ref
  // In order to avoid creating a new timeline on every render,
  // it's important to create the timeline inside an effect and store it in a ref.
  const timeline = useRef();

  // 'useLayoutEffect' used for animation in react
  // it ensures that elements are rendered and ready to be animated
  useLayoutEffect(() => {
    /* using 'gsap.context', we can directly
    access descendants of our Ref. We don't need to
    create ref for every element this way*/

    const context = gsap.context(() => {
      // add animations to our timeline and play on first render
      console.log("creating timeline");

      timeline.current = gsap
        .timeline()
        // Mic heading
        .fromTo(
          "#mic",
          { y: 820 },
          { y: 175, duration: 3, ease: "power1", opacity: 1 }
        )
        // hide animation after it completes
        .to("#mic", 0.5, { autoAlpha: 0 }, "<15")

        // Stabilize section
        .fromTo(
          "#section-1",
          { y: 749 },
          {
            y: 350,
            duration: 3,
            ease: "power1",
            opacity: 1,
          },
          3 //absolute start position, insert exactly '3 seconds' after start
        )
        // hide animation after it completes
        .to("#section-1", 0.5, { autoAlpha: 0 }, "<3")
        //insert delay 3 second after
        //the START of the most recently added animation

        // Stabilize  Line SVG
        .to(
          "#sec-1-svg",
          {
            duration: 3,
            ease: "power1",
            opacity: 1,
            strokeDashoffset: 0,
          },
          3
        )
        // hide animation after it completes
        .to("#sec-1-svg", 0.5, { autoAlpha: 0 }, "<3")

        // Optimize section
        .fromTo(
          "#section-2",
          { y: 749 },
          {
            y: 350,
            duration: 3,
            ease: "power1",
            opacity: 1,
          },
          6
        )
        // hide animation after it completes
        .to("#section-2", 0.5, { autoAlpha: 0 }, "<3")

        // Optimize Line svg
        .to(
          "#sec-2-svg",
          {
            duration: 3,
            ease: "power1",
            opacity: 1,
            strokeDashoffset: 0,
          },
          6
        )
        // hide animation after it completes
        .to("#sec-2-svg", 0.5, { autoAlpha: 0 }, "<3")

        // Profit section
        .fromTo(
          "#section-3",
          { y: 749 },
          {
            y: 350,
            duration: 3,
            ease: "power1",
            opacity: 1,
          },
          9
        )
        // hide animation after it completes
        .to("#section-3", 0.5, { autoAlpha: 0 }, "<3")

        // Profit Line svg
        .to(
          "#sec-3-svg",
          {
            duration: 3,
            ease: "power1",
            opacity: 1,
            strokeDashoffset: 0,
          },
          9
        )
        // hide animation after it completes
        .to("#sec-3-svg", 0.5, { autoAlpha: 0 }, "<3")

        // Invest section
        .fromTo(
          "#section-4",
          { y: 749 },
          {
            y: 350,
            duration: 3,
            ease: "power1",
            opacity: 1,
          },
          12
        )
        // hide animation after it completes
        .to("#section-4", 0.5, { autoAlpha: 0 }, "<3")

        // Invest Line svg
        .to(
          "#sec-4-svg-l",
          {
            duration: 3,
            ease: "power1",
            opacity: 1,
            strokeDashoffset: 0,
          },
          12
        )
        // Invest circle1 svg
        .to(
          "#sec-4-svg-c1",
          {
            duration: 3,
            ease: "power1",
            opacity: 1,
            strokeDashoffset: 0,
          },
          12
        )

        // Invest circle2 svg
        .to(
          "#sec-4-svg-c2",
          {
            duration: 3,
            ease: "power1",
            opacity: 1,
            strokeDashoffset: 0,
          },
          12
        )

        // hide animation after it completes
        .to("#sec-4-svg-l", 0.5, { autoAlpha: 0 }, "<3")
        .to("#sec-4-svg-c1", 0.5, { autoAlpha: 0 }, "<0")
        .to("#sec-4-svg-c2", 0.5, { autoAlpha: 0 }, "<0");
    }, app); // <- IMPORTANT! Scopes selector text

    // below cleanup function will be called when component is removed
    return () => context.revert(); // <- cleanup animation
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling reverse to", reversed);
    timeline.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className='app' ref={app}>
      <div>
        <button onClick={() => setReversed(!reversed)}>Toggle Animation</button>
      </div>
      <MainAnim />
    </div>
  );
}
export default App;
