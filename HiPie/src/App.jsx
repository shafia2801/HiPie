import Home from "./Home";
import './App.css';
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
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
  return(
   <Router>
    <header className="navbar">
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/Breakfast'>Breakfast</Link> </li>
          <li> <Link to='/Lunch'>Lunch</Link> </li>
          <li> <Link to='/Dinner'>Dinner</Link> </li>
          <li> <Link to='/About'>About</Link> </li>
          <li> <Link to='/Contact'>Contact</Link> </li>
           <li> <Link to='/Cart'>Cart{totalitems}</Link> </li>
                     <li> <Link to='/OrderHistory'>Orders</Link> </li>


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