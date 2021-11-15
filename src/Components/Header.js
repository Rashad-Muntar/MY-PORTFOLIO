import { useRef, useEffect } from 'react';
import '../Assets/Styles/Header.scss';
import { gsap } from 'gsap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Header = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.my-name'), {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(q('.my-job-title'), {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(q('.social-icon'), { opacity: 1, stagger: 0.2 });
  });

  return (
    <section className="header-wrapper" ref={el} id="header">
      <div className="name-wrapper">
        <span className="my-name">RASHAD MUNTAR</span>
      </div>

      <div className="my-job-title-wrapper">
        <div className="my-job-title">FULL-STACK DEVELOPER</div>
      </div>

      <div className="social">
        <a aria-label="linkedin" className="social-icon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rashad-muntar/"><LinkedInIcon fontSize="large" /></a>
        <a aria-label="github" className="social-icon" rel="noreferrer" target="_blank" href="https://github.com/Rashad-Muntar"><GitHubIcon fontSize="large" /></a>
        <a aria-label="twitter" className="social-icon" rel="noreferrer" target="_blank" href="https://twitter.com/RashadToure"><TwitterIcon fontSize="large" /></a>
        <a aria-label="twitter" className="social-icon" rel="noreferrer" href="mailto:rashadmuntar5@gmail.com"><EmailOutlinedIcon fontSize="large" /></a>
      </div>
    </section>
  );
};

export default Header;
