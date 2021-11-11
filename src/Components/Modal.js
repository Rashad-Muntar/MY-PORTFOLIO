import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import checker from '../Assets/Images/ck.png';
import pico from '../Assets/Images/pico2.png';
import weather from '../Assets/Images/weather.png';
import life from '../Assets/Images/life1.png';
import crypto from '../Assets/Images/crypto1.png';
import '../Assets/Styles/Modal.scss';

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
         <button className="modal-closeBtn" type="button" onClick={closeModalHandler}>
           <CloseIcon fontSize="large" />
         </button>
         <div className="modal-img-section">
           <img src={pico} alt="pico" className="pico-img" />
         </div>

         <div className="modal-desc-section">
           <div className="pr-desc-wrapper">
             <h1 className="modal-pr-title">Pico Food --- Responsive Restaurant Application</h1>
             <p className="pr-description">
               This is a front-end only application for a food restaurant. This application
               was built with React.js and Redux which is responsive across all media screens.
               User is able to add food to a cart and the cart will calculate the total price,
               then a user is able to make an order.
             </p>
             <div className="stacks">
               <span className="stackItem">React.js</span>
               <span className="stackItem">Material UI</span>
               <span className="stackItem">Redux</span>
               <span className="stackItem">Netlify</span>
             </div>
             <div className="links-wrapper">
               <Link className="lk" to="https://github.com/Rashad-Muntar/pico-food.git" target="_blank"><GitHubIcon /></Link>
               <Link className="lk" to="https://vigilant-panini-e841af.netlify.app" target="_blank"><AltRouteOutlinedIcon /></Link>
             </div>
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
           <div className="pr-desc-wrapper">
             <h1 className="modal-pr-title">Checker --- Mobile view React Application</h1>
             <p className="pr-description">
               A tracker that tracks the daily activity of a user.The application consumes an
               external API from a back-end I built with ruby on rails.
               This application helps you to be aware of what activities you spend
               much time on and then gives you feed back on total number of hours you
               have spent for each category of your normal day-to-day life
               This is a React and Redux application
             </p>
             <div className="stacks">
               <span className="stackItem">React.js - </span>
               <span className="stackItem">Ruby on Rails -</span>
               <span className="stackItem">Semantic UI - </span>
               <span className="stackItem">Bootstap - </span>
               <span className="stackItem">Redux - </span>
               <span className="stackItem">Heroku</span>
             </div>
             <div className="links-wrapper">
               <Link className="lk" to="https://github.com/Rashad-Muntar/checker.git" target="_blank"><GitHubIcon /></Link>
               <Link className="lk" to="https://quiet-citadel-65357.herokuapp.com/" target="_blank"><AltRouteOutlinedIcon /></Link>
             </div>
           </div>
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
           <div className="pr-desc-wrapper">
             <h1 className="modal-pr-title">Weather Guide --- Desktop view weather Application</h1>
             <p className="pr-description">
               This application was built using HTML5, CSS3, vanilla Javascript and webpack
               This application
               fetches the current weather of a city or at any desired location.
               User is able to toggle between temperature Units. This application
               fetches the current
               weather of a city or users any desired location. User is
               able to toggle between temperature Units
             </p>
             <div className="stacks">
               <span className="stackItem">HTML5 - </span>
               <span className="stackItem">CSS3 -</span>
               <span className="stackItem">Javascript </span>
               <span className="stackItem">Webpack </span>
               <span className="stackItem">Github Pages </span>
             </div>
             <div className="links-wrapper">
               <Link className="lk" to="https://github.com/Rashad-Muntar/weather--app.git" target="_blank"><GitHubIcon /></Link>
               <Link className="lk" to="https://rashad-muntar.github.io/weather--app/" target="_blank"><AltRouteOutlinedIcon /></Link>
             </div>
           </div>
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
           <div className="pr-desc-wrapper">
             <h1 className="modal-pr-title">Crypto List --- Responsive cryptocurrency prices Application</h1>
             <p className="pr-description">
               This application fetches real-time data of the top 16 cryptocurrencies.
               The user is able to search for cryptocurrency by its name in the search form.
               The user can also go to the details page of each cryptocurrency by
               clicking on the listed cryptocurrency on the homepage.
             </p>
             <div className="stacks">
               <span className="stackItem">React.js - </span>
               <span className="stackItem">Redux -</span>
               <span className="stackItem">Coinstat API - </span>
               <span className="stackItem">Semantic UI - </span>
               <span className="stackItem">Heroku </span>
             </div>
             <div className="links-wrapper">
               <Link className="lk" to="https://github.com/Rashad-Muntar/Crypt-barter.git" target="_blank"><GitHubIcon /></Link>
               <Link className="lk" to="https://mysterious-coast-59330.herokuapp.com/" target="_blank"><AltRouteOutlinedIcon /></Link>
             </div>
           </div>
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
           <div className="pr-desc-wrapper">
             <h1 className="modal-pr-title">Crypto List --- Responsive cryptocurrency prices Application</h1>
             <p className="pr-description">
               This a rails app that allow users to signup and login.
               The signed up user can create an
               article which is associated to the users account and it is associated to a category.
               User is able to vote an article and user is able to bookmark the article as well.
               Built with Ruby on Rails 6.
             </p>
             <div className="stacks">
               <span className="stackItem">Ruby on Rails - </span>
               <span className="stackItem">Postresgl -</span>
               <span className="stackItem">Cloudinary - </span>
               <span className="stackItem">Sass - </span>
               <span className="stackItem">Heroku </span>
             </div>
             <div className="links-wrapper">
               <Link className="lk" to="https://github.com/Rashad-Muntar/LifeStye-Article.git" target="_blank"><GitHubIcon /></Link>
               <Link className="lk" to="https://fierce-fortress-27372.herokuapp.com/" target="_blank"><AltRouteOutlinedIcon /></Link>
             </div>
           </div>
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
