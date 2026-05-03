const MANIFEST_PRODUCTS = [
  {
    productId: "MB-AIR-M1",
    gadget: "Laptop",
    name: "Manifest MirageBook",
    model: "MirageBook Air M1",
    price: 52999,
    priceText: "₹52,999",
    category: "Laptop",
    type: "laptop",
    color1: "#77f7ff",
    color2: "#8f63ff",
    shortSpecs: "Intel i5 · 8 GB RAM · 512 GB SSD",
    specs: [
      "Processor: Intel Core i5 12th Gen",
      "RAM: 8 GB DDR4",
      "Storage: 512 GB SSD",
      "Display: 14-inch Full HD",
      "Graphics: Intel Iris Xe",
      "Battery Backup: Up to 8 hours",
      "Best For: Students, office work, browsing, basic coding"
    ]
  },
  {
    productId: "MB-AIR-M2P",
    gadget: "Laptop",
    name: "Manifest MirageBook",
    model: "MirageBook Air M2 Pro",
    price: 72999,
    priceText: "₹72,999",
    category: "Laptop",
    type: "laptop",
    color1: "#7affc8",
    color2: "#8f63ff",
    shortSpecs: "Intel i7 · 16 GB DDR5 · 1 TB SSD",
    specs: [
      "Processor: Intel Core i7 13th Gen",
      "RAM: 16 GB DDR5",
      "Storage: 1 TB SSD",
      "Display: 14-inch 2K IPS Display",
      "Graphics: Intel Iris Xe Advanced",
      "Battery Backup: Up to 12 hours",
      "Best For: Coding, multitasking, editing, professional use"
    ]
  },
  {
    productId: "TB-G5",
    gadget: "Laptop",
    name: "Manifest ThunderBook",
    model: "ThunderBook G5",
    price: 84999,
    priceText: "₹84,999",
    category: "Laptop",
    type: "laptop",
    color1: "#ffc857",
    color2: "#77f7ff",
    shortSpecs: "Ryzen 7 · 16 GB DDR5 · RTX 3050",
    specs: [
      "Processor: AMD Ryzen 7 7735HS",
      "RAM: 16 GB DDR5",
      "Storage: 1 TB SSD",
      "Display: 15.6-inch Full HD 144Hz",
      "Graphics: NVIDIA RTX 3050 4 GB",
      "Battery Backup: Up to 7 hours",
      "Best For: Gaming, graphics work, app development"
    ]
  },
  {
    productId: "TB-G7U",
    gadget: "Laptop",
    name: "Manifest ThunderBook",
    model: "ThunderBook G7 Ultra",
    price: 124999,
    priceText: "₹1,24,999",
    category: "Laptop",
    type: "laptop",
    color1: "#ff6bd6",
    color2: "#8f63ff",
    shortSpecs: "Ryzen 9 · 32 GB DDR5 · RTX 4060",
    specs: [
      "Processor: AMD Ryzen 9 7940HS",
      "RAM: 32 GB DDR5",
      "Storage: 2 TB SSD",
      "Display: 16-inch QHD 165Hz",
      "Graphics: NVIDIA RTX 4060 8 GB",
      "Battery Backup: Up to 9 hours",
      "Best For: High-end gaming, AI tools, video editing, 3D design"
    ]
  },
  {
    productId: "NP-X1",
    gadget: "Mobile Phone",
    name: "Manifest NovaPhone",
    model: "NovaPhone X1",
    price: 24999,
    priceText: "₹24,999",
    category: "Mobile Phone",
    type: "phone",
    color1: "#77f7ff",
    color2: "#7affc8",
    shortSpecs: "Snapdragon 7 Gen 1 · 8 GB RAM · 128 GB",
    specs: [
      "Processor: Snapdragon 7 Gen 1",
      "RAM: 8 GB",
      "Storage: 128 GB",
      "Display: 6.5-inch AMOLED 90Hz",
      "Rear Camera: 50 MP + 8 MP",
      "Front Camera: 16 MP",
      "Battery: 5000 mAh",
      "Charging: 33W Fast Charging"
    ]
  },
  {
    productId: "NP-X1P",
    gadget: "Mobile Phone",
    name: "Manifest NovaPhone",
    model: "NovaPhone X1 Pro",
    price: 34999,
    priceText: "₹34,999",
    category: "Mobile Phone",
    type: "phone",
    color1: "#77f7ff",
    color2: "#ff6bd6",
    shortSpecs: "Snapdragon 7+ Gen 2 · 12 GB RAM · 256 GB",
    specs: [
      "Processor: Snapdragon 7+ Gen 2",
      "RAM: 12 GB",
      "Storage: 256 GB",
      "Display: 6.7-inch AMOLED 120Hz",
      "Rear Camera: 64 MP + 12 MP + 5 MP",
      "Front Camera: 32 MP",
      "Battery: 5200 mAh",
      "Charging: 67W Fast Charging"
    ]
  },
  {
    productId: "BP-Z3",
    gadget: "Mobile Phone",
    name: "Manifest BlazePhone",
    model: "BlazePhone Z3",
    price: 42999,
    priceText: "₹42,999",
    category: "Mobile Phone",
    type: "phone",
    color1: "#ffc857",
    color2: "#ff6b6b",
    shortSpecs: "Dimensity 8300 · 12 GB RAM · 108 MP",
    specs: [
      "Processor: MediaTek Dimensity 8300",
      "RAM: 12 GB",
      "Storage: 256 GB",
      "Display: 6.8-inch AMOLED 120Hz",
      "Rear Camera: 108 MP + 12 MP",
      "Front Camera: 32 MP",
      "Battery: 5500 mAh",
      "Charging: 80W Fast Charging"
    ]
  },
  {
    productId: "BP-Z3M",
    gadget: "Mobile Phone",
    name: "Manifest BlazePhone",
    model: "BlazePhone Z3 Max",
    price: 59999,
    priceText: "₹59,999",
    category: "Mobile Phone",
    type: "phone",
    color1: "#ff6b6b",
    color2: "#8f63ff",
    shortSpecs: "Snapdragon 8 Gen 2 · 16 GB RAM · 512 GB",
    specs: [
      "Processor: Snapdragon 8 Gen 2",
      "RAM: 16 GB",
      "Storage: 512 GB",
      "Display: 6.9-inch LTPO AMOLED 144Hz",
      "Rear Camera: 200 MP + 48 MP + 12 MP",
      "Front Camera: 50 MP",
      "Battery: 6000 mAh",
      "Charging: 120W Ultra Fast Charging"
    ]
  },
  {
    productId: "WB-LITE",
    gadget: "Wireless Earphones",
    name: "Manifest WhisperBuds",
    model: "WhisperBuds Lite",
    price: 2499,
    priceText: "₹2,499",
    category: "Wireless Earphones",
    type: "earbuds",
    color1: "#7affc8",
    color2: "#4db8ff",
    shortSpecs: "TWS · 24 hours · Bluetooth 5.2",
    specs: [
      "Type: True Wireless Earbuds",
      "Driver Size: 10 mm",
      "Battery Backup: 24 hours with case",
      "Noise Cancellation: Basic ENC",
      "Bluetooth: Version 5.2",
      "Water Resistance: IPX4",
      "Best For: Calls, casual music, daily travel"
    ]
  },
  {
    productId: "WB-PRO-ANC",
    gadget: "Wireless Earphones",
    name: "Manifest WhisperBuds",
    model: "WhisperBuds Pro ANC",
    price: 5999,
    priceText: "₹5,999",
    category: "Wireless Earphones",
    type: "earbuds",
    color1: "#77f7ff",
    color2: "#8f63ff",
    shortSpecs: "TWS · ANC · 40 hours · Gaming mode",
    specs: [
      "Type: True Wireless Earbuds",
      "Driver Size: 13 mm",
      "Battery Backup: 40 hours with case",
      "Noise Cancellation: Active Noise Cancellation",
      "Bluetooth: Version 5.3",
      "Water Resistance: IPX5",
      "Extra Feature: Low latency gaming mode"
    ]
  },
  {
    productId: "SC-S1",
    gadget: "Wired Earphones",
    name: "Manifest SonicCord",
    model: "SonicCord S1",
    price: 799,
    priceText: "₹799",
    category: "Wired Earphones",
    type: "wired",
    color1: "#ffc857",
    color2: "#77f7ff",
    shortSpecs: "3.5 mm Jack · 10 mm driver · In-line mic",
    specs: [
      "Type: Wired Earphones",
      "Connector: 3.5 mm Jack",
      "Driver Size: 10 mm",
      "Microphone: In-line Mic",
      "Cable Length: 1.2 m",
      "Best For: Calls, music, online classes"
    ]
  },
  {
    productId: "SC-S2-BASS",
    gadget: "Wired Earphones",
    name: "Manifest SonicCord",
    model: "SonicCord S2 Bass+",
    price: 1499,
    priceText: "₹1,499",
    category: "Wired Earphones",
    type: "wired",
    color1: "#ff6bd6",
    color2: "#77f7ff",
    shortSpecs: "Type-C · 14 mm driver · Braided cable",
    specs: [
      "Type: Wired Earphones",
      "Connector: Type-C",
      "Driver Size: 14 mm",
      "Microphone: HD In-line Mic",
      "Cable Length: 1.3 m Braided Cable",
      "Extra Feature: Deep bass audio tuning",
      "Best For: Gaming, music, clear voice calls"
    ]
  },
  {
    productId: "OW-FIT",
    gadget: "Smart Watch",
    name: "Manifest OrbitWatch",
    model: "OrbitWatch Fit",
    price: 4999,
    priceText: "₹4,999",
    category: "Smart Watch",
    type: "watch",
    color1: "#77f7ff",
    color2: "#7affc8",
    shortSpecs: "1.6-inch AMOLED · 7 days · IP68",
    specs: [
      "Display: 1.6-inch AMOLED",
      "Battery Backup: Up to 7 days",
      "Health Features: Heart rate, SpO2, sleep tracking",
      "Sports Modes: 60 modes",
      "Connectivity: Bluetooth Calling",
      "Water Resistance: IP68",
      "Best For: Fitness tracking and daily use"
    ]
  },
  {
    productId: "OW-ELITE",
    gadget: "Smart Watch",
    name: "Manifest OrbitWatch",
    model: "OrbitWatch Elite",
    price: 8999,
    priceText: "₹8,999",
    category: "Smart Watch",
    type: "watch",
    color1: "#8f63ff",
    color2: "#77f7ff",
    shortSpecs: "1.9-inch AMOLED · GPS · AI fitness coach",
    specs: [
      "Display: 1.9-inch AMOLED Always-On Display",
      "Battery Backup: Up to 12 days",
      "Health Features: Heart rate, SpO2, ECG, sleep tracking, stress monitor",
      "Sports Modes: 120 modes",
      "Connectivity: Bluetooth Calling + GPS",
      "Water Resistance: 5ATM",
      "Extra Feature: AI fitness coach and premium metal body"
    ]
  }
];

