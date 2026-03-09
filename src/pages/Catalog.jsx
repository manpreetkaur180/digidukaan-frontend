import Layout from "../components/Layout";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { applyScheme } from "../services/schemeEngine";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Catalog() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleQtyChange = (key, value) => {
    setQuantities({ ...quantities, [key]: Number(value) });
  };

  return (
    <Layout>
      <div
        className="page-content"
        style={{ background: "var(--bg-secondary)", paddingBottom: "20px" }}
      >
        <div
          style={{
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,.05)",
          }}
        >
          <div style={{ padding: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                    letterSpacing: ".5px",
                    textTransform: "uppercase",
                  }}
                >
                  ONDC Network
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginTop: "2px",
                  }}
                >
                  Product Catalog 🛍️
                </div>
              </div>
              <button
                style={{
                  background: "#F0F7FF",
                  border: "none",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-dark)",
                  fontSize: "16px",
                }}
              >
                ⚙️
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                  opacity: 0.6,
                }}
              >
                🔍
              </span>
              <input
                type="text"
                placeholder="Search products, brands, SKUs…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 40px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "#F9FAFB",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              padding: "0 16px 16px",
              scrollbarWidth: "none",
            }}
          >
            <div
              style={{
                background: "var(--primary)",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              All Products
            </div>
            <div
              style={{
                background: "#F3F4F6",
                color: "var(--text-primary)",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
                border: "1px solid var(--border)",
              }}
            >
              FMCG
            </div>
            <div
              style={{
                background: "#F3F4F6",
                color: "var(--text-primary)",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
                border: "1px solid var(--border)",
              }}
            >
              Beverages
            </div>
            <div
              style={{
                background: "#F3F4F6",
                color: "var(--text-primary)",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
                border: "1px solid var(--border)",
              }}
            >
              Personal Care
            </div>
          </div>
        </div>

        <div className="section-pad" style={{ marginTop: "16px" }}>
          <div
            style={{
              background: "#FFF3E0",
              border: "1px solid #FFE0B2",
              padding: "12px 16px",
              borderRadius: "var(--radius-md)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#E65100",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>⚖️</span> ONDC Multi-Seller View
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#F57C00",
                  marginTop: "2px",
                  fontWeight: 500,
                }}
              >
                Compare & buy from multiple distributors
              </div>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {products
              .filter((p) => {
                if (!searchQuery) return true;
                const term = searchQuery.toLowerCase();
                return (
                  p.name.toLowerCase().includes(term) ||
                  p.brand.toLowerCase().includes(term)
                );
              })
              .flatMap((product) =>
                product.sellers.map((seller) => {
                  const key = product.id + seller.sellerId;
                  const qty = quantities[key] || seller.moq;
                  const schemeData = applyScheme(seller, qty);

                  return (
                    <div
                      className="card"
                      key={key}
                      style={{
                        padding: 0,
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div style={{ display: "flex", padding: "14px" }}>
                        <div
                          style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "10px",
                            background: "#f8f9fa",
                            position: "relative",
                            flexShrink: 0,
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => navigate(`/product/${product.id}`)}
                          />
                          {seller.scheme && (
                            <div
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                background: "var(--orange)",
                                color: "#fff",
                                fontSize: "9px",
                                fontWeight: 800,
                                padding: "2px 6px",
                                borderBottomRightRadius: "6px",
                                textTransform: "uppercase",
                              }}
                            >
                              OFFER
                            </div>
                          )}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "4px",
                              right: "4px",
                              background: "#fff",
                              padding: "2px 4px",
                              borderRadius: "4px",
                              fontSize: "8px",
                              fontWeight: 700,
                              border: "1px solid #eee",
                              color: "var(--green)",
                            }}
                          >
                            FSSAI
                          </div>
                        </div>

                        <div
                          style={{ marginLeft: "14px", flex: 1, minWidth: 0 }}
                        >
                          <div
                            style={{
                              fontSize: "10px",
                              color: "var(--text-secondary)",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: ".5px",
                              marginBottom: "2px",
                            }}
                          >
                            {product.brand}
                          </div>
                          <div
                            style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", lineHeight: "1.3", marginBottom: "6px", cursor: "pointer" }}
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {product.name}
                          </div>

                          <div
                            style={{
                              background: "#F9FAFB",
                              padding: "6px 8px",
                              borderRadius: "6px",
                              border: "1px solid #eee",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "11px",
                                fontWeight: 600,
                                color: "var(--text-primary)",
                              }}
                            >
                              {seller.sellerName}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                marginTop: "2px",
                                fontSize: "10px",
                                color: "var(--text-secondary)",
                              }}
                            >
                              <span style={{ color: "#F59E0B" }}>
                                ★ {seller.rating}
                              </span>
                              <span>•</span>
                              <span>🚚 {seller.deliveryTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          background: "#F8FAFC",
                          padding: "12px 14px",
                          borderTop: "1px solid var(--border)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: "10px",
                                color: "var(--text-secondary)",
                                fontWeight: 500,
                              }}
                            >
                              Distributor Price
                            </div>
                            <div
                              style={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "var(--primary-dark)",
                                display: "flex",
                                alignItems: "baseline",
                                gap: "4px",
                              }}
                            >
                              ₹{seller.price}{" "}
                              <span
                                style={{
                                  fontSize: "10px",
                                  color: "var(--text-secondary)",
                                  textDecoration: "line-through",
                                  fontWeight: 500,
                                }}
                              >
                                MRP ₹{seller.mrp}
                              </span>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              background: "#fff",
                              borderRadius: "6px",
                              border: "1px solid var(--border)",
                              overflow: "hidden",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 600,
                                color: "var(--text-secondary)",
                                padding: "0 8px",
                                background: "#F3F4F6",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                borderRight: "1px solid var(--border)",
                              }}
                            >
                              MOQ {seller.moq}
                            </span>
                            <input
                              type="number"
                              min={seller.moq}
                              value={qty}
                              onChange={(e) =>
                                handleQtyChange(key, e.target.value)
                              }
                              style={{
                                width: "40px",
                                padding: "6px",
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

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "12px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                            }}
                          >
                            Total: ₹{schemeData.total}
                          </div>
                          <button
                            style={{
                              background: "transparent",
                              border: "1px solid var(--primary)",
                              color: "var(--primary)",
                              fontSize: "12px",
                              fontWeight: 600,
                              padding: "6px 16px",
                              borderRadius: "16px",
                              cursor: "pointer",
                            }}
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

                        {schemeData.savings > 0 && (
                          <div
                            style={{
                              background: "#E8F5E9",
                              color: "var(--green)",
                              fontSize: "10px",
                              fontWeight: 700,
                              padding: "4px 8px",
                              borderRadius: "4px",
                              marginTop: "10px",
                              display: "inline-block",
                              border: "1px solid #C8E6C9",
                            }}
                          >
                            ✨ Scheme savings: ₹{schemeData.savings} applied
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }),
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
