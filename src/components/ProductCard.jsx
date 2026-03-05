export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>MRP: ₹{product.mrp}</p>
      <p><strong>Buying Price: ₹{product.price}</strong></p>
      <p>MOQ: {product.moq}</p>
      <p>Delivery: {product.deliveryTime}</p>
      <p>Seller: {product.seller}</p>

      {product.scheme && (
        <div className="scheme-box">
          <strong>Scheme:</strong> {product.scheme.description}
        </div>
      )}

      <button onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}