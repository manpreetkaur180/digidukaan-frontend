import { products } from "../data/products";

export default function Catalog() {
  return (
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
        <h2>Browse Catalog 🛒</h2>
        <p style={{ opacity: 0.85 }}>
          Compare prices & schemes across sellers
        </p>
      </div>

      {/* Product Grid */}
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Image */}
            <div
              style={{
                height: "100px",
                background: "#F3F4F6",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
              }}
            >
              📦
            </div>

            {/* Info */}
            <div style={{ marginTop: "10px" }}>
              <div style={{ fontWeight: 600 }}>{item.name}</div>
              <div style={{ fontSize: "12px", color: "#757575" }}>
                {item.brand}
              </div>

              <div
                style={{
                  marginTop: "6px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                ₹{item.price}
              </div>

              <div style={{ fontSize: "12px", color: "#757575" }}>
                MOQ: {item.moq}
              </div>

              {/* Scheme Badge */}
              {item.scheme && (
                <div
                  style={{
                    marginTop: "6px",
                    background: "#E8F5E9",
                    color: "#2E7D32",
                    padding: "4px 8px",
                    fontSize: "11px",
                    borderRadius: "20px",
                    display: "inline-block",
                  }}
                >
                  🎁 {item.scheme}
                </div>
              )}
            </div>

            {/* Add Button */}
            <button
              className="primary-btn"
              style={{
                marginTop: "10px",
                height: "40px",
                fontSize: "14px",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}