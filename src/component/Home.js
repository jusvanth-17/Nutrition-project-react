import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import imgp1 from '../component/img/imgp1.png'
import imgp2 from '../component/img/imgp2.png'
import imgp3 from '../component/img/imgp3.png'
import imgp4 from '../component/img/imgp4.png'
import imgp5 from '../component/img/imgp5.png'
import imgp6 from '../component/img/imgp6.png'
import fruit from '../component/img/fruit.jpeg'
import veg2 from '../component/img/veg2.jpeg'
import nuts2 from '../component/img/nuts2.jpeg'
import meat from '../component/img/meat.jpg'
import './css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';


export const Home = () => {
    const navigate=useNavigate()
  return (
    <div>   

<div className="fram2">
<div className="f1">
   <p>Eat smarter.</p>
   <p>Live better.</p>
   <p>Track your diet, exercise, and<br></br> health data.</p><br></br>
   <Link to="/signup"><button id="btn1" >Sign Up</button></Link>
</div>
</div>
<br></br>
<div className="fr3">
<h1>Develop healthy habits</h1>
<p>Count your calories, ensure you're meeting nutrient<br></br> targets, and see your progress over time.</p>
<div className="fram3">
<div className="p1">
   <img src={imgp1}/>
   <h1 id="p1">Track up to 84 nutrients and other compounds</h1>
   <p className='para'>Log your meals and track all your macro<br></br> and micronutrients.</p>
</div>
<div className="p1">
   <img src={imgp2}/>
   <h1 id="p1">Log meals, exercise and health metrics</h1>
   <p className='para'>Plus, you can create custom foods, <br></br>recipes, exercises and metrics.</p>

</div>
<div className="p1">
   <img src={imgp3}/>
   <h1 id="p1">Get valuable health reports and charts</h1>
   <p className='para'>Learn how nutrients and metrics <br></br>correlate over time.</p>
</div>
<div className="p1"><img src={imgp4}/>
   <h1 id="p1">Custom diet settings</h1>
   <p className='para'>Set weight, macro and nutrient targets<br></br> to meet your goals.</p>
   </div>
<div className="p1"><img src={imgp5}/>
   <h1 id="p1">Fasting timer</h1>
   <p className='para'>Track your intermittent fasts and see<br></br> their effect over time.</p>
   </div>
<div className="p1"><img src={imgp6}/>
   <h1 id="p1">Diet support</h1>
   <p className='para'>Whether you’re Keto, Vegan, or on one <br></br>recommended by your doctor.</p>
   </div>
</div>
</div>
<div className="card">
<div className="flip-card">
<div className="flip-card-inner">
 <div className="flip-card-front">
   <img className='flip-img' src={fruit}  width={300} height={300}/>
 </div>
 <div className="flip-card-back">
   <h1 id="fbf">Fruits</h1>
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
 <img className='flip-img' src={veg2}  width={300} height={300}/>
 </div>
 <div className="flip-card-back">
   <h1 id="fbf">Vegetable</h1> 
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
 <img className='flip-img' src={nuts2}  width={300} height={300}/>
 </div>
 <div className="flip-card-back">
   <h1 id="fbf">Nuts</h1> 
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
 <img className='flip-img' src={meat}  width={300} height={300}/>
 </div>
 <div className="flip-card-back">
   <h1 id="fbf">Meat</h1> 
   <p className="par1">
       <i> Meat is animal flesh consumed as food, rich in 
           proteins, vitamins, and minerals, often prepared 
           through various cooking methods.</i></p>
 </div>
</div>
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
  )
}
