import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const { orders: realOrders } = useCart();
  const navigate = useNavigate();

  // Combine mock persistent orders with new session orders
  const mockOrders = [
    {
      id: "DKN-2025-1001",
      seller: "Sharma Distributors",
      totalAmount: 5400,
      status: "Confirmed",
      date: "05 Mar 2026",
    },
    {
      id: "DKN-2025-1002",
      seller: "Gupta Wholesalers",
      totalAmount: 3200,
      status: "Ready for Pickup",
      date: "04 Mar 2026",
    },
    {
      id: "DKN-2025-1003",
      seller: "Hindustan Unilever",
      totalAmount: 12500,
      status: "Completed",
      date: "03 Mar 2026",
    }
  ];

  // Map real context orders into same shape as mock
  const mappedRealOrders = realOrders.map(o => ({
    id: o.id,
    seller: o.items[0]?.sellerName || "Multiple Sellers",
    totalAmount: o.totalAmount,
    status: o.status,
    date: new Date(o.date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })
  })).reverse(); // Show newest first

  const allOrders = [...mappedRealOrders, ...mockOrders];

  const statusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "var(--orange)";
      case "Ready for Pickup":
        return "var(--info)";
      case "Completed":
        return "var(--green)";
      default:
        return "var(--text-secondary)";
    }
  };

  return (
    <Layout>
      <div className="page-content" style={{ paddingBottom: "20px" }}>
        <div style={{ background: "linear-gradient(135deg, #1976D2, #1565C0)", padding: "40px 20px", color: "white", borderRadius: "0 0 24px 24px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700 }}>My Orders 📦</h2>
        </div>

        <div className="section-pad" style={{ marginTop: "20px" }}>
          {allOrders.map((order) => (
            <div key={order.id} className="card" onClick={() => navigate(`/orders/${order.id}`)} style={{ marginBottom: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)" }}>{order.id}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>{order.seller}</div>
                </div>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "var(--primary)" }}>₹{order.totalAmount}</div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px", paddingTop: "12px", borderTop: "1px dashed var(--border)" }}>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 500 }}>{order.date}</div>
                <div style={{
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".5px",
                  background: `${statusColor(order.status)}20`, /* 20% opacity background */
                  color: statusColor(order.status)
                }}>
                  {order.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}