function formatMoney(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function findProductById(productId) {
  return MANIFEST_PRODUCTS.find(function (product) {
    return product.productId === productId;
  });
}

function filterProducts(searchText, category) {
  var text = (searchText || "").trim().toLowerCase();
  var selectedCategory = category || "all";

  return MANIFEST_PRODUCTS.filter(function (product) {
    var categoryMatch = selectedCategory === "all" || product.category === selectedCategory;

    var combinedText = [
      product.gadget,
      product.name,
      product.model,
      product.category,
      product.shortSpecs,
      product.specs.join(" ")
    ].join(" ").toLowerCase();

    var searchMatch = text === "" || combinedText.includes(text);
    return categoryMatch && searchMatch;
  });
}

function getProductSVG(type, color1, color2) {
  if (type === "laptop") {
    return `
      <svg class="product-svg" viewBox="0 0 120 120">
        <rect x="22" y="26" width="76" height="52" rx="8" fill="rgba(255,255,255,0.06)" stroke="${color1}" stroke-width="4"></rect>
        <rect x="30" y="34" width="60" height="34" rx="5" fill="${color2}" opacity="0.25"></rect>
        <path d="M16 84 H104 L96 98 H24 Z" fill="rgba(255,255,255,0.08)" stroke="${color1}" stroke-width="4" stroke-linejoin="round"></path>
      </svg>
    `;
  }

  if (type === "phone") {
    return `
      <svg class="product-svg" viewBox="0 0 120 120">
        <rect x="38" y="14" width="44" height="92" rx="13" fill="rgba(255,255,255,0.06)" stroke="${color1}" stroke-width="4"></rect>
        <rect x="45" y="25" width="30" height="62" rx="7" fill="${color2}" opacity="0.25"></rect>
        <circle cx="60" cy="96" r="3.5" fill="${color2}"></circle>
      </svg>
    `;
  }

  if (type === "earbuds") {
    return `
      <svg class="product-svg" viewBox="0 0 120 120">
        <path d="M38 25 a18 18 0 1 1 0 36 h-6 v24 a8 8 0 0 0 16 0 V48" fill="none" stroke="${color1}" stroke-width="8" stroke-linecap="round"></path>
        <path d="M82 25 a18 18 0 1 0 0 36 h6 v24 a8 8 0 0 1 -16 0 V48" fill="none" stroke="${color2}" stroke-width="8" stroke-linecap="round"></path>
      </svg>
    `;
  }

  if (type === "wired") {
    return `
      <svg class="product-svg" viewBox="0 0 120 120">
        <circle cx="38" cy="34" r="14" fill="none" stroke="${color1}" stroke-width="7"></circle>
        <circle cx="82" cy="34" r="14" fill="none" stroke="${color2}" stroke-width="7"></circle>
        <path d="M38 48 C38 70 52 72 52 90" fill="none" stroke="${color1}" stroke-width="5" stroke-linecap="round"></path>
        <path d="M82 48 C82 70 68 72 68 90" fill="none" stroke="${color2}" stroke-width="5" stroke-linecap="round"></path>
        <path d="M52 90 H68 V104 H52 Z" fill="rgba(255,255,255,0.08)" stroke="${color1}" stroke-width="3"></path>
      </svg>
    `;
  }

  if (type === "watch") {
    return `
      <svg class="product-svg" viewBox="0 0 120 120">
        <rect x="45" y="6" width="30" height="18" rx="8" fill="${color2}" opacity="0.85"></rect>
        <rect x="35" y="22" width="50" height="76" rx="18" fill="rgba(255,255,255,0.06)" stroke="${color1}" stroke-width="4"></rect>
        <circle cx="60" cy="60" r="18" fill="${color2}" opacity="0.85"></circle>
        <rect x="45" y="96" width="30" height="18" rx="8" fill="${color2}" opacity="0.85"></rect>
      </svg>
    `;
  }

  return `
    <svg class="product-svg" viewBox="0 0 120 120">
      <rect x="26" y="26" width="68" height="68" rx="18" fill="rgba(255,255,255,0.06)" stroke="${color1}" stroke-width="4"></rect>
      <circle cx="60" cy="60" r="16" fill="${color2}"></circle>
    </svg>
  `;
}

function productVisualHTML(product) {
  return `
    <div class="product-visual-common">
      <div class="light-strip"></div>
      ${getProductSVG(product.type, product.color1, product.color2)}
    </div>
  `;
}
