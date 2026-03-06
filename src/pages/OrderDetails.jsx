import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

export default function OrderDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { orders } = useCart();

    // Find the order from context or mock data
    let order = orders.find(o => o.id === id);

    // If not in context (session), check mock data
    if (!order) {
        const mockOrders = [
            {
                id: "DKN-2025-1001",
                seller: "Sharma Distributors",
                totalAmount: 5400,
                status: "Confirmed",
                date: "05 Mar 2026",
                items: [
                    { name: "Parle-G Gold Biscuits", quantity: 50, price: 85, sellerName: "Sharma Distributors" },
                    { name: "Tata Salt Vacuum Evaporated", quantity: 40, price: 28, sellerName: "Sharma Distributors" }
                ]
            },
            {
                id: "DKN-2025-1002",
                seller: "Gupta Wholesalers",
                totalAmount: 3200,
                status: "Ready for Pickup",
                date: "04 Mar 2026",
                items: [
                    { name: "Dettol Original Bar Soap", quantity: 76, price: 42, sellerName: "Gupta Wholesalers" }
                ]
            },
            {
                id: "DKN-2025-1003",
                seller: "Hindustan Unilever",
                totalAmount: 12500,
                status: "Completed",
                date: "03 Mar 2026",
                items: [
                    { name: "BRU Instant Coffee 50g", quantity: 120, price: 98, sellerName: "Mega Mart B2B" },
                    { name: "Parle-G Gold Biscuits", quantity: 10, price: 83, sellerName: "Gupta Wholesalers" }
                ]
            }
        ];
        order = mockOrders.find(o => o.id === id);
        if (order) {
            // normalize mock data to look like real order items
            order.items = order.items.map(item => ({ ...item, schemeData: { total: item.quantity * item.price } }));
        }
    }

    if (!order) {
        return (
            <Layout>
                <div className="section-pad" style={{ marginTop: "40px", textAlign: "center" }}>
                    <h2>Order not found</h2>
                    <button className="primary-btn" onClick={() => navigate("/orders")} style={{ marginTop: "20px" }}>Back to Orders</button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="page-content" style={{ paddingBottom: "20px", background: "var(--bg-secondary)" }}>
                <div style={{ background: "linear-gradient(135deg, #1976D2, #1565C0)", padding: "24px 16px", color: "white" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button onClick={() => navigate("/orders")} style={{ background: "rgba(255,255,255,.2)", border: "none", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", cursor: "pointer" }}>
                            ←
                        </button>
                        <h2 style={{ fontSize: "18px", fontWeight: 700 }}>Order Summary</h2>
                    </div>
                    <div style={{ marginTop: "20px", fontSize: "24px", fontWeight: 800 }}>{order.id}</div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,.8)", marginTop: "4px" }}>
                        Placed on {new Date(order.date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}
                    </div>
                </div>

                <div className="section-pad" style={{ marginTop: "16px" }}>
                    <div className="card" style={{ marginBottom: "16px", padding: "16px" }}>
                        <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "12px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>Items Ordered</div>
                        {order.items.map((item, idx) => (
                            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", paddingBottom: "12px", borderBottom: idx !== order.items.length - 1 ? "1px dashed var(--border)" : "none" }}>
                                <div style={{ flex: 1, paddingRight: "12px" }}>
                                    <div style={{ fontWeight: 600, fontSize: "13px", color: "var(--text-primary)", lineHeight: "1.4" }}>{item.name}</div>
                                    <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "4px" }}>Sold by {item.sellerName}</div>
                                    <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>{item.quantity} units × ₹{item.price}</div>
                                </div>
                                <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--primary-dark)" }}>₹{item.schemeData?.total || item.price * item.quantity}</div>
                            </div>
                        ))}
                    </div>

                    <div className="card" style={{ marginBottom: "16px", padding: "16px" }}>
                        <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "12px" }}>Payment Details</div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                            <span>Item Total</span>
                            <span>₹{order.totalAmount}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                            <span>Delivery Fee</span>
                            <span style={{ color: "var(--green)", fontWeight: 600 }}>FREE</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", marginTop: "12px", paddingTop: "12px", borderTop: "1px dashed var(--border)", fontWeight: 700, color: "var(--text-primary)" }}>
                            <span>Grand Total</span>
                            <span style={{ color: "var(--primary)" }}>₹{order.totalAmount}</span>
                        </div>
                    </div>

                    <div className="card" style={{ padding: "16px" }}>
                        <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "12px" }}>Tracking Status</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700 }}>✓</div>
                            <div>
                                <div style={{ fontSize: "13px", fontWeight: 600 }}>Order Confirmed</div>
                                <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>Waiting for seller to dispatch</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
