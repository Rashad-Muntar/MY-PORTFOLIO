import React, { useState } from 'react';
import '../Assets/Styles/App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './Home';
import Projectdetail from './Detail';
import Navbar from './Navbar';
import Menu from './Menu';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const menuShowHandler = () => {
    setShowMenu(true);
  };

  return (
    <Router>
      <Navbar menuShowHandler={menuShowHandler} />
      <Menu showMenu={showMenu} hideMenu={setShowMenu} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projectdetail} exact />
      </Switch>
    </Router>
  );
}

export default App;
