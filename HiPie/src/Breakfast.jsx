import { useDispatch, useSelector } from "react-redux"
import './Breakfast.css';
import { addtocart } from "./Store";
import FloatingScrollButtons  from './ScrollToTop';


function Breakfast(){
    const dispatch=useDispatch();
    const handleAddtocart=(product=>{
        dispatch(addtocart(product));
    })
    const bf=useSelector(state=> state.products.Breakfast);
    const item=bf.map((product,index)=>(
        <li key={index} className="breakfast-item">
             <img src={`images/${product.image}`} alt={product.name} width="100"/>
      <span>  {product.name} -{product.price} </span>
         <button onClick={()=>handleAddtocart(product)}>+</button>
        </li>
        ));
    return(
        <>
        <div className="breakfast-container">
     <div className="breakfast-title-wrapper">
  <h1 className="breakfast-title">🍳 Breakfast Menu 🍞</h1>
</div>

      <ul className="breakfast-list">{item}</ul>
    </div>
          <FloatingScrollButtons />

        </>
    )
} export default Breakfast;