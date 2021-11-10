import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import '../Assets/Styles/Modal.css';

const ProjectModal = ({ closeModal, showModal, productId }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  const closeModalHandler = () => {
    tl.current = gsap.timeline()
      .to(q('.modal-content-wrapper'), {
        y: '100%',
        duration: 1,
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
        duration: 1,
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

         <div className="modal-img-section" />

         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Product with id 1</h1>
         </div>
       </div>
       )
      }
      {
       productId === '2' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section" />

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

         <div className="modal-img-section" />

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

         <div className="modal-img-section" />

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
       productId === '4' && (
       <div className="modal-content-wrapper">

         <div className="modal-img-section" />

         <div className="modal-desc-section">
           <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
             <CloseIcon fontSize="large" />
           </button>
           <h1>Product with id 4</h1>
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
