export function applyScheme(seller, quantity) {
  const baseTotal = seller.price * quantity;

  if (!seller.scheme) {
    return {
      total: baseTotal,
      savings: 0,
      effectiveQty: quantity,
    };
  }

  if (seller.scheme.type === "BOGO") {
    const eligibleSets = Math.floor(quantity / seller.scheme.buy);
    const freeUnits = eligibleSets * seller.scheme.get;

    return {
      total: baseTotal,
      savings: freeUnits * seller.price,
      effectiveQty: quantity + freeUnits,
    };
  }

  if (seller.scheme.type === "DISCOUNT") {
    const discount = (baseTotal * seller.scheme.percent) / 100;

    return {
      total: baseTotal - discount,
      savings: discount,
      effectiveQty: quantity,
    };
  }

  return {
    total: baseTotal,
    savings: 0,
    effectiveQty: quantity,
  };
}