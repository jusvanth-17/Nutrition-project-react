import React, { useState } from 'react';
import './component/css/Calorie.css'
function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      throw new Error("Gender should be 'male' or 'female'");
    }
    setCalories(bmr);
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input style={{width:'10%',marginTop:'10px'}} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input style={{width:'10%',marginTop:'10px'}}  type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Age (years):
          <input style={{width:'10%',marginTop:'10px'}} type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <button style={{width:'10%',marginTop:'5px'}}onClick={calculateCalories}>Calculate Calories</button>
      {calories !== null && <p>Basal Metabolic Rate (BMR): {calories.toFixed(2)} calories/day</p>}
    </div>
  );
}

export default CalorieCalculator;
