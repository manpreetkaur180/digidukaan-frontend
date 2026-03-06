export const products = [
  {
    id: "parle-g",
    name: "Parle-G Gold Biscuits",
    brand: "Parle",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=200",
    sellers: [
      {
        sellerId: "seller-a",
        sellerName: "Sharma Distributors",
        rating: 4.3,
        deliveryTime: "24 hrs",
        paymentModes: ["COD", "Credit"],
        price: 85,
        mrp: 100,
        moq: 10,
        scheme: {
          type: "BOGO",
          buy: 10,
          get: 1,
        },
      },
      {
        sellerId: "seller-b",
        sellerName: "Gupta Wholesalers",
        rating: 4.0,
        deliveryTime: "48 hrs",
        paymentModes: ["COD"],
        price: 83,
        mrp: 100,
        moq: 10,
        scheme: null,
      },
    ],
  },
  {
    id: "tata-salt",
    name: "Tata Salt Vacuum Evaporated",
    brand: "Tata",
    image: "https://images.unsplash.com/photo-1518110925495-5fe1f65bb5e6?auto=format&fit=crop&q=80&w=200",
    sellers: [
      {
        sellerId: "seller-c",
        sellerName: "National Traders",
        rating: 4.8,
        deliveryTime: "Same Day",
        paymentModes: ["COD", "Prepaid"],
        price: 24,
        mrp: 28,
        moq: 25,
        scheme: {
          type: "DISCOUNT",
          percent: 5,
        },
      },
    ],
  },
  {
    id: "bru-coffee",
    name: "BRU Instant Coffee 50g",
    brand: "Hindustan Unilever",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=200",
    sellers: [
      {
        sellerId: "seller-d",
        sellerName: "Mega Mart B2B",
        rating: 4.6,
        deliveryTime: "24 hrs",
        paymentModes: ["Credit", "Prepaid"],
        price: 98,
        mrp: 110,
        moq: 5,
        scheme: null,
      },
    ],
  },
  {
    id: "dettol-soap",
    name: "Dettol Original Bar Soap",
    brand: "Reckitt",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=200",
    sellers: [
      {
        sellerId: "seller-a",
        sellerName: "Sharma Distributors",
        rating: 4.3,
        deliveryTime: "24 hrs",
        paymentModes: ["COD", "Prepaid"],
        price: 42,
        mrp: 45,
        moq: 48,
        scheme: {
          type: "DISCOUNT",
          percent: 10,
        },
      },
    ],
  }
];