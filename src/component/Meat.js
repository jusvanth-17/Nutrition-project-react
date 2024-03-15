import React from 'react';
import chicken from "../component/img/chicken.jpg";
import salmon from "../component/img/salmon.jpg";
import leanBeef from "../component/img/lean.jpg";
import turkey from "../component/img/Turkey.jpg";
import porkLoin from "../component/img/pork-loin.jpg";
import lamb from "../component/img/lamb.jpg";
import groundChicken from "../component/img/Ground-Chicken.jpg";
import tuna from "../component/img/Tuna.jpeg";
import mutton from "../component/img/Mutton.jpg";
import './css/fruitpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Meats = () => {
  return (
    <div>
      <h1 id="h1">Meats</h1>
      <div className="fruitspage1">
        <div className="card1">
          <img src={chicken} alt="Chicken" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Chicken Breast(165 calories)</h1>
          <p>Chicken breast is a lean cut of poultry with a mild flavor.
            High in protein, low in fat, and a good source of vitamins and minerals.</p>
        </div>
        <br />

        <div className="card1">
          <img src={salmon} alt="Salmon" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Salmon(206 calories)</h1>
          <p>Salmon is a fatty fish with a rich, flavorful taste.
            High in omega-3 fatty acids, protein, and an excellent source of vitamin D.</p>
        </div>
        <br />

        <div className="card1">
          <img src={leanBeef} alt="Lean Beef" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Lean Beef(250 calories)</h1>
          <p>Lean beef, such as sirloin or tenderloin, is a red meat option.
            High in protein, iron, zinc, and vitamin B12.</p>
        </div>
        <br />

        <div className="card1">
          <img src={turkey} alt="Turkey" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Turkey(135 calories)</h1>
          <p>Turkey is a versatile poultry meat with a mild taste.
            Low in fat, a good source of protein, and contains vitamins and minerals.</p>
        </div>
        <br />

        <div className="card1">
          <img src={porkLoin} alt="Pork Loin" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Pork Loin(143 Calories)</h1>
          <p>Pork loin is a lean cut from the back of the pig.
            Rich in protein, B-vitamins, and a good source of minerals like iron and zinc.</p>
        </div>
        <br />

        <div className="card1">
          <img src={lamb} alt="Lamb" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Lamb(250 Calories)</h1>
          <p>Lamb is a red meat with a distinct flavor.
            High in protein, iron, zinc, and B-vitamins.</p>
        </div>
        <br />

        <div className="card1">
          <img src={groundChicken} alt="Ground Chicken" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Ground Chicken (165 Calories)</h1>
          <p>Ground chicken is minced chicken meat.
            Leaner than ground beef, providing protein and various vitamins and minerals.</p>
        </div>
        <br />

        <div className="card1">
          <img src={tuna} alt="Tuna" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Tuna(144 Calories)</h1>
          <p>Tuna is a popular fish with a meaty texture.
            A good source of protein, omega-3 fatty acids, and various vitamins and minerals.</p>
        </div>
        <br />

        <div className="card1">
          <img src={mutton} alt="Mutton" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Mutton(143 Calories)</h1>
          <p>Contains B-vitamins, particularly B12 and niacin.
            Tender and flavorful red meat often used in curries and biryanis.</p>
        </div>
      </div>
      <footer>
        <h1 id="fbf">Contact us</h1>
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
