import React from 'react';
import '../css/vegpage.css';
import chicken from "../images/chicken.jpg";
import salmon from "../images/salmon.jpg";
import leanBeef from "../images/lean.jpg";
import turkey from "../images/Turkey.jpg";
import porkLoin from "../images/pork-loin.jpg";
import lamb from "../images/lamb.jpg";
import groundChicken from "../images/Ground-Chicken.jpg";
import tuna from "../images/Tuna.jpeg";
import mutton from "../images/Mutton.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Meats = () => {
  return (
    <div>
      <h1 id="h1">Meats</h1>
      <div className="fruitspage1">
        <div className="card">
          <img src={chicken} alt="Chicken" style={{ width: '300px', height: '300px' }} />
          <h1>Chicken Breast(165 calories)</h1>
          <p>Chicken breast is a lean cut of poultry with a mild flavor.
            High in protein, low in fat, and a good source of vitamins and minerals.</p>
        </div>
        <br />

        <div className="card">
          <img src={salmon} alt="Salmon" style={{ width: '300px', height: '300px' }} />
          <h1>Salmon(206 calories)</h1>
          <p>Salmon is a fatty fish with a rich, flavorful taste.
            High in omega-3 fatty acids, protein, and an excellent source of vitamin D.</p>
        </div>
        <br />

        <div className="card">
          <img src={leanBeef} alt="Lean Beef" style={{ width: '300px', height: '300px' }} />
          <h1>Lean Beef(250 calories)</h1>
          <p>Lean beef, such as sirloin or tenderloin, is a red meat option.
            High in protein, iron, zinc, and vitamin B12.</p>
        </div>
        <br />

        <div className="card">
          <img src={turkey} alt="Turkey" style={{ width: '300px', height: '300px' }} />
          <h1>Turkey(135 calories)</h1>
          <p>Turkey is a versatile poultry meat with a mild taste.
            Low in fat, a good source of protein, and contains vitamins and minerals.</p>
        </div>
        <br />

        <div className="card">
          <img src={porkLoin} alt="Pork Loin" style={{ width: '300px', height: '300px' }} />
          <h1>Pork Loin(143 Calories)</h1>
          <p>Pork loin is a lean cut from the back of the pig.
            Rich in protein, B-vitamins, and a good source of minerals like iron and zinc.</p>
        </div>
        <br />

        <div className="card">
          <img src={lamb} alt="Lamb" style={{ width: '300px', height: '300px' }} />
          <h1>Lamb(250 Calories)</h1>
          <p>Lamb is a red meat with a distinct flavor.
            High in protein, iron, zinc, and B-vitamins.</p>
        </div>
        <br />

        <div className="card">
          <img src={groundChicken} alt="Ground Chicken" style={{ width: '300px', height: '300px' }} />
          <h1>Ground Chicken (165 Calories)</h1>
          <p>Ground chicken is minced chicken meat.
            Leaner than ground beef, providing protein and various vitamins and minerals.</p>
        </div>
        <br />

        <div className="card">
          <img src={tuna} alt="Tuna" style={{ width: '300px', height: '300px' }} />
          <h1>Tuna(144 Calories)</h1>
          <p>Tuna is a popular fish with a meaty texture.
            A good source of protein, omega-3 fatty acids, and various vitamins and minerals.</p>
        </div>
        <br />

        <div className="card">
          <img src={mutton} alt="Mutton" style={{ width: '300px', height: '300px' }} />
          <h1>Mutton(143 Calories)</h1>
          <p>Contains B-vitamins, particularly B12 and niacin.
            Tender and flavorful red meat often used in curries and biryanis.</p>
        </div>
      </div>
      <footer>
        <h1 id="bf">Contact us</h1>
        <div className="footer">
        <div className="foot1"> <FontAwesomeIcon icon={faFacebook} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faInstagram} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faTwitterSquare} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faYoutube} /> </div>
        </div>
        <h3 id="bf">All copyright are reserved@2024</h3>
      </footer>
    </div>
  );
}

export default Meats;
