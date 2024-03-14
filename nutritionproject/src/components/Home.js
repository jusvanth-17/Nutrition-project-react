import React from 'react';
import img1 from '../images/imgp1.png';
import img2 from '../images/imgp2.png';
import img3 from '../images/imgp3.png';
import img4 from '../images/imgp4.png';
import img5 from '../images/imgp5.png';
import img6 from '../images/imgp6.png';
import fruit from '../images/fruit.jpeg';
import veg2 from '../images/veg2.jpeg';
import nuts2 from '../images/nuts2.jpeg';
import Meat from '../images/meat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../css/home.css';

export const Home = () => {
  return (
    <div>
        <div className="fram2">
        <div className="f1">
            <p>Eat smarter.</p>
            <p>Live better.</p>
            <p>Track your diet, exercise, and<br></br> health data.</p><br></br>
            <button id="b1">Sign Up</button>
        </div>
    </div>
    <br></br>
    <div className="fr3">
        <h1>Develop healthy habits</h1>
        <p>Count your calories, ensure you're meeting nutrient<br></br> targets, and see your progress over time.</p>
    <div className="fram3">
        <div className="p1">
            <img src={img1}/>
            <p id="p1">Track up to 84 nutrients and other compounds</p>
        </div>
        <div className="p1">
            <img src={img2}/>
            <p id="p1">Log meals, exercise and health metrics</p>
        </div>
        <div className="p1">
            <img src={img3} />
            <p id="p1">Get valuable health reports and charts</p>
        </div>
        <div className="p1"><img src={img4}/>
            <p id="p1">Custom diet settings</p></div>
        <div className="p1"><img src={img5}/>
            <p id="p1">Fasting timer</p></div>
        <div className="p1"><img src={img6}/>
            <p id="p1">Diet support</p></div>
    </div>
    </div>
    <div className="card">
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={fruit} style={{width: "300px", height: "300px"}} />
          </div>
          <div className="flip-card-back">
            <h1>Fruits</h1>
            <p className="par1">
                <i>
                    Fruits are natural, often sweet or tart, seed-bearing 
                    structures that develop from the ovary of a flowering 
                    plant, encompassing a diverse range of delicious and 
                    nutritious options.</i></p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={veg2} style={{width: "300px", height: "300px"}} />
          </div>
          <div className="flip-card-back">
            <h1>Vegetable</h1> 
            <p className="par1">
                <i> Vegetables are edible plants or parts of plants, rich in 
                    nutrients, fiber, and antioxidants, commonly consumed for 
                    their health benefits and culinary versatility.</i></p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={nuts2} style={{width: "300px", height: "300px"}} />
          </div>
          <div className="flip-card-back">
            <h1>Nuts</h1> 
            <p className="par1">
                <i> 
                    Nuts are nutrient-dense, edible seeds or fruits enclosed 
                    in a hard shell, often consumed as a snack or used in 
                    various culinary applications for their rich flavor and 
                    health benefits.</i></p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={Meat} style={{width: "300px", height: "300px"}} />
          </div>
          <div className="flip-card-back">
            <h1>Meat</h1> 
            <p className="par1">
                <i> Meat is animal flesh consumed as food, rich in 
                    proteins, vitamins, and minerals, often prepared 
                    through various cooking methods.</i></p>
          </div>
        </div>
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
