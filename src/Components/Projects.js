/* eslint-disable */
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Styles/Projects.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pico from '../Assets/Images/pic.png';
import pico2 from '../Assets/Images/pico2.png';
import checker1 from '../Assets/Images/ck.png';
import checker2 from '../Assets/Images/ch2.png';
import ProjectModal from './Modal';

const Projects = () => {
  const [prId, setPrId] = useState('');

  const [open, setOpen] = useState(false);

  const openModal = (e) => {
    setPrId(e.target.id);
    setOpen(true);
  };

  const closeModal = (hide) => {
    setOpen(hide);
  };

  gsap.registerPlugin(ScrollTrigger);
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({

      "(max-width: 1600px)": function(){
        tl.current = gsap.timeline()
        .to(q('.moving-div'), {
          rotate: 25,
          ease: 'power2.inOut',
          opacity: 2,
          scrollTrigger: {
            trigger: '.project-wrapper',
            start: 'top 50%',
            end: 'top 40%',
            toggleActions: 'play none reverse none',
          },
        })
        .to(q('.wrapper1'), {
          x: '20%',
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
          top: "40%",
          opacity: 1,
          scrollTrigger: {
            trigger: '.project-wrapper',
            start: 'top 50%',
            end: 'top 40%',
            toggleActions: 'play none reverse none',
          },
        });
      },

      "(max-width: 1025px)": function(){
        tl.current = gsap.timeline()
        .to(q('.moving-div'), {
          rotate: 25,
          ease: 'power2.inOut',
          opacity: 2,
          scrollTrigger: {
            trigger: '.project-wrapper',
            start: 'top 50%',
            end: 'top 40%',
            toggleActions: 'play none reverse none',
          },
        })
        .to(q('.wrapper2'), {
          left: '10%',
          top: "30%",
          opacity: 1,
          scrollTrigger: {
            trigger: '.project-wrapper',
            start: 'top 50%',
            end: 'top 40%',
            toggleActions: 'play none reverse none',
          },
        });
      },


      "(max-width: 468px)": function(){
        tl.current = gsap.timeline()
        .to(q('.moving-div'), {
          rotate: 25,
          ease: 'power2.inOut',
          opacity: 2,
          scrollTrigger: {
            trigger: '.project-wrapper',
            start: 'top 50%',
            end: 'top 40%',
            toggleActions: 'play none reverse none',
          },
        })
        .to(q('.wrapper2'), {
          left: '10%',
          top: "30%",
          opacity: 1,
          scrollTrigger: {
            trigger: '.project-wrapper',
            start: 'top 50%',
            end: 'top 40%',
            toggleActions: 'play none reverse none',
          },
        });
      },

    })

    
  });

  return (
    <>
      <ProjectModal productId={prId} closeModal={closeModal} showModal={open} />
      <section className="project-wrapper" id="projects" ref={el}>
        <div className="moving-div" />
        <div className="img-wrapper wrapper1">
          <img className="card-img  pico1" src={pico} alt="pic1" />
          <img className="card-img pico2" src={pico2} alt="pic2" />
          <div className="card-content">
              <p className="item-title">Picofood</p>
              <p id="1" className="item-link" onClick={openModal}>
                view project
                <ArrowRightAltIcon  className="arrow"/>
              </p>
          </div>
        </div>
        <div className="text-content">
          <h1 className="recent">
            Recent
            <br />
            {' '}
            Works
          </h1>
          <Link className="view-all-link" to="/projects">VIEW ALL PROJECTS</Link>
        </div>
        <div className="img-wrapper wrapper2">
          <img className="card-img  checker1" src={checker1} alt="pic3" />
          <img className="card-img  checker2" src={checker2} alt="pic4" />
          <div className="card-content">
              <p className="item-title">Checker</p>
              <p id="2" className="item-link" onClick={openModal}>
                view project
                <ArrowRightAltIcon className="arrow"/>
              </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
