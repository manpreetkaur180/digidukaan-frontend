import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div
      className="page"
      style={{
        background:
          "linear-gradient(160deg, #1976D2 0%, #1565C0 50%, #0D47A1 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "60px" }}>🏪</div>
      <h1 style={{ fontSize: "36px", marginTop: "10px" }}>
        DigiDukaan
      </h1>
      <p style={{ marginTop: "8px", opacity: 0.8 }}>
        B2B Procurement Platform
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          color: "#1976D2",
          padding: "12px 20px",
          borderRadius: "16px",
          fontWeight: 600,
        }}
      >
        🌐 Powered by ONDC Network
      </div>

      <button
        className="primary-btn"
        style={{ marginTop: "40px", background: "white", color: "#1976D2" }}
        onClick={() => navigate("/login")}
      >
        GET STARTED →
      </button>
    </div>
  );
}
// export default function Splash() {
//   return <h1>Splash Working</h1>;
// }