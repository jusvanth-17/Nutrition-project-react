import React from 'react';
import almond from "../images/almond.jpg";
import walnuts from "../images/walnuts.jpg";
import peanuts from "../images/peanuts.jpg";
import cashew from "../images/cashew.jpg";
import pistachio from "../images/pistachio.jpg";
import hazelnuts from "../images/hazelnuts.jpg";
import brazilian from "../images/brazilian.jpg";
import pecans from "../images/pecans.jpg";
import dates from "../images/dates.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const Nuts = () => {
  return (
    <div>
      <h1 id="h1">Nuts</h1>
      <div className="fruitspage1">
        <div className="card">
          <img src={almond} alt="Almonds" style={{ width: '300px', height: '300px' }} />
          <h1>Almonds(160 calories)</h1>
          <p>Almonds are oval-shaped nuts with a crunchy texture and a slightly sweet taste. High in healthy monounsaturated fats, protein, vitamin E, and magnesium.</p>
        </div>
        <br />

        <div className="card">
          <img src={walnuts} alt="Walnuts" style={{ width: '300px', height: '300px' }} />
          <h1>Walnuts(185 calories)</h1>
          <p>Walnuts have a distinctive, wrinkled appearance and a rich, earthy flavor. Rich in omega-3 fatty acids, antioxidants, and provide protein and fiber.</p>
        </div>
        <br />

        <div className="card">
          <img src={peanuts} alt="Peanuts" style={{ width: '300px', height: '300px' }} />
          <h1>Peanuts(160 calories)</h1>
          <p>Peanuts are technically legumes but are often categorized as nuts. They have a creamy texture and a slightly salty taste. High in protein, monounsaturated fats, and a good source of niacin and folate.</p>
        </div>
        <br />

        <div className="card">
          <img src={cashew} alt="Cashews" style={{ width: '300px', height: '300px' }} />
          <h1>Cashews(155 calories)</h1>
          <p>Cashews are kidney-shaped nuts with a buttery and sweet flavor. Rich in healthy fats, protein, and a good source of copper and iron.</p>
        </div>
        <br />

        <div className="card">
          <img src={pistachio} alt="Pistachios" style={{ width: '300px', height: '300px' }} />
          <h1>Pistachios(156 Calories)</h1>
          <p>Pistachios are small, green nuts with a slightly sweet and savory taste. High in protein, fiber, and provide essential nutrients like vitamin B6 and potassium.</p>
        </div>
        <br />

        <div className="card">
          <img src={hazelnuts} alt="Hazelnuts" style={{ width: '300px', height: '300px' }} />
          <h1>Hazelnuts(176 Calories)</h1>
          <p>Hazelnuts, also known as filberts, have a round shape and a sweet, nutty flavor. Rich in healthy fats, vitamin E, and a good source of antioxidants.</p>
        </div>
        <br />

        <div className="card">
          <img src={brazilian} alt="Brazil Nuts" style={{ width: '300px', height: '300px' }} />
          <h1>Brazil Nuts(186 Calories)</h1>
          <p>Brazil nuts are large, triangular nuts with a rich, creamy taste. High in selenium, healthy fats, and a good source of magnesium and thiamine.</p>
        </div>
        <br />

        <div className="card">
          <img src={pecans} alt="Pecans" style={{ width: '300px', height: '300px' }} />
          <h1>Pecans(196 Calories)</h1>
          <p>Pecans have a smooth, buttery texture and a sweet, rich flavor. High in healthy fats, antioxidants, and a good source of manganese.</p>
        </div>
        <br />

        <div className="card">
          <img src={dates} alt="Dates" style={{ width: '300px', height: '300px' }} />
          <h1>Dates(282 Calories)</h1>
          <p>Dates, small and sweet with a chewy texture, provide 282 calories per 100 grams. Rich in natural sugars and nutrients, they are commonly enjoyed as a sweet snack or natural sweetener in various dishes.</p>
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