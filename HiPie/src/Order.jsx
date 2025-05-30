import { useSelector, useDispatch } from "react-redux";
import { clearcart } from "./Store"; // import clearcart action
import { addorder } from "./Store";  // import addorder action
import "./Order.css";

function Order() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Create order object
    const newOrder = {
      id: `ORD-${Date.now()}`, // simple unique ID based on timestamp
      items: [...cart],
      total,
      date: new Date().toISOString()
    };

    // Dispatch order to store
    dispatch(addorder(newOrder));
    dispatch(clearcart());  // clear the cart after order is placed

    alert(`🎉 Order placed successfully! Your Order ID: ${newOrder.id}`);
  };

  return (
    <div className="order-container">
      <h1>🧾 Order Summary</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some items to proceed with your order.</p>
      ) : (
        <>
          <ul className="order-items">
            {cart.map((item, index) => (
              <li key={index} className="order-item">
<img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="order-total">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button onClick={placeOrder}>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
