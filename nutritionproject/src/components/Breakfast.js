import React, { useState } from 'react';
import '../css/Food.css'
export const Breakfast = () => {
    const [foods2] = useState([
        {
            name: "Sweet Potato",
            carbs: 26,
            protein: 1.6,
            fat: 0.3,
            calories: 103,
        },
        // Add more foods here
    ]);

    const [selectedFood, setSelectedFood] = useState(null);

    const handleFoodSelect = (event) => {
        const selectedFoodName = event.target.value;
        const selectedFood = foods2.find(food => food.name === selectedFoodName);
        setSelectedFood(selectedFood);
    };

    return (
        <div>
            <h1>Add Dinner</h1>
            <form id="foodForm_dinner">
                <label htmlFor="foodSelect_dinner">Select Food:</label><br /><br />
                <select id="foodSelect_dinner" onChange={handleFoodSelect}>
                    <option value="">Select a food</option>
                    {foods2.map((food, index) => (
                        <option key={index} value={food.name}>{food.name}</option>
                    ))}
                </select><br /><br />
                <input type="submit" value="Add Food" />
            </form>

            <table id="foodTable_dinner">
                <thead>
                    <tr>
                        <th>Food Name</th>
                        <th>Protein (g)</th>
                        <th>Calories</th>
                        <th>Fat (g)</th>
                        <th>Carbs (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedFood && (
                        <tr>
                            <td>{selectedFood.name}</td>
                            <td>{selectedFood.protein}</td>
                            <td>{selectedFood.calories}</td>
                            <td>{selectedFood.fat}</td>
                            <td>{selectedFood.carbs}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Breakfast;
