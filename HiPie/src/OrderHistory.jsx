import { useSelector } from "react-redux";
import "./OrderHistory.css";

function OrderHistory() {
  const orders = useSelector((state) => state.orders);

  if (orders.length === 0) {
    return (
      <div className="order-history-container">
        <h1>Your Order History</h1>
        <p>You have no past orders yet.</p>
      </div>
    );
  }

  return (
    <div className="order-history-container">
      <h1>Your Order History</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-history-card">
          <h2>Order ID: {order.id}</h2>
          <p>Date: {new Date(order.date).toLocaleString()}</p>
          <ul className="order-items">
            {order.items.map((item, idx) => (
              <li key={idx} className="order-item">
                <img src={`images/${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${order.total.toFixed(2)}</h3>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
