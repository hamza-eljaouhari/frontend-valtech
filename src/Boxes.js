import './Styles.css';
const valtech = require('./assets/valtech.png');
const venice = require('./assets/venice.png');
const berlin = require('./assets/berlin.png');
const barcelona = require('./assets/barcelona.png');
const paris = require('./assets/paris.png');
const amsterdam = require('./assets/amsterdam.png');
const london = require('./assets/london.png');

function Boxes() {
  return (
    <div id="boxes">
        <div className="box single">
            <div className="image-container">
                <img src={valtech} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">FRONT-END</h6>
                    <h4 className="title">valtech_</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="box half">
            <div className="image-container">
                <img src={venice} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">ITALY</h6>
                    <h4 className="title">VENICE</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="box quarter">
            <div className="image-container">
                <img src={berlin} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">GERMANY</h6>
                    <h4 className="title">BERLIN</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="box quarter">
            <div className="image-container">
                <img src={barcelona} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">SPAIN</h6>
                    <h4 className="title">BARELONA</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="box quarter">
            <div className="image-container">
                <img src={paris} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">FRANCE</h6>
                    <h4 className="title">PARIS</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="box quarter">
            <div className="image-container">
                <img src={amsterdam} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">NETHERLANDS</h6>
                    <h4 className="title">AMSTERDAM</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="box half">
            <div className="image-container">
                <img src={london} alt="Sunset Boats"></img>
                <div className="image-text">
                    <h6 className="subtitle">UNITED KINGDOM</h6>
                    <h4 className="title">LONDON</h4>
                    <div className="description">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="explore-button">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Boxes;
