// ============================================================
// BUSINESS CONFIGURATION FILE — CAFORA HOUSE
// ============================================================
// To adapt this website for a different business, update the
// values in this file and swap out images in public/images/.
// ============================================================

export const business = {
  name: "Cafora House",
  tagline: "Coffee that Speaks.",
  subTagline: "Chinese & Continental that Impress.",
  description:
    "Lucknow's most inviting cafe — where artisan coffee meets bold Chinese and Continental cuisine. A warm, beautifully designed space opposite Amity University, perfect for every mood and occasion.",
  category: "Cafe & Restaurant",
  cuisines: ["Coffee", "Chinese", "Continental", "Fast Food"],
  rating: 4.9,
  reviewCount: 84,

  address: {
    line1: "Khasra 359, Ground Floor, Nizampur, Malhour, Chinhat",
    line2: "Zone 14, Near Amity University, Adarsh Market",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226010",
    country: "India",
    landmark: "Opposite Amity University",
    full: "Khasra 359, Ground Floor, Nizampur, Malhour, Adarsh Market, Near Amity University, Lucknow – 226010, UP",
  },

  contact: {
    phone: "+91 99999 88888",
    whatsapp: "919999988888",
    email: "contact@caforahouse.com",
    instagram: "https://www.instagram.com/caforahouse/",
    facebook: "",
    googleMaps: "https://maps.app.goo.gl/K24mWeWmL7gCHx94A",
    directionsUrl: "https://maps.app.goo.gl/K24mWeWmL7gCHx94A",
    orderOnline: "https://www.zomato.com/lucknow/cafora-house-gomti-nagar/order",
    googleReviewsUrl: "https://maps.app.goo.gl/K24mWeWmL7gCHx94A",
  },

  hours: [
    { day: "Monday",    open: "10:45 AM", close: "10:30 PM", closed: false },
    { day: "Tuesday",   open: "10:45 AM", close: "10:30 PM", closed: false },
    { day: "Wednesday", open: "10:45 AM", close: "10:30 PM", closed: false },
    { day: "Thursday",  open: "10:45 AM", close: "10:30 PM", closed: false },
    { day: "Friday",    open: "10:45 AM", close: "10:30 PM", closed: false },
    { day: "Saturday",  open: "10:45 AM", close: "10:30 PM", closed: false },
    { day: "Sunday",    open: "10:45 AM", close: "10:30 PM", closed: false },
  ],
};

// ============================================================
// BRANDING — Visual Design Tokens
// ============================================================
export const branding = {
  theme: "warm-coffeehouse",

  colors: {
    // Primary deep coffee brown — drawn from the logo and dark wood in the interior
    primary:    "#2C1810",
    // Warm amber/gold — drawn from pendant lights and decorative accents
    secondary:  "#C8872A",
    // Forest green — drawn from the velvet seating
    accent:     "#2C4A3E",
    // Warm cream — logo background and overall warmth
    background: "#FAF6EF",
    // Off-cream for section alternation
    surface:    "#F0E8D8",
    // Text colours
    textDark:   "#1A0F08",
    textMid:    "#4A3728",
    textLight:  "#8C7062",
    // Burgundy — from booth seating
    burgundy:   "#6B2D3E",
  },

  typography: {
    displayFont: "'Playfair Display', Georgia, serif",
    bodyFont:    "'Inter', 'Helvetica Neue', sans-serif",
    monoFont:    "'DM Mono', monospace",
  },

  logo: {
    text: "Cafora House",
    icon: "☕",
    // Replace with actual logo image path when available:
    imagePath: "",
  },
};

