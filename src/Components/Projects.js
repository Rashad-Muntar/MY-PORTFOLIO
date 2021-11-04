import  { useRef, useEffect} from 'react'
import '../Assets/Styles/Projects.css'
import pico from '../Assets/Images/pico1.png'
import pico2 from '../Assets/Images/pico2.png'
import checker1 from '../Assets/Images/checker1.png'
import checker2 from '../Assets/Images/checker2.png'
import crypto1 from '../Assets/Images/crypto1.png'
import crypto2 from '../Assets/Images/crypto2.png'
import life1 from '../Assets/Images/life1.png'
import life2 from '../Assets/Images/life2.png'
import wd1 from '../Assets/Images/weather.png'
import wd2 from '../Assets/Images/weather2.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects  = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef(null)
    const q = gsap.utils.selector(el)
    const tl = useRef()
    

    // useEffect(() => {
    //     tl.current = gsap.timeline()
    //     .to(q('.project-wrapper'), {position:'fixed', 
    //     scrollTrigger:{
    //         trigger: '.project-wrapper',
    //         start: 'top 100%',
    //         scrub: 1,
    //         markers: true
    //     }})
    // }, [])

    return (
        <section className='project-wrapper' ref={el}>
            <div className="moving-div" />
            <div className='img-wrapper wrapper1'>
                <img className="card-img  phone" src={pico} />
                <img className="card-img tablet" src={pico2} />
            </div>
            <div className="text-content">
                <h1 className="recent">Recent <br /> Works</h1>
                <a href='#'>VIEW ALL WORKS</a>
            </div>
            <div className='img-wrapper wrapper2'>
                <img className="card-img  checker1" src={checker2} />
                <img className="card-img  tablet" src={checker1} />
            </div>
                {/* <div className="detail-section">
                    <div className="detail1">
                        <span className="counter">1</span>
                        <h1 className='card-title'>Picofood</h1>
                        <h3 className="passion">Full-stack <FavoriteBorderIcon /> UI Designer </h3>
                            <dv className="stacks">
                                <p>React  Redux  Material UI  Netlify</p>
                                <p className="description">This is a front-end only application for a food restaurant. This application was built with <span className='in-span'>React.js</span> and <span className='in-span'>Redux</span> which is responsive across all media screens.</p>
                                <div className="access">
                                    <a href="#" className="access-item">
                                        <GitHubIcon />
                                    </a>
                                    <a href="#" className="access-item" >
                                        <DynamicFeedIcon />
                                    </a>
                                </div>
                            </dv>
                    </div>

                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div className='project-card-container'>
                <div className="card card1">
                    
                    <img className="card-img  phone" src={pico} />
                    <img className="card-img tablet" src={pico2} />
                    <img className="card-img tablet tab2" src={pico2} />
                </div>

                <div className="card card1">
                    <img className="card-img  checker1" src={checker2} />
                    <img className="card-img checker2" src={checker1} />
                    <img className="card-img  checker3" src={checker1} />
                </div>

                <div className="card card1">
                    <img className="card-img  tablet" src={crypto1} />
                    <img className="card-img tablet tab3" src={crypto2} />
                    <img className="card-img  tablet tab4" src={crypto1} />
                </div>

                <div className="card card1">
                    <img className="card-img  tablet" src={life1} />
                    <img className="card-img tablet tab5" src={life2} />
                    <img className="card-img  tablet tab6" src={life1} />
                </div>
                <div className="card card1">
                    <img className="card-img  tablet" src={wd1} />
                    <img className="card-img tablet tab7" src={wd2} />
                    <img className="card-img  tablet tab8" src={wd1} />
                </div>
            </div> */}
        </section>
    )
}

export default Projects