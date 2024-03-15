import React from 'react';
import almond from "../component/img/almond.jpg";
import walnuts from "../component/img/walnuts.jpg";
import peanuts from "../component/img/peanuts.jpg";
import cashew from "../component/img/cashew.jpg";
import pistachio from "../component/img/pistachio.jpg";
import hazelnuts from "../component/img/hazelnuts.jpg";
import brazilian from "../component/img/brazilian.jpg";
import pecans from "../component/img/pecans.jpg";
import dates from "../component/img/dates.jpg";
import './css/nutspage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const Nuts = () => {
  return (
    <div>
      <h1 id="h1">Nuts</h1>
      <div className="fruitspage1">
        <div className="card1">
          <img src={almond} alt="Almonds" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Almonds(160 calories)</h1>
          <p>Almonds are oval-shaped nuts with a crunchy texture and a slightly sweet taste.</p>
        </div>
        <br />

        <div className="card1">
          <img src={walnuts} alt="Walnuts" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Walnuts(185 calories)</h1>
          <p>Walnuts have a distinctive, wrinkled appearance and a rich, earthy flavor. Rich in omega-3 fatty acids, antioxidants, and provide protein and fiber.</p>
        </div>
        <br />

        <div className="card1">
          <img src={peanuts} alt="Peanuts" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Peanuts(160 calories)</h1>
          <p>Peanuts are technically legumes but are often categorized as nuts.</p>
        </div>
        <br />

        <div className="card1">
          <img src={cashew} alt="Cashews" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Cashews(155 calories)</h1>
          <p>Cashews are kidney-shaped nuts with a buttery and sweet flavor. Rich in healthy fats, protein, and a good source of copper and iron.</p>
        </div>
        <br />

        <div className="card1">
          <img src={pistachio} alt="Pistachios" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Pistachios(156 Calories)</h1>
          <p>Pistachios are small, green nuts with a slightly sweet and savory taste.</p>
        </div>
        <br />

        <div className="card1">
          <img src={hazelnuts} alt="Hazelnuts" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Hazelnuts(176 Calories)</h1>
          <p>Hazelnuts, also known as filberts, have a round shape and a sweet, nutty flavor.</p>
        </div>
        <br />

        <div className="card1">
          <img src={brazilian} alt="Brazil Nuts" style={{ width: '300px', height: '300px' }} />
          <h1>Brazil Nuts(186 Calories)</h1>
          <p>Brazil nuts are large, triangular nuts with a rich, creamy taste. </p>
        </div>
        <br />

        <div className="card1">
          <img src={pecans} alt="Pecans" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Pecans(196 Calories)</h1>
          <p>Pecans have a smooth, buttery texture and a sweet, rich flavor. </p>
        </div>
        <br />

        <div className="card1">
          <img src={dates} alt="Dates" style={{ width: '300px', height: '300px' }} />
          <h1 className='ph1'>Dates(282 Calories)</h1>
          <p>Dates, small and sweet with a chewy texture, provide 282 calories per 100 grams. </p>
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