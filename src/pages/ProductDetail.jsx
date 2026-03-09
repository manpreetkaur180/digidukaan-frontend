import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { applyScheme } from "../services/schemeEngine";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="section-pad" style={{ textAlign: "center", paddingTop: "40px" }}>
          <div style={{ fontSize: "40px", marginBottom: "16px" }}>📦</div>
          <h2 style={{ color: "var(--text-secondary)" }}>Product not found</h2>
          <button className="primary-btn" style={{ marginTop: "24px" }} onClick={() => navigate("/catalog")}>
            Back to Catalog
          </button>
        </div>
      </Layout>
    );
  }

  const handleQtyChange = (sellerId, value) => {
    setQuantities({ ...quantities, [sellerId]: Number(value) });
  };

  return (
    <Layout>
      <div className="page-content" style={{ background: "var(--bg-secondary)", paddingBottom: "20px" }}>
        {/* Header */}
        <div style={{ background: "#fff", padding: "16px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => navigate("/catalog")}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              ←
            </button>
            <div>
              <div style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".5px" }}>
                {product.brand}
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                {product.name}
              </div>
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div style={{ background: "#fff", padding: "20px 16px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                border: "1px solid var(--border)",
              }}
            />
          </div>
        </div>

        {/* Sellers */}
        <div className="section-pad">
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "var(--text-primary)" }}>
            Available Sellers ({product.sellers.length})
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {product.sellers.map((seller) => {
              const qty = quantities[seller.sellerId] || seller.moq;
              const schemeData = applyScheme(seller, qty);

              return (
                <div
                  key={seller.sellerId}
                  className="card"
                  style={{
                    padding: "16px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
                        {seller.sellerName}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px", fontSize: "12px", color: "var(--text-secondary)" }}>
                        <span style={{ color: "#F59E0B" }}>★ {seller.rating}</span>
                        <span>•</span>
                        <span>🚚 {seller.deliveryTime}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "10px", color: "var(--text-secondary)", fontWeight: 500 }}>
                        Distributor Price
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary-dark)" }}>
                        ₹{seller.price}
                      </div>
                      <div style={{ fontSize: "10px", color: "var(--text-secondary)", textDecoration: "line-through" }}>
                        MRP ₹{seller.mrp}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                      MOQ: {seller.moq} units
                    </div>
                    <div style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: "6px", border: "1px solid var(--border)", overflow: "hidden" }}>
                      <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-secondary)", padding: "0 8px", background: "#F3F4F6", height: "100%", display: "flex", alignItems: "center", borderRight: "1px solid var(--border)" }}>
                        QTY
                      </span>
                      <input
                        type="number"
                        min={seller.moq}
                        value={qty}
                        onChange={(e) => handleQtyChange(seller.sellerId, e.target.value)}
                        style={{
                          width: "50px",
                          padding: "8px",
                          border: "none",
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: 600,
                          outline: "none",
                          background: "transparent",
                        }}
                      />
                    </div>
                  </div>

                  {schemeData.savings > 0 && (
                    <div style={{ background: "#E8F5E9", color: "var(--green)", fontSize: "11px", fontWeight: 600, padding: "6px 10px", borderRadius: "6px", marginBottom: "12px", display: "inline-block" }}>
                      ✨ Scheme savings: ₹{schemeData.savings} applied
                    </div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
                      Total: ₹{schemeData.total}
                    </div>
                    <button
                      className="primary-btn"
                      onClick={() => {
                        addToCart({
                          productId: product.id,
                          name: product.name,
                          sellerId: seller.sellerId,
                          sellerName: seller.sellerName,
                          price: seller.price,
                          quantity: qty,
                          schemeData,
                        });
                        navigate("/cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}