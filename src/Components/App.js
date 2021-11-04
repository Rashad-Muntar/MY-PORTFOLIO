import { useState } from 'react';
import '../Assets/Styles/App.css';
import Navbar from './Navbar';
import Header from './Header'
import Menu from './Menu'
import About from './Aboutme';
import Projects from './Projects';
import Stacks from './Stacks';

function App() {

  const [showMenu, setShowMenu] = useState(false)
  
  const menuShowHandler = () => {
    setShowMenu(true)
    console.log("Menu is clicked")
  }

  return (
      <main className="main-wrapper">
        <Navbar menuShowHandler={menuShowHandler}/>
        <Header />
        <Menu showMenu={showMenu} hideMenu={setShowMenu}/>
        <About />
        <Projects />
        <Stacks />
      </main>
  );
}

export default App;
