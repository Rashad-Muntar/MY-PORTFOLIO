/* eslint-disable */
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss';

// gsap.registerPlugin(ScrollTrigger);

// export default function useLocoScroll(start) {
//   useEffect(() => {
//     if (!start) return;

//     const scrollEl = document.querySelector('.main-wrapper');

//     const locoScroll = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       class: 'is-reveal',
//     });
    
    // locoScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy("k", {
      // scrollTop(value) {
      //   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      // }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      // getBoundingClientRect() {
      //   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      // },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    //   pinType: document.querySelector("k").style.transform ? "transform" : "fixed"
    // });
    

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//   }, [start]);
  
// }



