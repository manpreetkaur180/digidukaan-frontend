import { useLocation, useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/dashboard", icon: "🏠" },
    { label: "Catalog", path: "/catalog", icon: "🛍️" },
    { label: "Orders", path: "/orders", icon: "📦" },
    { label: "Cart", path: "/cart", icon: "🛒" },
  ];

  return (
    <div className="layout-container">
      <div className="page-content">
        {children}
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <div className="nav-icon">{item.icon}</div>
              <div>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}