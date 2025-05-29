import { useDispatch, useSelector } from "react-redux"
import './Lunch.css';
import { addtocart } from "./Store";
import FloatingScrollButtons  from './ScrollToTop';


function Lunch(){
     const dispatch=useDispatch();
    const handleAddtocart=(product=>{
        dispatch(addtocart(product));
    })
    const l=useSelector(state=> state.products.Lunch);
    const item=l.map((product,index)=>(
        <li key={index} className="lunch-item">
             <img src={`images/${product.image}`} alt={product.name} width="100"/>
      <span>  {product.name} -{product.price} </span>
      
                <button onClick={()=>handleAddtocart(product)}>+</button>

        </li>
        ));
    return(
        <>
        <div className="lunch-container">
            <div className="lunch-title-wrapper">
      <h1 className="lunch-title">🍽️ Enjoy Your Delicious Lunch Menu 🍛</h1> </div>
      <ul className="lunch-list">{item}</ul>
    </div>       <FloatingScrollButtons />

        </>
    )
} export default Lunch;