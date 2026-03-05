import { useLocation, useNavigate } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h1>Cart</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => navigate("/orders")}>
        Place Order
      </button>
    </div>
  );
}