import { useDispatch, useSelector } from "react-redux";
import './Cart.css';
import { increment,decrement, remove } from "./Store";
import { Link } from "react-router-dom";

function Cart() {
    const dispatch=useDispatch();
  const cart = useSelector((state) => state.cart);
     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return ( 
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="empty-message">🛒 Your cart is empty</p>
      ) : (
        <>
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item" style={{ animationDelay: `${index * 0.1}s` }}>
<img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.name} />
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price}</div>
              <p>quantity:{item.quantity}</p>
              <button onClick={()=> dispatch(increment(item))}>+</button>
              <button onClick={()=> dispatch(decrement(item))}>-</button>
              <button onClick={() => dispatch(remove(item))}>x</button>
            </li>
          ))}
        </ul>
      <div className="cart-footer">
            <h2>Total: ${total.toFixed(2)}</h2>
            <Link to="/order">
              <button className="order-button">Proceed to Order</button>
            </Link>
          </div>
          </>
      )}
    </div>
    
  );
}

export default Cart;
