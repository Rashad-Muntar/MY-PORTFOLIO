import { useEffect, useRef } from 'react';
import '../Assets/Styles/Stacks.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Stacks = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.skills-title'), {
        marginLeft: '-50%',
        duration: 5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 60%',
          scrub: 1,
        },
      });
  });
  return (
    <div className="contact" ref={el}>
      <div className="content-wrapper">
        <div className="languages a">
          <p className="tool">Javascript</p>
          <p className="tool">Ruby</p>
          <p className="tool">Ruby on Rails</p>
          <p className="tool">React.js</p>
        </div>

        <div className="librarys a">
          <p className="tool">Bootstrap</p>
          <p className="tool">Material UI</p>
          <p className="tool">GSAP</p>
          <p className="tool">Jest</p>
        </div>

        <div className="tools a">
          <p className="tool">Git</p>
          <p className="tool">Github</p>
          <p className="tool">Rspec</p>
          <p className="tool">Jest</p>
        </div>

        <div className="skills a">
          <p className="tool">Responsive Design</p>
          <p className="tool">Testing & Debugging</p>
          <p className="tool">Application Architecture</p>
          <p className="tool">Interaction Development</p>
        </div>

      </div>

      <h1 className="skills-title">SKILLS</h1>
    </div>
  );
};

export default Stacks;
