import React from 'react'
import './css/blog1.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const Blog = () => {
  return (
    <div>
         <div className="conb">
        <div className="c1">
           <div ><Link className="text" to="/fruits">Click here</Link></div>
        </div>
        <div className="c2">
                <h1 className="bh1">Fruits</h1>
            <p>
                Fruits are the mature ovaries of flowering plants, typically containing seeds. They develop from fertilized flowers and 
                serve as a means for the plant to disperse its seeds. Fruits come in various forms, such as berries, drupes, and pomes, 
                and they are often characterized by their sweet or savory taste. In addition to being a source of nutrition for humans 
                and animals, fruits play a crucial role in the reproductive cycle of plants, facilitating the spread and germination of 
                seeds.
                </p>
        </div>
    </div>
    <br></br>
    <div className="conb1">
        <div className="c3">
            <h1 className="bh1">Vegetables</h1>
            <p>Vegetables are edible plant parts that are cultivated for human consumption. These plant-based foods are rich in 
                essential nutrients, including vitamins, minerals, and fiber. Vegetables come in a variety of forms, such as leafy 
                greens, roots, tubers, bulbs, and fruits, and they play a crucial role in maintaining a balanced and nutritious diet. 
                Common examples include spinach, carrots, potatoes, onions, and tomatoes.</p>
        </div>
        <div className="c4">
            <div ><Link className="text" to='/vegetables'>Click here</Link></div>
        </div>
    </div>
    <br></br><br></br>

    <div className="conb3">
        <div className="c5">
            <div ><Link className="text" to='/nuts'>Click here</Link></div>
        </div>
        <div className="c6">
                <h1 className="bh1">Nuts</h1>
            <p>Nuts are hard-shelled, edible seeds typically found within the fruit of certain plants. They are rich in healthy fats, 
                proteins, vitamins, and minerals. Common examples include almonds, walnuts, and cashews. Nuts are versatile and consumed 
                as snacks, in cooking, or as ingredients in various dishes. While botanical nuts meet specific criteria, culinary usage 
                often includes a broader range of seeds and fruits.</p>
        </div>
    </div>

    <br></br>
    <br></br>

    <div className="conb4">
        <div className="c7">
            <h1 className="bh1">Meats</h1>
            <p>Meat is the flesh of animals, typically consumed as food by humans. It is a primary source of protein and essential 
                nutrients, with varieties including beef, poultry, pork, and lamb. Meat can be prepared through cooking methods such 
                as grilling, roasting, or boiling, and it is a significant component of various cuisines worldwide. The type and cut 
                of meat influence its taste, texture, and nutritional content.</p>
        </div>
        <div className="c8">
            <div ><Link className="text" to='/meat'>Click here</Link></div>
        </div>
    </div>
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
