import { useEffect, useRef } from 'react';
import '../Assets/Styles/Contact.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.header-title'), {
        marginLeft: '300px',
        duration: 2,
        ease: 'sine.in',
        scrollTrigger: {
          trigger: '.contact-wrapper',
          start: 'top 100%',
          scrub: 1,
        },
      });
  });

  return (
    <section className="contact-wrapper" id="contact" ref={el}>
      <div className="inner-content-wrapper">
        <h1 className="header-title"> CONTACT ME </h1>
        <p className="cta-text">
          Looking for a great developer? let schedule a ZOOM chat or send me
          an email or use the social media links provided.
          I will gladly respond to you as soon as possible
        </p>
        <a href="3" className="my-email">
          <span className="email-span">rashadmuntar5</span>
          @gmail.com
        </a>
      </div>
      <div className="socials-wrapper">
        <p className="socials-title">Socials</p>
        <a className="contact-social" aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rashad-muntar/"><LinkedInIcon /></a>
        <a className="contact-social" aria-label="linkedin" rel="noreferrer" target="_blank" href="https://github.com/Rashad-Muntar"><GitHubIcon /></a>
        <a className="contact-social" aria-label="linkedin" rel="noreferrer" target="_blank" href="https://twitter.com/RashadToure"><TwitterIcon /></a>
      </div>
    </section>
  );
};

export default Contact;
