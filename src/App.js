// import logo from './logo.svg';
// import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Home } from './component/Home';
import { About } from './component/About';
import { Navbar } from './component/Navbar';
import { Service } from './component/Service';
import { Product } from './component/Product';
import { Users } from './component/Users';
import {Most} from './component/Most';
import {New} from './component/New';
import { Userdel } from './component/Userdel';
import { Nomatch } from './component/Nomatch';
import { Order } from './component/Order';
import { Profile } from './component/Profile';
import { Login } from './component/Login';
import {Signup} from './component/Signup';
import { Auth } from './component/Auth';
import {Protected} from './component/Protected'
import BMICalculator from './BMICalculator';
import { Fruits } from './component/Fruits';
import Vegetables from './component/Vegetable';
import { Nuts } from './component/Nuts';
import Meats from './component/Meat';
// import { Food } from './component/Food';
import Food from './component/Food';
import CalorieCalculator from './CalorieCalculator';
function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/food' element={<Protected>
          <Food/>
        </Protected>}/>
        <Route path='/*' element={<Nomatch/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/bmr'  element={<Protected><CalorieCalculator/></Protected>} />
        <Route path='/product' element={<Product/>}>
          <Route index element={<Most/>}/>
          <Route path = 'most' element={<Most/>}/>
          <Route path = 'new' element={<New/>}/>
        </Route>

        <Route path="/fruits" element={<Fruits/>}/>
        <Route path="/vegetables" element={<Vegetables/>}/>
        <Route path="/nuts" element={<Nuts/>}/>
        <Route path="/meat" element={<Meats/>}/>

        <Route path='/users' element={<Protected>
          <Users/>
        </Protected>}>
          <Route path=':userId' element={<Userdel/>}/>
          </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/bmi' element={<BMICalculator/>}/>
        <Route path='/profile' element={<Protected><Profile/></Protected>
          
      }/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;
