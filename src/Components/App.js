import { useState } from 'react';
import '../Assets/Styles/App.css';
import Navbar from './Navbar';
import Header from './Header'
import Menu from './Menu'

function App() {

  const [showMenu, setShowMenu] = useState(false)
  
  const menuShowHandler = () => {
    setShowMenu(true)
    console.log("Menu is clicked")
  }

  // const closeMenuHandler = () => {
  //   setShowMenu(false)
  // }

  return (
      <main className="main-wrapper">
        <Navbar menuShowHandler={menuShowHandler}/>
        <Header />
        <Menu showMenu={showMenu} hideMenu={setShowMenu}/>
      </main>
  );
}

export default App;
