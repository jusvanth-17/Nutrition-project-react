import './App.css';
import { Blog } from './components/Blog';
import { Route, Routes } from 'react-router-dom';
import { Fruits } from './components/Fruits';
import { Nuts } from './components/Nuts';
import Vegetables from './components/Vegetable';
import Meats from './components/Meat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/fruits" element={<Fruits/>}/>
      </Routes>
    </div>
  );
}

export default App;
