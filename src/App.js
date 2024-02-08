import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

import Menubar from "./Component/Menubar";
import Product from "./Component/SecondPage/Product";
import CartItem from "./Pages/CartItem";


function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product></Product>} />
        <Route path="/cart" element={<CartItem/>} />
        
      </Routes>
    </div>
  );
}

export default App;
