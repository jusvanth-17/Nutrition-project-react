import React from 'react';
import img from "../images/pomegranate.jpg"
import apple from "../images/apple.jpeg";
import bannana from "../images/banana.jpeg";
import orange from "../images/orange4.jpg";
import grapes from "../images/grapes1.jpg";
import strawberry from "../images/strawberry1.jpg";
import pineapple from "../images/pineapple1.jpg";
import watermelon from "../images/watermelon1.jpg";
import mango from "../images/mango1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../css/fruitpage.css'

export const Fruits = () => {
  return (
    <div>
      <h1 id="h1">Fruits</h1>
      <div className="fruitspage1">
        <div className="card">
          <img src={apple} alt="Apple" style={{ width: '300px', height: '300px' }} />
          <h1>Apple(52 calories)</h1>
          <p>They provide dietary fiber, vitamins, and antioxidants, making them a nutritious snack.</p>
        </div>
        <br />

        <div className="card">
          <img src={bannana} alt="Banana" style={{ width: '300px', height: '300px' }} />
          <h1>Banana(89 calories)</h1>
          <p>They are rich in potassium, vitamin C, and provide a quick source of energy.</p>
        </div>
        <br />

        <div className="card">
          <img src={orange} alt="Orange" style={{ width: '300px', height: '300px' }} />
          <h1>Orange(43 calories)</h1>
          <p>The flesh is juicy and sweet, rich in vitamin C and other antioxidants. Oranges are commonly consumed fresh or juiced.</p>
        </div>
        <br />

        <div className="card">
          <img src={grapes} alt="Grapes" style={{ width: '300px', height: '300px' }} />
          <h1>Grapes(69 calories)</h1>
          <p>They grow in clusters and have a sweet or tart taste, depending on the variety.</p>
        </div>
        <br />

        <div className="card">
          <img src={strawberry} alt="Strawberry" style={{ width: '300px', height: '300px' }} />
          <h1>Strawberry(32 Calories)</h1>
          <p>They have a sweet flavor and are high in vitamin C and antioxidants. Strawberries are commonly used in desserts, salads, and as a snack.</p>
        </div>
        <br />

        <div className="card">
          <img src={pineapple} alt="Pineapple" style={{ width: '300px', height: '300px' }} />
          <h1>Pineapple(50 Calories)</h1>
          <p>They are rich in vitamin C, manganese, and enzymes like bromelain. Pineapple is enjoyed fresh, juiced, or as a part of fruit salads.</p>
        </div>
        <br />

        <div className="card">
          <img src={watermelon} alt="Watermelon" style={{ width: '300px', height: '300px' }} />
          <h1>Watermelon(30 Calories)</h1>
          <p>They are refreshing and hydrating, containing vitamins A and C. Watermelon is a popular summertime fruit, often consumed in slices.</p>
        </div>
        <br />

        <div className="card">
          <img src={mango} alt="Mango" style={{ width: '300px', height: '300px' }} />
          <h1>Mango(60 Calories)</h1>
          <p>The flesh is juicy and sweet, rich in vitamins A and C. Mangoes are often eaten fresh, in smoothies, or as part of fruit salads.</p>
        </div>
        <br />

        <div className="card">
          <img src={img} alt="Pomegranate" style={{ width: '300px', height: '300px' }} />
          <h1>Pomegranate(83 Calories)</h1>
          <p>Pomegranate is a vibrant fruit with sweet, juicy arils, providing 83 calories per 100 grams. Rich in antioxidants and vitamin C.</p>
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
  )
}
