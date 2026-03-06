import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  console.log("Cart Items:", cartItems);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.schemeData?.total /* or item.price * item.quantity */,
    0
  );

  return (
    <Layout>
      <div className="section-pad" style={{ paddingTop: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>My Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <div className="card" style={{ textAlign: "center", padding: "40px 16px" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🛍️</div>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500 }}>Your cart is empty.</p>
            <button className="primary-btn" style={{ marginTop: "24px" }} onClick={() => navigate("/catalog")}>Browse Catalog</button>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <span style={{ fontWeight: 600, fontSize: "14px", lineHeight: "1.4" }}>{item.name}</span>
                  <span style={{ fontWeight: 700, color: "var(--primary)" }}>₹{item.schemeData?.total}</span>
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "4px" }}>Seller: {item.sellerName}</div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Qty: {item.quantity} × ₹{item.price}</div>
                {item.schemeData && item.schemeData.savings > 0 && (
                  <div style={{ fontSize: "11px", color: "var(--green)", fontWeight: 600, marginTop: "8px", background: "#E8F5E9", padding: "4px 8px", borderRadius: "4px", display: "inline-block" }}>
                    Scheme Savings applied: ₹{item.schemeData.savings}
                  </div>
                )}
              </div>
            ))}

            <div className="card" style={{ marginTop: "24px", background: "#F0F7FF", border: "1px solid var(--primary-light)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 600, color: "var(--primary-dark)" }}>Grand Total</span>
                <span style={{ fontSize: "20px", fontWeight: 700, color: "var(--primary-dark)" }}>₹{totalAmount}</span>
              </div>
            </div>

            <button
              className="primary-btn"
              style={{ marginTop: "8px" }}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </Layout>
  );
}