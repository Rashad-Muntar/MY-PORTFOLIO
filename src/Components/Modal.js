import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import checker from '../Assets/Images/ck.png';
import pico from '../Assets/Images/pico2.png';
import weather from '../Assets/Images/weather.png';
import life from '../Assets/Images/life1.png';
import crypto from '../Assets/Images/crypto1.png';
import '../Assets/Styles/Modal.css';

const ProjectModal = ({ closeModal, showModal, productId }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  const closeModalHandler = () => {
    tl.current = gsap.timeline()
      .to(q('.modal-content-wrapper'), {
        y: '100%',
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.2,
      });
    setTimeout(() => {
      closeModal(false);
    }, 1500);
  };
  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.modal-content-wrapper'), {
        y: '0%',
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.2,
      });
  }, [showModal]);

  return (
    showModal && (
    <div className="modal-wrapper" ref={el}>
      {
       productId === '1' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section pico-img" style={{ backgroundImage: `url(${pico})` }} />

         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Pico Food --- Responsive Restaurant Application</h1>
           <p className="pr-description">
           This is a front-end only application for a food restaurant. This application 
           was built with React.js and Redux which is responsive across all media screens.
           User is able to add food to a cart and the cart will calculate the total price, 
           then a user is able to make an order.
           </p>
           <div className="stacks">
              
           </div>
         </div>
       </div>
       )
      }
      {
       productId === '2' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section">
           <img src={checker} alt="pico" className="checker-img" />
         </div>
         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Product with id 2</h1>
         </div>
       </div>
       )
      }

      {
       productId === '3' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section">
           <img className="weather-img" src={weather} alt="checker" />
         </div>

         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Product with id 3</h1>
         </div>
       </div>
       )
      }

      {
       productId === '4' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section">
           <img className="crypto-img" src={crypto} alt="checker" />
         </div>

         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Product with id 4</h1>
         </div>
       </div>
       )
      }

      {
       productId === '5' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section">
           <img className="life-img" src={life} alt="checker" />
         </div>

         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Product with id 5</h1>
         </div>
       </div>
       )
      }

    </div>
    )
  );
};

ProjectModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ProjectModal;
