import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="layout-container" style={{ background: "var(--bg-secondary)", minHeight: "100vh" }}>
      <div className="page-content">
        <div
          style={{
            background: "linear-gradient(135deg, #1976D2, #1565C0)",
            padding: "68px 24px 28px",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <h2 style={{ color: "#fff", fontSize: "26px", fontWeight: "700", marginBottom: "4px" }}>Welcome Back 👔</h2>
          <p style={{ color: "rgba(255,255,255,.85)", fontSize: "14px", margin: 0 }}>Sign in to your business account</p>
        </div>

        <div className="card" style={{ margin: "20px 16px 0", padding: "24px" }}>
          <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" }}>Business Login</h3>

          <div className="field-wrap">
            <div className="field-label">Business ID / GST Number</div>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}>🏢</span>
              <input className="field-input" type="text" placeholder="e.g. 22AAAAA0000A1Z5" style={{ paddingLeft: "44px" }} />
            </div>
          </div>

          <div className="field-wrap">
            <div className="field-label">Mobile Number</div>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}>📱</span>
              <input className="field-input" type="tel" placeholder="+91  98765 43210" style={{ paddingLeft: "44px" }} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "4px 0 20px" }}>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Remember this device</span>
            <button
              onClick={() => setRememberMe(!rememberMe)}
              style={{
                width: "42px", height: "24px",
                background: rememberMe ? "var(--primary)" : "var(--border)",
                borderRadius: "12px",
                position: "relative",
                border: "none",
                transition: "background .2s"
              }}
            >
              <div style={{
                position: "absolute", top: "3px", left: "3px",
                width: "18px", height: "18px", background: "#fff",
                borderRadius: "50%", transition: "transform .2s",
                boxShadow: "0 1px 4px rgba(0,0,0,.2)",
                transform: rememberMe ? "translateX(18px)" : "none"
              }} />
            </button>
          </div>

          <button className="primary-btn" onClick={() => navigate("/dashboard")}>
            SEND OTP
          </button>

          <div style={{ textAlign: "center", marginTop: "16px", fontSize: "13px", color: "var(--text-secondary)" }}>
            New to DigiDukaan? <span style={{ color: "var(--primary)", fontWeight: 600, cursor: "pointer" }}>REGISTER BUSINESS</span>
          </div>
        </div>

        <div style={{ background: "#F0F7FF", margin: "16px 16px 0", borderRadius: "var(--radius-lg)", padding: "20px" }}>
          <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "14px" }}>🚀 Why Choose DigiDukaan?</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 500, background: "#fff", padding: "10px", borderRadius: "var(--radius-sm)" }}>
              <span style={{ fontSize: "16px" }}>📊</span>Business Analytics
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 500, background: "#fff", padding: "10px", borderRadius: "var(--radius-sm)" }}>
              <span style={{ fontSize: "16px" }}>💳</span>Credit Management
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 500, background: "#fff", padding: "10px", borderRadius: "var(--radius-sm)" }}>
              <span style={{ fontSize: "16px" }}>🧾</span>GST Compliance
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 500, background: "#fff", padding: "10px", borderRadius: "var(--radius-sm)" }}>
              <span style={{ fontSize: "16px" }}>🔄</span>Bulk Ordering
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "20px 16px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12px", color: "var(--text-secondary)" }}>🔒 Bank-level Security</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12px", color: "var(--text-secondary)" }}>🌐 ONDC Certified Network</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12px", color: "var(--text-secondary)" }}>⭐ Trusted by 10,000+ Businesses</div>
        </div>
      </div>
    </div>
  );
}