import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Assets/Styles/Navbar.scss';

const Navbar = ({ menuShowHandler }) => (
  <nav>
    <div className="nav-content-wrapper">
      <Link to="/" className="logo">RASH</Link>
      <div className="menuHamburger">
        <DehazeIcon fontSize="large" onClick={menuShowHandler} />
      </div>

    </div>
  </nav>
);

Navbar.propTypes = {
  menuShowHandler: PropTypes.func.isRequired,
};

export default Navbar;
