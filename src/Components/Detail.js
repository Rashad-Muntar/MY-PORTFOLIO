import '../Assets/Styles/allProjects.css';
import checker from '../Assets/Images/checker1.png';
import pico from '../Assets/Images/pico2.png';
import weather from '../Assets/Images/weather2.png';
import life from '../Assets/Images/life1.png';
import crypto from '../Assets/Images/crypto1.png';

const Allprojects = () => (
  <div className="all-project-wrapper">
    <div className="all-project-content-wtrapper">
      <h1 className="all-pro-header-title">Featured Projects</h1>

      <div className="project-cards-wrapper">
        <h1 className="pro-titles pico">
          Pico Food
          <img src={pico} alt="pico" className="img1 img" />
        </h1>

        <h1 className="pro-titles checker">
          Checker
          <img src={checker} alt="pico" className="img2 img" />
        </h1>

        <h1 className="pro-titles weather">
          Weather
          <img src={weather} alt="pico" className="img3 img" />
        </h1>

        <h1 className="pro-titles crypto">
          Cryplist
          <img src={crypto} alt="pico" className="img4 img" />
        </h1>

        <h1 className="pro-titles life">
          Life Style
          <img src={life} alt="pico" className="img5 img" />
        </h1>
      </div>

    </div>

  </div>
);

export default Allprojects;
