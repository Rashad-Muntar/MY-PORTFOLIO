/* eslint-disable */
import  { useState, useRef, useEffect } from 'react'
import '../Assets/Styles/allProjects.scss';
import checker from '../Assets/Images/ck.png';
import pico from '../Assets/Images/pico2.png';
import { gsap } from 'gsap';
import weather from '../Assets/Images/weather.png';
import life from '../Assets/Images/life1.png';
import crypto from '../Assets/Images/crypto1.png';
import ProjectModal from './Modal';
import Contact from './Contact';

const Allprojects = () => {
  const [preload, setPreload] = useState(true);

  let [prId, setPrId] = useState('')

  const [open, setOpen] = useState(false);

  const [timer, setTimer] = useState(5);

  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  useEffect(() => {
      tl.current = gsap.timeline()
        .to(q('.first-div'), {
          x: '100%',
          duration: 0.6,
          ease: 'power2.inOut',
        })
        .to(q('.second-div'), {
          x: '100%',
          duration: 0.6,
          ease: 'power2.inOut',
        });
  });

  const openModal = (e) => {
   setPrId(e.target.id)
   setOpen(true)
  };
  
  const closeModal = (hide) => {
    setOpen(hide)
  }

  return (
    <>
    <ProjectModal productId={prId} closeModal={closeModal} showModal={open} data-scroll-section/>  

      <section className="all-project-wrapper">
           <h1 className="all-pro-header-title">Featured Projects</h1>
             <div className="all-project-content-wtrapper">
               <div className="project-cards-wrapper">
                 <h1 id="1" className="pro-titles pico" onClick={openModal}>
                   Pico Food
                   <img id="1" src={pico} alt="pico" className="img1 img" />
                 </h1>
   
                 <h1 id="2" className="pro-titles checker" onClick={openModal}>
                   Checker
                   <img id="2" src={checker} alt="pico" className="img2 img" />
                 </h1>
   
                 <h1 id="3" onClick={openModal} className="pro-titles weather">
                   Weather
                   <img id="3" src={weather} alt="pico" className="img3 img" />
                 </h1>
   
                 <h1 id="4" onClick={openModal}  className="pro-titles crypto">
                   Crypt List
                   <img id="4" src={crypto} alt="pico" className="img4 img" />
                 </h1>
   
                 <h1 id="5" onClick={openModal}  className="pro-titles life">
                   Life Style
                   <img id="5" src={life} alt="pico" className="img5 img" />
                 </h1>
               </div>
             </div>
       </section>
     <Contact />
    </>
  )
};

export default Allprojects;
