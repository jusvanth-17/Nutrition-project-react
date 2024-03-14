import './App.css';
import { Blog } from './components/Blog';
import { Route, Routes } from 'react-router-dom';
import { Fruits } from './components/Fruits';
import { Nuts } from './components/Nuts';
import Vegetables from './components/Vegetable';
import Meats from './components/Meat';
import Food from './components/Food';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/fruits" element={<Fruits/>}/>
        <Route path="/vegetables" element={<Vegetables/>}/>
        <Route path="/nuts" element={<Nuts/>}/>
        <Route path="/meat" element={<Meats/>}/>

      </Routes> */}
      <Food/>
    </div>
  );
}

export default App;
