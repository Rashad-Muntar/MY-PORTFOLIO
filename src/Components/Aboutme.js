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
      .to(q('.header-title'), {marginLeft:'200px', opacity:0.3, duration:5, ease:'sine.in', 
      scrollTrigger:{
          trigger: '.about-wrapper',
          start: 'top 100%',
          end: '+=400',
          scrub: 1
      }})
      .to(q('.underline'),{width:'30%', duration:1, 
      scrollTrigger:{
        trigger: '.about-wrapper',
        start: 'top 100%',
        end: '+=400',
        scrub: 1
      }})
    }, [])

    useEffect(() => {
        gsap.to('.about-content', {opacity:2, duration:0.5, stagger:0.02, ease:'sine.in', 
        scrollTrigger:{
            trigger: '.about-wrapper',
            start: 'top 100%',
            end: '+=400',
            scrub: 1
        }})
      }, [])

    return (
        <section className='about-wrapper' ref={el}>
            <div>
                <h1 className="header-title">
                    About me
                    <div className='underline'/>
                </h1>
                
            </div>
            <p className="about-content">
                I am a software engineer specialized in frontend, backend and TDD for complete scalable web apps.
                <p>
                I have a passion for transforming business ideas into beautiful web applications. I have built everything 
                in the full-stack curriculum from landing pages with excellent UI to JavaScript and Rails APIs. I have pair-programed 
                with different developers around the world working remotely.
                </p>
            </p>
        </section>
    )
}

export default About