import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="layout-container" style={{ background: "linear-gradient(135deg, #1976D2, #1565C0, #0D47A1)", minHeight: "100vh" }}>
      <div className="page-content" style={{ display: "flex", flexDirection: "column", padding: "40px 24px" }}>

        {/* Top Spacer */}
        <div style={{ flex: 1 }} />

        {/* Main Brand Area */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{
            width: "96px",
            height: "96px",
            background: "#fff",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            boxShadow: "0 20px 40px rgba(0,0,0,.2)",
            marginBottom: "24px"
          }}>
            🏪
          </div>
          <h1 style={{ fontSize: "40px", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-1px" }}>DigiDukaan</h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,.8)", marginTop: "8px", fontWeight: 500 }}>B2B Procurement Ecosystem</p>
        </div>

        {/* Middle Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom Actions Area */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", paddingTop: "40px" }}>

          <div style={{ background: "rgba(255,255,255,.15)", backdropFilter: "blur(10px)", padding: "12px 20px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px" }}>🌐</span>
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600, letterSpacing: ".5px" }}>POWERED BY ONDC</span>
          </div>

          <button
            onClick={() => navigate("/login")}
            style={{
              width: "100%",
              padding: "18px",
              background: "#fff",
              color: "var(--primary-dark)",
              border: "none",
              borderRadius: "16px",
              fontSize: "16px",
              fontWeight: 700,
              boxShadow: "0 10px 25px rgba(0,0,0,.2)",
              cursor: "pointer",
              marginBottom: "12px"
            }}
          >
            GET STARTED →
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              width: "100%",
              padding: "12px",
              background: "rgba(255,255,255,.2)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,.3)",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Skip to Dashboard
          </button>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,.6)", fontWeight: 500 }}>
            Version 2.5 • Phase 1 MVP
          </div>
        </div>

      </div>
    </div>
  );
}