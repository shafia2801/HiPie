import {useDispatch, useSelector } from "react-redux"
import './Dinner.css';
import { addtocart } from "./Store";
import FloatingScrollButtons  from './ScrollToTop';


function Dinner(){
      const dispatch=useDispatch();
    const handleAddtocart=(product=>{
        dispatch(addtocart(product));
    })
    const l=useSelector(state=> state.products.Dinner);
    const item=l.map((product,index)=>(
        <li key={index} className="dinner-item">
             <img src={`images/${product.image}`} alt={product.name} width="100"/>
      <span>  {product.name} -{product.price} </span>
         <button onClick={()=>handleAddtocart(product)}>+</button>
        </li>
        ));
    return(
        <>
        <div className="dinner-container">
                        <div className="dinner-title-wrapper">

     <h1 className="dinner-title">🌙 Savour Your Dinner Moments 🍽️</h1>
     </div> <ul className="dinner-list">{item}</ul>
    </div>
          <FloatingScrollButtons />

        </>
    )
} export default Dinner;