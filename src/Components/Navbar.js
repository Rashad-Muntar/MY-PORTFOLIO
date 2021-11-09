import DehazeIcon from '@mui/icons-material/Dehaze';
import PropTypes from 'prop-types';
import '../Assets/Styles/Navbar.css';

const Navbar = ({ menuShowHandler }) => (
  <nav>
    <div className="nav-content-wrapper">
      <h3>RASH</h3>
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