// ============================================================
// MENU — Verified categories and representative items
// ============================================================
export const menu = {
  categories: [
    {
      id: "hot-brews",
      name: "Hot Brews",
      emoji: "☕",
      description: "Artisan coffees crafted to perfection",
      image: "/images/real_coffee.jpg",
      items: [
        { name: "Café Latte",       description: "Velvety steamed milk with a double espresso shot", price: "" },
        { name: "Cappuccino",       description: "Perfect espresso-to-milk ratio with microfoam art", price: "" },
        { name: "Café Americano",   description: "Bold espresso shots with hot water", price: "" },
        { name: "Hot Chocolate",    description: "Rich Belgian cocoa with steamed whole milk", price: "" },
        { name: "Masala Chai",      description: "Spiced Indian tea brewed with ginger and cardamom", price: "" },
      ],
    },
    {
      id: "cold-drinks",
      name: "Cold Beverages",
      emoji: "🧊",
      description: "Refreshing cold sips for warm days",
      image: "/images/real_beverages.jpg",
      items: [
        { name: "Cold Brew",        description: "12-hour cold-steeped smooth coffee concentrate", price: "" },
        { name: "Iced Latte",       description: "Espresso over ice with cold milk", price: "" },
        { name: "Caramel Biscoff Shake", description: "Rich blended shake topped with lotus biscoff", price: "" },
        { name: "Specialty Coolers", description: "Refreshing layered iced coolers and mocktails", price: "" },
      ],
    },
    {
      id: "chinese",
      name: "Chinese",
      emoji: "🥢",
      description: "Bold wok-tossed flavours that impress",
      image: "/images/real_chinese.jpg",
      items: [
        { name: "Dimsums (Steamed)",       description: "Fresh silken dumplings served in bamboo steamer with spicy red dip", price: "" },
        { name: "Chilli Paneer (Dry/Gravy)", description: "Crispy paneer tossed in tangy, spicy Manchurian peppers", price: "" },
        { name: "Veg Hakka Noodles",       description: "Stir-fried wok noodles with crunchy seasonal vegetables", price: "" },
        { name: "Chicken Manchurian",      description: "Tender chicken bites in rich garlic-soy Manchurian sauce", price: "" },
        { name: "Veg Fried Rice",          description: "Aromatic wok-tossed basmati with garden fresh herbs", price: "" },
        { name: "Crispy Spring Rolls",     description: "Golden rolls filled with savory vegetables", price: "" },
      ],
    },
    {
      id: "continental",
      name: "Continental",
      emoji: "🍽️",
      description: "Classic Western plates crafted with culinary finesse",
      image: "/images/real_continental.jpg",
      items: [
        { name: "Pasta Arrabiata",         description: "Penne in bold spicy tomato sauce with garlic and fresh basil", price: "" },
        { name: "Creamy White Sauce Pasta", description: "Penne tossed in silky parmesan & herb cream sauce with toasted garlic bread", price: "" },
        { name: "Grilled Herb Chicken",    description: "Tender herb-marinated fillet served with roasted sides", price: "" },
        { name: "Club Sandwich",           description: "Triple-decker layered with crispy veggies and signature spreads", price: "" },
        { name: "Crispy Cheesy Fries",     description: "Golden crisp french fries loaded with melted cheese sauce", price: "" },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      emoji: "🍰",
      description: "Sweet endings to every great meal",
      image: "/images/real_dessert.jpg",
      items: [
        { name: "Brownie with Ice Cream",  description: "Warm fudge brownie with a scoop of creamy vanilla", price: "" },
        { name: "Chocolate Lava Cake",     description: "Molten center warm chocolate cake", price: "" },
        { name: "New York Cheesecake",     description: "Classic smooth cream cheesecake with fruit coulis", price: "" },
      ],
    },
  ],
};

// ============================================================
// GALLERY — 100% Real Verified Venue & Food Photos
// ============================================================
export const gallery = [
  { src: "/images/real_hero.jpg",        alt: "Cafora House espresso bar and cafe interior with marble tables and velvet chairs", caption: "Artisan Coffee Bar & Lounge" },
  { src: "/images/real_coffee.jpg",      alt: "Authentic latte art in ceramic cup on marble table with fresh flower vase", caption: "Handcrafted Latte Art" },
  { src: "/images/real_chinese.jpg",     alt: "Steamed dimsums in authentic bamboo basket with spicy dipping sauce", caption: "Steamed Dimsums in Bamboo Steamer" },
  { src: "/images/real_continental.jpg", alt: "Silken creamy white sauce penne pasta with garlic toast and black olives", caption: "Silken White Sauce Pasta" },
  { src: "/images/real_beverages.jpg",   alt: "Signature Lotus Biscoff caramel shake on marble table", caption: "Signature Biscoff Shake" },
  { src: "/images/real_mocktails.jpg",   alt: "Layered craft mocktails and specialty coolers in stem glasses", caption: "Craft Mocktails & Coolers" },
  { src: "/images/real_ambiance.jpg",    alt: "Cafora House ambient evening interior with chandelier and velvet seating", caption: "Cozy Evening Ambiance" },
  { src: "/images/real_daylight.jpg",    alt: "Sunlit dining area with green velvet armchairs and wide street view", caption: "Daylight Dining Area" },
];

// ============================================================
// HIGHLIGHTS — Key selling points
// ============================================================
export const highlights = [
  {
    icon: "☕",
    title: "Artisan Coffee",
    description: "Each cup crafted with single-origin beans and skilled latte artistry.",
  },
  {
    icon: "🥢",
    title: "Bold Chinese",
    description: "Wok-fired noodles, dumplings, and Manchurian classics that truly impress.",
  },
  {
    icon: "🍽️",
    title: "Continental Comfort",
    description: "Western plates made with care — from pasta to grilled mains.",
  },
  {
    icon: "✨",
    title: "Premium Ambiance",
    description: "A beautifully designed interior with warm lighting for every occasion.",
  },
];

// ============================================================
// AMENITIES — Verified on-site facilities
// ============================================================
export const amenities = [
  { icon: "☕", label: "Artisan Coffee Bar" },
  { icon: "📶", label: "High-Speed Wi-Fi" },
  { icon: "❄️", label: "Full Air Conditioning" },
  { icon: "🛵", label: "Takeaway & Delivery" },
  { icon: "🎓", label: "Opposite Amity University" },
  { icon: "✨", label: "Cozy Velvet Seating" },
];

// ============================================================
// SETTINGS — Toggle visible sections and features
// ============================================================
export const settings = {
  showReservation: false,
  showPrices: false,
  showMap: true,
  showPhoneButton: true,
  showWhatsApp: true,
  showEmail: true,
  showOrderOnline: true,
  agencyCredit: {
    show: true,
    name: "Probfixora",
    url: "",
  },
};
