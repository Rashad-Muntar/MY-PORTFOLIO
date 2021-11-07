import { useEffect, useRef } from 'react'
import '../Assets/Styles/About.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";



const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef(null)
    const q = gsap.utils.selector(el)
    const tl = useRef()


    useEffect(() => {
      tl.current = gsap.timeline()
      .to(q('.header-title'), {marginLeft:'300px', duration:2, ease:'sine.in', 
      scrollTrigger:{
          trigger: '.about-wrapper',
          start: 'top 100%',
          scrub: 1,
      }})
      .to(q('.sec-section'), {y:'0%', ease:'power2.inOut', 
      scrollTrigger:{
          trigger: '.about-wrapper',
          start: "top 40%",
          end: "top 20%",
          toggleActions: "play none reverse none",
      }})
    })

    useEffect(() => {
        gsap.to('.about-content', {opacity:2, duration:0.5, stagger:0.02, ease:'sine.in', 
        scrollTrigger:{
            trigger: '.about-wrapper',
            start: 'top 100%',
            end: '+=400',
            scrub: 1
        }})
      })

    return (
        <section className='about-wrapper' id="aboutme" ref={el}>
            <div>
                <h1 className="header-title"> FEW WORDS ABOUT ME </h1>
            </div>
            <p className="about-content">
                <p className="first-section">
                    I am a <span className="span1">website and user interface developer specialized in frontend </span>, backend and TDD for complete scalable web apps.
                </p>
                <div className="sec-setion-wrapper">
                    <p className="sec-section">
                        I have a passion for transforming business ideas into beautiful web applications.
                        I have built everything in the full-stack with excellent UI to JavaScript and Rails APIs. I have pair-programed 
                        with different developers around the world working remotely.
                    </p>
                </div>
            </p>
        </section>
    )
}

export default About