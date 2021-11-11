import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../Assets/Styles/Menu.scss';
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ showMenu, hideMenu }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  const hideMenuHandler = () => {
    tl.current = gsap.timeline()
      .to(q('.menu-link'), {
        opacity: 0,
        duration: 0.5,
        ease: 'bounce.out',
        stagger: 0.05,
      })
      .to(q('.slide'), {
        y: '-100%',
        duration: 0.5,
        ease: 'power2.inOut',
        stagger: 0.2,
      });
    setTimeout(() => {
      hideMenu(false);
    }, 1500);
  };

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.slide'), {
        y: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
        stagger: 0.2,
      })
      .to(q('.menu-link'), {
        opacity: 1,
        duration: 1,
        ease: 'bounce.out',
        stagger: 0.05,
      });
  }, [showMenu]);

  return (

    showMenu
        && (
        <div className="menu-wrapper" ref={el}>
          <div className="slide slide1" />
          <div className="slide slide2" />
          <div className="slide slide3" />
          <div className="slide slide4" />

          <button type="button" className="closeBtn" onClick={hideMenuHandler}>
            <CloseIcon fontSize="large" />
          </button>

          <div className="menu-items">
            <a className="menu-link" onClick={hideMenuHandler} href="#header">HOME</a>
            <a className="menu-link" onClick={hideMenuHandler} href="#projects">PROJECTS</a>
            <a className="menu-link" onClick={hideMenuHandler} href="#aboutme">ABOUT ME</a>
            <a className="menu-link" onClick={hideMenuHandler} href="#contact">CONTACT</a>
          </div>
        </div>
        )
  );
};

Menu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  hideMenu: PropTypes.func.isRequired,
};

export default Menu;
