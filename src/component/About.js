import React from 'react'
import './css/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const About = () => {
  return (
    <div>
        <section className="a"><h2 style={{color:"black"}}>About the Company</h2 >
    <p>Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market, our nutritional data is curated from verified, accurate sources. We aim to provide a complete solution – no matter what diet you choose to be on.
        
        Our CEO, Aaron Davidson, built Cronometer as a side project in 2005. He was following the CRON diet (Calorie Restriction with Optimal Nutrition) and being the nutrition nerd/software developer that he is, decided to build an app to track his diet. Thus, Cronometer was born. It was several years later before he came to the conclusion that maybe he was onto something and quit his six-figure corporate job to focus on improving Cronometer.
        
        There are now over 8 million users who are happy he did.
        
        Cronometer's success has hinged entirely on positive word-of-mouth from its users. The company is still – and plans to continue being – a bootstrap startup to this day.
    
        </p>
    </section>
    <br></br>
    <section className="b"><h2 style={{color:"black"}}>Why we created this?</h2 >
    <p>While our staff spans the globe our headquarters is based in the small-town of Revelstoke, British Columbia, Canada. Revelstoke is a health-centric mountain town brimming with endless options for staying active and a growing tech community – the perfect combination to call home.
    
        We are an eclectic mix of web developers, designers, nutrition scientists, business majors and personal trainers brought together by a love of nutrition. While our company has grown our mission and values have remained the same; we believe full spectrum nutrition is the best way to understand your diet’s effect on your health. We also believe in empowering everyone by ensuring they have access to accurate and comprehensive data to make informed decisions.
        
        Our goal is to build the best software for people and professionals to manage their nutrition. And we have the passion to make that happen; amazing data paired with awesome customer support truly are the Cronometer difference.
        
        If you have interest in your personal nutrition or working with your client’s nutrition check us out!
        
        Have questions? We would love to hear from you. Email us at: support@cronometer.com</p>
    </section>
    <br></br>
    <br></br>
  <section className="c"><h2 style={{color:"black"}}>Who we are</h2 >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, nisi, voluptas aperiam, odio voluptatibus sapiente ab laborum sunt officia velit quam consequatur repellat sed ducimus inventore porro accusamus mollitia laboriosam.
    </p>
    </section>
    <br></br>
    
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
