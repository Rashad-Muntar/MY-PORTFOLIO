import  { useRef, useEffect} from 'react'
import '../Assets/Styles/Projects.css'
import pico from '../Assets/Images/pico1.png'
import pico2 from '../Assets/Images/pico2.png'
import checker1 from '../Assets/Images/checker1.png'
import checker2 from '../Assets/Images/checker2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects  = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef(null)
    const q = gsap.utils.selector(el)
    const tl = useRef()
    

    useEffect(() => {
        tl.current = gsap.timeline()
        .to(q('.moving-div'), {rotate:25, ease: 'power2.inOut', opacity: 1,
        scrollTrigger:{
            trigger: '.project-wrapper',
            start: "top 50%",
            end: "top 40%",
            toggleActions: "play none reverse none", 
        }})
        .to(q('.wrapper1'), {x:'30%', opacity:1, 
        scrollTrigger:{
            trigger: '.project-wrapper',
            start: "top 50%",
            end: "top 40%",
            toggleActions: "play none reverse none", 
        }})
        .to(q('.wrapper2'), {left:'70%', opacity:1, 
        scrollTrigger:{
            trigger: '.project-wrapper',
            start: "top 50%",
            end: "top 40%",
            toggleActions: "play none reverse none", 
        }})
    }, [])

    return (
        <section className='project-wrapper' ref={el}>
            <div className="moving-div" />
            <div className='img-wrapper wrapper1'>
                <img className="card-img  pico1" src={pico} />
                <img className="card-img pico2" src={pico2} />
                <div className='card-content'>
                    <div className="inner-div">
                        <p className="item-title">Picofood</p>
                        <a className="item-link" href='#'>
                            view project
                            <ArrowRightAltIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-content">
                <h1 className="recent">Recent <br /> Works</h1>
                    <a href='#' className='view-all'>MY RESUME</a>
            </div>
            <div className='img-wrapper wrapper2'>
                <img className="card-img  checker1" src={checker1} />
                <img className="card-img  checker2" src={checker2} />
                <div className='card-content'>
                    <div className="inner-div">
                        <p className="item-title">Checker</p>
                        <a className="item-link" href='#'>
                            view project
                            <ArrowRightAltIcon />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects