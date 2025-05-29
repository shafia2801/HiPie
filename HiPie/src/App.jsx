import Home from "./Home";
import './App.css';
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import React, { useState } from 'react';
import About from "./About";
import Contact from "./Contact";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import Order from "./Order";
import OrderHistory from "./OrderHistory";
function App(){
  const cart=useSelector((state)=>state.cart);
  const totalitems=cart.reduce((sum,Item) => sum+Item.quantity,0);

    const [menuOpen, setMenuOpen] = useState(false);
const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return(
   <Router>
   <header className="navbar">
        <nav>
          <div className="brand">HiPie</div>

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}
          >
            &#9776;
          </div>

          <ul className={menuOpen ? "show" : ""}>

            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/Breakfast" onClick={handleLinkClick}>Breakfast</Link></li>
            <li><Link to="/Lunch" onClick={handleLinkClick}>Lunch</Link></li>
            <li><Link to="/Dinner" onClick={handleLinkClick}>Dinner</Link></li>
            <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/Cart" onClick={handleLinkClick}>Cart<span className="cart-count">({totalitems})</span></Link></li>
            <li><Link to="/OrderHistory" onClick={handleLinkClick}>Orders</Link></li>
          </ul>
        </nav>
      </header>
    <main>
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route  path='/About' element={<About/>}/>
        <Route  path='/Contact' element={<Contact/>}/>
         <Route  path='/Breakfast' element={<Breakfast/>}/>
          <Route  path='/Lunch' element={<Lunch/>}/>
          <Route  path='/Dinner' element={<Dinner/>}/>
           <Route  path='/Cart' element={<Cart/>}/>
           <Route  path='/Order' element={<Order/>}/>
                      <Route  path='/OrderHistory' element={<OrderHistory/>}/>


      </Routes>
    </main>
   </Router>
  )
} export default App;