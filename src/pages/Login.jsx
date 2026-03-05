import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div
        style={{
          background: "linear-gradient(135deg,#1976D2,#1565C0)",
          padding: "60px 20px 30px",
          color: "white",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      >
        <h2>Welcome Back 👔</h2>
        <p style={{ opacity: 0.8 }}>Sign in to your business account</p>
      </div>

      <div className="card" style={{ margin: "20px" }}>
        <h3 style={{ marginBottom: "20px" }}>Business Login</h3>

        <input
          className="input"
          placeholder="GST Number"
          style={{ marginBottom: "15px" }}
        />

        <input
          className="input"
          placeholder="Mobile Number"
          style={{ marginBottom: "20px" }}
        />

        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")}
        >
          SEND OTP
        </button>
      </div>
    </div>
  );
}