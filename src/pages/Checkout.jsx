import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { cartItems, clearCart, createOrder } = useCart();
  const navigate = useNavigate();

  const [deliveryMode, setDeliveryMode] = useState("delivery");
  const [paymentMode, setPaymentMode] = useState("cod");

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.schemeData?.total || item.price * item.quantity),
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    // Mock order creation
    createOrder({
      id: "DKN-2026-" + Math.floor(1000 + Math.random() * 9000),
      items: [...cartItems],
      totalAmount: totalAmount,
      deliveryMode: deliveryMode,
      paymentMode: paymentMode,
      date: new Date().toISOString(),
      status: "Confirmed"
    });

    clearCart();
    navigate("/orders");
  };

  return (
    <Layout>
      <div className="section-pad" style={{ paddingTop: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>Checkout 🚚</h2>

        {cartItems.length === 0 ? (
          <p style={{ color: "var(--text-secondary)" }}>Your cart is empty.</p>
        ) : (
          <>
            <div className="card">
              <h3 style={{ fontSize: "16px", marginBottom: "12px" }}>Delivery details</h3>
              <div className="field-wrap">
                <div className="field-label">Delivery Mode</div>
                <select className="field-input" value={deliveryMode} onChange={(e) => setDeliveryMode(e.target.value)}>
                  <option value="delivery">Standard Delivery</option>
                  <option value="pickup">Self Pickup</option>
                </select>
              </div>
              {deliveryMode === "delivery" && (
                <div className="field-wrap">
                  <div className="field-label">Delivery Address</div>
                  <textarea className="field-input" style={{ height: "80px", paddingTop: "12px", resize: "none" }} placeholder="Enter full address" defaultValue="Sharma Enterprises, Shop 4, Main Market, Delhi NCR"></textarea>
                </div>
              )}
            </div>

            <div className="card">
              <h3 style={{ fontSize: "16px", marginBottom: "12px" }}>Payment details</h3>
              <div className="field-wrap">
                <div className="field-label">Payment Mode</div>
                <select className="field-input" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                  <option value="cod">Cash on Delivery (COD)</option>
                  <option value="prepaid">Prepaid (UPI / Card)</option>
                  <option value="credit">Distributor Credit</option>
                </select>
              </div>
            </div>

            <div className="card" style={{ background: "#F0F7FF", border: "1px solid var(--primary-light)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "14px" }}>Subtotal ({cartItems.length} items)</span>
                <span style={{ fontWeight: 600 }}>₹{totalAmount}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", paddingTop: "12px", borderTop: "1px dashed var(--primary-light)", fontWeight: "700" }}>
                <span>Amount to Pay</span>
                <span style={{ fontSize: "18px", color: "var(--primary-dark)" }}>₹{totalAmount}</span>
              </div>
            </div>

            <button className="primary-btn" onClick={handlePlaceOrder} style={{ marginTop: "16px" }}>
              Place Order • ₹{totalAmount}
            </button>
          </>
        )}
      </div>
    </Layout>
  );
}