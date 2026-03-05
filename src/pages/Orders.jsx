import Layout from "../components/Layout";

export default function Orders() {
  const orders = [
    {
      id: "DKN-2025-1001",
      seller: "Sharma Distributors",
      total: 5400,
      status: "Confirmed",
      date: "05 Mar 2026",
    },
    {
      id: "DKN-2025-1002",
      seller: "Gupta Wholesalers",
      total: 3200,
      status: "Ready for Pickup",
      date: "04 Mar 2026",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "#FF9800";
      case "Ready for Pickup":
        return "#1976D2";
      case "Completed":
        return "#4CAF50";
      default:
        return "#757575";
    }
  };

  return (
    <Layout>{
    <div className="page">
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg,#1976D2,#1565C0)",
          padding: "40px 20px",
          color: "white",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      >
        <h2>My Orders 📦</h2>
      </div>

      {/* Orders List */}
      <div style={{ padding: "20px" }}>
        {orders.map((order) => (
          <div key={order.id} className="card" style={{ marginBottom: "16px" }}>
            <div style={{ fontWeight: 600 }}>{order.id}</div>
            <div style={{ fontSize: "13px", color: "#757575" }}>
              {order.seller}
            </div>

            <div
              style={{
                marginTop: "6px",
                fontWeight: 700,
              }}
            >
              ₹{order.total}
            </div>

            <div style={{ fontSize: "12px", marginTop: "4px" }}>
              {order.date}
            </div>

            <div
              style={{
                marginTop: "8px",
                padding: "6px 12px",
                borderRadius: "20px",
                display: "inline-block",
                fontSize: "12px",
                background: statusColor(order.status) + "20",
                color: statusColor(order.status),
                fontWeight: 600,
              }}
            >
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
}
</Layout>
  );
}