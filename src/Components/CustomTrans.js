import { gsap } from 'gsap';
import barba from '@barba/core';
import { useEffect } from 'react';

const CustomJs = () => {
  useEffect(() => {
    barba.init({
      transitions: [{
        name: 'opacitytrans',
        sync: true,
        leave(data) {
          return gsap.to(data.current.container, { duration: 1, opacity: 0 });
        },
        enter(data) {
          return gsap.from(data.next.container, { opacity: 0, delay: 1, duration: 1 });
        },
      }],
    });
  });
  return null;
};

export default CustomJs;
