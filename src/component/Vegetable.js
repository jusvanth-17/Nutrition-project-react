import React from 'react';
import broccoli from "../component/img/broccoli.jpg";
import carrot from "../component/img/carrot.jpg";
import spinach from "../component/img/spinach.jpg";
import bellPeppers from "../component/img/bell-peppers.jpg";
import tomato from "../component/img/tomatoe.jpg";
import cucumber from "../component/img/cucumber.jpg";
import sweetPotato from "../component/img/sweet-potato.jpg";
import greenPeas from "../component/img/green-peas.jpg";
import pumpkin from "../component/img/pumpkin.jpg";
import './css/vegpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Vegetables = () => {
  return (
    <div>
      <h1 id="h1">Vegetables</h1>
      <div className="fruitspage1">
        <div className="card1">
          <img src={broccoli} alt="Broccoli" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Broccoli(55 calories)</h1>
          <p>Broccoli is a green cruciferous vegetable with a dense cluster of florets.
            Rich in fiber, vitamins C and K, and a good source of antioxidants.</p>
        </div>
        <br />

        <div className="card1">
          <img src={carrot} alt="Carrot" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Carrot(41 calories)</h1>
          <p>Carrots are orange root vegetables with a sweet, crunchy taste.
            High in beta-carotene, vitamin A, and a good source of fiber.</p>
        </div>
        <br />

        <div className="card1">
          <img src={spinach} alt="Spinach" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Spinach(23 calories)</h1>
          <p>Spinach is a leafy green with dark, nutrient-rich leaves.
            Low in calories and high in iron, vitamins A and K, and antioxidants.</p>
        </div>
        <br />

        <div className="card1">
          <img src={bellPeppers} alt="Bell Peppers" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Bell Pepper(31 calories)</h1>
          <p>Bell peppers come in various colors and have a sweet, crisp flavor.
            Rich in vitamin C, antioxidants, and a good source of fiber.</p>
        </div>
        <br />

        <div className="card1">
          <img src={tomato} alt="Tomato" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Tomato(18 calories)</h1>
          <p>Tomatoes are red, juicy fruits often treated as vegetables in culinary contexts.
            High in vitamin C, potassium, and lycopene, a powerful antioxidant.</p>
        </div>
        <br />

        <div className="card1">
          <img src={cucumber} alt="Cucumber" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Cucumber(16 calories)</h1>
          <p>Cucumbers are cool and refreshing with a high water content.
            Low in calories and a good source of hydration.</p>
        </div>
        <br />

        <div className="card1">
          <img src={sweetPotato} alt="Sweet Potato" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Sweet Potato(86 calories)</h1>
          <p>Sweet potatoes are orange-fleshed tubers with a sweet taste.
            High in fiber, vitamin A, and a good source of complex carbohydrates.</p>
        </div>
        <br />

        <div className="card1">
          <img src={greenPeas} alt="Green Peas" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Green Peas(81 Calories)</h1>
          <p>Green peas are small, vibrant green legumes encased in pods.
            </p>
        </div>
        <br />

        <div className="card1">
          <img src={pumpkin} alt="Pumpkin" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Pumpkin(26 Calories)</h1>
          <p>Pumpkin is a versatile squash with orange flesh, offering a mildly sweet flavor.
            Packed with vitamins, particularly A and C, as well as fiber</p>
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

export default Vegetables;
