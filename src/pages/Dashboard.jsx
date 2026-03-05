import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Dashboard() {
  const navigate = useNavigate();
 return (
  <Layout>{
    <div className="page">
      <div
        style={{
          background: "linear-gradient(135deg,#1976D2,#1565C0)",
          padding: "50px 20px",
          color: "white",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      >
        <h3>Good Morning,</h3>
        <h2>Gupta Enterprises</h2>

        <div
          style={{
            marginTop: "20px",
            background: "rgba(255,255,255,.15)",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Available Credit
          </div>
          <div style={{ fontSize: "22px", fontWeight: 700 }}>
            ₹3,40,000
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "12px" }}>Quick Actions</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div className="card" onClick={() => navigate("/catalog")}>
            🛒 Browse Catalog
          </div>

          <div className="card">
            📦 Track Orders
          </div>
        </div>
      </div>
    </div>
}
  </Layout>
);

}