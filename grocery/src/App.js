import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './page/Home';
import About from './page/About';
import Shop from './page/Shop';
import Cart from './page/CartOrder';

import Contactus from './page/Contactus';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
     
        <Route path="/contactus" element={<Contactus />} />
        
      </Routes>
    </div>
  );
}

export default App;
