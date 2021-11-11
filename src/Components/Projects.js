import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Styles/Projects.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pico from '../Assets/Images/pic.png';
// import resume from '../Assets/Documents/resume.pdf';
import pico2 from '../Assets/Images/pico2.png';
import checker1 from '../Assets/Images/ck.png';
import checker2 from '../Assets/Images/ch2.png';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.moving-div'), {
        rotate: 25,
        ease: 'power2.inOut',
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-wrapper',
          start: 'top 50%',
          end: 'top 40%',
          toggleActions: 'play none reverse none',
        },
      })
      .to(q('.wrapper1'), {
        x: '30%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-wrapper',
          start: 'top 50%',
          end: 'top 40%',
          toggleActions: 'play none reverse none',
        },
      })
      .to(q('.wrapper2'), {
        left: '65%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-wrapper',
          start: 'top 50%',
          end: 'top 40%',
          toggleActions: 'play none reverse none',
        },
      });
  });

  return (
    <section className="project-wrapper" id="projects" ref={el}>
      <div className="moving-div" />
      <div className="img-wrapper wrapper1">
        <img className="card-img  pico1" src={pico} alt="pic1" />
        <img className="card-img pico2" src={pico2} alt="pic2" />
        <div className="card-content">
          <div className="inner-div">
            <p className="item-title">Picofood</p>
            <Link className="item-link" to="/">
              view project
              <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-content">
        <h1 className="recent">
          Recent
          <br />
          {' '}
          Works
        </h1>
        <Link className="view-all" to="/projects">VIEW ALL PROJECTS</Link>
      </div>
      <div className="img-wrapper wrapper2">
        <img className="card-img  checker1" src={checker1} alt="pic3" />
        <img className="card-img  checker2" src={checker2} alt="pic4" />
        <div className="card-content">
          <div className="inner-div">
            <p className="item-title">Checker</p>
            <Link to="/">
              view project
              <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
