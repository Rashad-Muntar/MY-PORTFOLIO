// import React, { useState } from 'react';
// import Navbar from './Navbar';
import Header from './Header';
// import Menu from './Menu';
import About from './Aboutme';
import Projects from './Projects';
import Stacks from './Stacks';
import Contact from './Contact';

const Home = () => (
  <>
    <main className="main-wrapper">

      <Header />

      <About />
      <Projects />
      <Stacks />
      <Contact />
    </main>
  </>
);
export default Home;
