import React, { useState } from "react";
import './css/Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Food = ({ name, protein, calories, fat, carbs }) => (
  <tr>
    <td>{name}</td>
    <td>{protein}</td>
    <td>{calories}</td>
    <td>{fat}</td>
    <td>{carbs}</td>
  </tr>
);

const FoodDropdown = ({ foods, onAddFood }) => {
  const [selectedFood, setSelectedFood] = useState("");

  const handleSelectChange = (event) => {
    setSelectedFood(event.target.value);
  };

  const handleAddFood = () => {
    const food = foods.find((f) => f.name === selectedFood);
    if (food) {
      onAddFood(food);
      setSelectedFood("");
    }
  };

  return (
    <div id="s1">
      <select value={selectedFood} onChange={handleSelectChange}>
        <option value="">Select a food</option>
        {foods.map((food) => (
          <option key={food.name} value={food.name}>
            {food.name}
          </option>
        ))}
      </select>
      <button id="b1" onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

const MealTable = ({ title, foods, onAddFood }) => {
  const [mealFoods, setMealFoods] = useState([]);

  const handleAddFood = (food) => {
    setMealFoods([...mealFoods, food]);
    onAddFood(food); // Propagate food addition to App component
  };

  // Calculate total calories for this meal table
  const totalCalories = mealFoods.reduce((total, food) => total + food.calories, 0);

  return (
    <div className="table-align">
      <h1>{title}</h1>
      <FoodDropdown foods={foods} onAddFood={handleAddFood} />
      <table id="t1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Protein (g)</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
          </tr>
        </thead>
        <tbody>
          {mealFoods.map((food, index) => (
            <Food key={index} {...food} />
          ))}
        </tbody>
      </table>
      <p>Total Calories: {totalCalories}</p><br></br>
     
    </div>
  );
};

const App = () => {
  const [totalCalories, setTotalCalories] = useState(0);

  // Update total calories when a new food is added
  const handleAddFood = (food) => {
    setTotalCalories(totalCalories + food.calories);
  };

  const breakfastFoods = [
    { name: "Eggs", protein: 12, calories: 90, fat: 7, carbs: 1 },
    { name: "Bacon", protein: 12, calories: 140, fat: 12, carbs: 1 },
    { name: "Toast", protein: 4, calories: 80, fat: 1, carbs: 15 },
    { name: "Oatmeal", protein: 6, calories: 150, fat: 2.5, carbs: 28 },
    { name: "Fruit Salad", protein: 2, calories: 100, fat: 0, carbs: 25 },
  ];

  const lunchFoods = [
    { name: "Turkey Sandwich", protein: 25, calories: 400, fat: 15, carbs: 50 },
    { name: "Salad", protein: 5, calories: 200, fat: 10, carbs: 20 },
    { name: "Soup", protein: 8, calories: 250, fat: 10, carbs: 30 },
    { name: "Pizza", protein: 15, calories: 600, fat: 25, carbs: 70 },
    { name: "Pasta", protein: 10, calories: 400, fat: 10, carbs: 80 },
  ];

  const dinnerFoods = [
    { name: "Steak", protein: 35, calories: 500, fat: 30, carbs: 0 },
    { name: "Chicken", protein: 30, calories: 350, fat: 15, carbs: 0 },
    { name: "Fish", protein: 25, calories: 250, fat: 10, carbs: 0 },
    { name: "Vegetables", protein: 5, calories: 100, fat: 0, carbs: 20 },
    { name: "Rice", protein: 5, calories: 200, fat: 0, carbs: 45 },
  ];

  return (
    <div>
      <MealTable title="Add Breakfast" foods={breakfastFoods} onAddFood={handleAddFood} />
      <MealTable title="Add Lunch" foods={lunchFoods} onAddFood={handleAddFood} />
      <MealTable title="Add Dinner" foods={dinnerFoods} onAddFood={handleAddFood} />
      <p>Total Calories for all foods: {totalCalories}</p><br></br><br></br>
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
};

export default App;
