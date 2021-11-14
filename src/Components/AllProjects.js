/* eslint-disable */
import  { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import '../Assets/Styles/allProjects.scss';
import checker from '../Assets/Images/ck.png';
import pico from '../Assets/Images/pico2.png';
import weather from '../Assets/Images/weather.png';
import life from '../Assets/Images/life1.png';
import crypto from '../Assets/Images/crypto1.png';
import ProjectModal from './Modal';
// import useWindowSize from "../hooks/locoScroll";

const Allprojects = () => {
  const params = useLocation()
  //Hook to grab window size
  const size = useWindowSize();
  const currentUrl = params.pathname


  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  },[]);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 45;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    // console.log("Animation is requeted")
    requestAnimationFrame(() => skewScrolling());
    
  };
  

  let [prId, setPrId] = useState('')

  const [open, setOpen] = useState(false);


  const openModal = (e) => {
   setPrId(e.target.id)
   setOpen(true)
  };
  
  const closeModal = (hide) => {
    setOpen(hide)
  }

  return (
    <>
    <ProjectModal productId={prId} closeModal={closeModal} showModal={open}/>  
    <div ref={app} className="all-project-wrapper">
        <h1 className="all-pro-header-title">Featured Projects</h1>
          <div className="all-project-content-wtrapper">
            <div ref={scrollContainer} className="project-cards-wrapper">
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
    </div>

    </>
  )
};

export default Allprojects;
