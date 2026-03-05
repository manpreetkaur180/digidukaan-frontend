import { useLocation, useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/dashboard", icon: "🏠" },
    { label: "Catalog", path: "/catalog", icon: "🛒" },
    { label: "Orders", path: "/orders", icon: "📦" },
  ];

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {children}

      {/* Bottom Nav */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "white",
          borderTop: "1px solid #E0E0E0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                textAlign: "center",
                cursor: "pointer",
                color: isActive ? "#1976D2" : "#757575",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              <div>{item.icon}</div>
              <div style={{ fontSize: "12px" }}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}