import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { orders } = useCart();

  return (
    <Layout>
      <div className="page-content" style={{ paddingBottom: "20px" }}>
        <div style={{ background: "linear-gradient(135deg, #1976D2 0%, #1565C0 100%)", padding: "56px 20px 20px", borderRadius: "0 0 28px 28px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "rgba(255,255,255,.8)", fontSize: "13px", fontWeight: 400 }}>Good morning,</div>
              <div style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginTop: "2px" }}>Sharma Enterprises</div>
              <div style={{ color: "rgba(255,255,255,.7)", fontSize: "12px", marginTop: "2px" }}>📍 Wholesale · Delhi NCR</div>
            </div>
            <button style={{ width: "40px", height: "40px", background: "rgba(255,255,255,.15)", border: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span style={{ fontSize: "18px" }}>🔔</span>
              <div style={{ position: "absolute", top: "6px", right: "6px", width: "10px", height: "10px", background: "var(--orange)", borderRadius: "50%", border: "2px solid #1565C0" }} />
            </button>
          </div>
          <div style={{ marginTop: "14px", background: "rgba(255,255,255,.15)", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "rgba(255,255,255,.75)", fontSize: "11px", textTransform: "uppercase", letterSpacing: ".5px" }}>Available Credit</div>
              <div style={{ color: "#fff", fontSize: "22px", fontWeight: 700 }}>₹2,40,000</div>
            </div>
            <div style={{ background: "var(--green)", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "20px", letterSpacing: ".3px" }}>ACTIVE</div>
          </div>
        </div>

        <div className="section-pad">
          <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", margin: "20px 0 12px" }}>Quick Actions</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            <div onClick={() => navigate("/catalog")} style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", boxShadow: "var(--shadow-card)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "#E3F2FD" }}>🛒</div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-primary)", textAlign: "center", lineHeight: "1.3" }}>Browse Catalog</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", boxShadow: "var(--shadow-card)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "#E8F5E9" }}>📷</div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-primary)", textAlign: "center", lineHeight: "1.3" }}>Scan & Order</div>
            </div>
            <div onClick={() => navigate("/orders")} style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", boxShadow: "var(--shadow-card)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "#FFF3E0" }}>📦</div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-primary)", textAlign: "center", lineHeight: "1.3" }}>Track Orders</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", boxShadow: "var(--shadow-card)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "#FCE4EC" }}>💰</div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-primary)", textAlign: "center", lineHeight: "1.3" }}>View Schemes</div>
            </div>
          </div>
        </div>

        <div className="section-pad">
          <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", margin: "20px 0 12px" }}>Business Metrics</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "14px", boxShadow: "var(--shadow-card)" }}>
              <div style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 500, marginBottom: "6px" }}>Orders This Month</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)" }}>{47 + orders.length}</div>
              <div style={{ fontSize: "11px", fontWeight: 600, marginTop: "4px", display: "flex", alignItems: "center", gap: "3px", color: "var(--green)" }}>↑ 12% vs last month</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "14px", boxShadow: "var(--shadow-card)" }}>
              <div style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 500, marginBottom: "6px" }}>Pending Approvals</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)" }}>3</div>
              <div style={{ fontSize: "11px", fontWeight: 600, marginTop: "4px", display: "flex", alignItems: "center", gap: "3px", color: "var(--orange)" }}>⚠ Action needed</div>
            </div>
          </div>
        </div>

        <div className="section-pad">
          <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", margin: "20px 0 12px" }}>Recent Activity</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {orders.slice().reverse().slice(0, 3).map(order => (
              <div key={order.id} style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "12px 14px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "var(--shadow-card)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, background: "#E8F5E9" }}>📦</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Order #{order.id} Placed</div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>₹{order.totalAmount} · {order.items.length} items</div>
                </div>
                <div style={{ fontSize: "10px", color: "var(--text-secondary)", flexShrink: 0 }}>Just now</div>
              </div>
            ))}

            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "12px 14px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "var(--shadow-card)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, background: "#E8F5E9" }}>📦</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Order #DD-2024-1847 Delivered</div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>Hindustan Unilever · 48 units</div>
              </div>
              <div style={{ fontSize: "10px", color: "var(--text-secondary)", flexShrink: 0 }}>2h ago</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "12px 14px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "var(--shadow-card)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, background: "#FFF3E0" }}>🎁</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>New Scheme: Britannia BOGO</div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>Buy 10, Get 2 Free · Valid 3 days</div>
              </div>
              <div style={{ fontSize: "10px", color: "var(--text-secondary)", flexShrink: 0 }}>5h ago</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}