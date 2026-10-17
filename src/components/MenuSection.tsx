"use client";

import { useState } from "react";
import Image from "next/image";
import { menu, settings } from "@/config/business";

// Veg / Non-Veg dot indicators (FSSAI standard)
const VegDot = () => (
  <span
    aria-label="Vegetarian"
    title="Vegetarian"
    style={{
      display:       "inline-flex",
      alignItems:    "center",
      justifyContent:"center",
      width:         "14px",
      height:        "14px",
      border:        "1.5px solid #2E7D32",
      borderRadius:  "2px",
      flexShrink:    0,
      marginTop:     "2px",
    }}
  >
    <span style={{ width: "8px", height: "8px", backgroundColor: "#2E7D32", borderRadius: "50%" }} />
  </span>
);

const vegItems = new Set([
  "Café Latte","Cappuccino","Café Americano","Hot Chocolate","Masala Chai",
  "Cold Brew","Iced Latte","Caramel Biscoff Shake","Specialty Coolers",
  "Dimsums (Steamed)","Chilli Paneer (Dry/Gravy)","Veg Hakka Noodles","Veg Fried Rice","Crispy Spring Rolls",
  "Pasta Arrabiata","Creamy White Sauce Pasta","Club Sandwich","Crispy Cheesy Fries",
  "Brownie with Ice Cream","Chocolate Lava Cake","New York Cheesecake",
]);

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0].id);
  const currentCategory = menu.categories.find((c) => c.id === activeCategory)!;

  // Natural aspect ratio for each category image based on actual photo dimensions
  const aspectRatios: Record<string, string> = {
    "hot-brews":   "3/4",  // coffee.jpg is 1200×1600 (portrait)
    "cold-drinks": "3/4",  // beverages.jpg is 1200×1600 (portrait)
    "chinese":     "1/1",  // chinese.jpg is 1600×1600 (square)
    "continental": "9/16", // mocktails.jpg is 900×1600
    "desserts":    "9/16", // dessert.jpg is 360×640
  };

  const currentAspect = aspectRatios[activeCategory] ?? "4/3";

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      style={{ backgroundColor: "var(--color-surface)", overflow: "hidden" }}
    >
      <div className="section-padding container-max">
        {/* Label */}
        <p className="section-label" style={{ textAlign: "center", marginBottom: "1rem" }}>
          What We Serve
        </p>

        {/* Heading */}
        <h2
          id="menu-heading"
          style={{
            fontFamily:   "var(--font-display)",
            fontWeight:   700,
            fontSize:     "clamp(2rem, 4vw, 3rem)",
            textAlign:    "center",
            color:        "var(--color-primary)",
            marginBottom: "0.75rem",
          }}
        >
          Our Menu
        </h2>

        <div className="ornament-line" style={{ maxWidth: "360px", margin: "0 auto 3rem" }}>
          <span>🍽️</span>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="menu-tabs-row"
          style={{
            display:        "flex",
            gap:            "0.5rem",
            flexWrap:       "wrap",
            justifyContent: "center",
            marginBottom:   "3rem",
          }}
        >
          {menu.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`tabpanel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className="menu-tab-btn"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "0.375rem",
                padding:         "0.625rem 1.25rem",
                borderRadius:    "999px",
                border:          activeCategory === cat.id
                  ? "2px solid var(--color-secondary)"
                  : "2px solid rgba(44,24,16,0.15)",
                backgroundColor: activeCategory === cat.id
                  ? "var(--color-primary)"
                  : "transparent",
                color:           activeCategory === cat.id
                  ? "var(--color-secondary)"
                  : "var(--color-text-mid)",
                fontWeight:      activeCategory === cat.id ? 700 : 500,
                fontSize:        "0.875rem",
                cursor:          "pointer",
                transition:      "all 0.25s ease",
                fontFamily:      "var(--font-body)",
              }}
            >
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Panel — SPLIT LAYOUT */}
        <div
          key={activeCategory}
          role="tabpanel"
          id={`tabpanel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          {/* Category showcase: natural-aspect image + info side-by-side */}
          <div className="menu-showcase-grid">
            {/* ── Image Column: full image, no aggressive crop ── */}
            <div
              className="menu-image-col"
              style={{
                position:        "relative",
                borderRadius:    "var(--radius-xl)",
                overflow:        "hidden",
                aspectRatio:     currentAspect,
                maxHeight:       "420px",
                backgroundColor: "var(--color-primary)",
                boxShadow:       "0 8px 32px rgba(44,24,16,0.18)",
              }}
            >
              {/* Blurred ambient background to fill letterbox gaps */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  zIndex:     0,
                  overflow:   "hidden",
                  filter:     "blur(20px) brightness(0.45) saturate(1.2)",
                  transform:  "scale(1.1)",
                }}
              >
                <Image
                  src={currentCategory.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="600px"
                />
              </div>

              {/* Main image — object-contain ensures full dish visibility */}
              <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                <Image
                  src={currentCategory.image}
                  alt={`${currentCategory.name} at Cafora House`}
                  fill
                  style={{
                    objectFit:      "contain",
                    objectPosition: "center",
                    padding:        "12px",
                  }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Category badge overlay */}
              <div
                style={{
                  position:       "absolute",
                  top:            "1rem",
                  left:           "1rem",
                  zIndex:         2,
                  backgroundColor:"rgba(44,24,16,0.75)",
                  backdropFilter: "blur(8px)",
                  borderRadius:   "999px",
                  padding:        "0.35rem 0.875rem",
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "0.375rem",
                  border:         "1px solid rgba(200,135,42,0.4)",
                }}
              >
                <span style={{ fontSize: "1rem" }}>{currentCategory.emoji}</span>
                <span
                  style={{
                    fontFamily:    "var(--font-display)",
                    fontWeight:    700,
                    fontSize:      "0.8125rem",
                    color:         "var(--color-secondary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {currentCategory.name}
                </span>
              </div>
            </div>

            {/* ── Info Column ── */}
            <div
              style={{
                display:       "flex",
                flexDirection: "column",
                justifyContent:"center",
                gap:           "1.25rem",
              }}
            >
              {/* Category title */}
              <div>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }} aria-hidden="true">
                  {currentCategory.emoji}
                </div>
                <h3
                  style={{
                    fontFamily:   "var(--font-display)",
                    fontWeight:   700,
                    fontSize:     "clamp(1.6rem, 3vw, 2.2rem)",
                    color:        "var(--color-primary)",
                    marginBottom: "0.5rem",
                    lineHeight:   1.1,
                  }}
                >
                  {currentCategory.name}
                </h3>
                <p
                  style={{
                    color:      "var(--color-text-mid)",
                    fontSize:   "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {currentCategory.description}
                </p>
              </div>

              {/* Specialty badges */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {[
                  activeCategory === "hot-brews"    && "✦ Single Origin",
                  activeCategory === "hot-brews"    && "✦ Artisan Roasted",
                  activeCategory === "cold-drinks"  && "✦ Freshly Blended",
                  activeCategory === "cold-drinks"  && "✦ Seasonal Specials",
                  activeCategory === "chinese"      && "✦ Wok Tossed",
                  activeCategory === "chinese"      && "✦ Chef Recommended",
                  activeCategory === "continental"  && "✦ Freshly Baked",
                  activeCategory === "continental"  && "✦ House Specials",
                  activeCategory === "desserts"     && "✦ Freshly Made",
                  activeCategory === "desserts"     && "✦ Sweet Indulgence",
                ]
                  .filter(Boolean)
                  .map((badge) => (
                    <span
                      key={badge as string}
                      style={{
                        backgroundColor: "rgba(200,135,42,0.1)",
                        border:          "1px solid rgba(200,135,42,0.25)",
                        borderRadius:    "999px",
                        padding:         "0.3rem 0.875rem",
                        fontSize:        "0.8rem",
                        color:           "var(--color-secondary)",
                        fontWeight:      600,
                      }}
                    >
                      {badge as string}
                    </span>
                  ))}
              </div>

              {/* Item count */}
              <div
                style={{
                  backgroundColor: "rgba(44,24,16,0.05)",
                  borderRadius:    "var(--radius-md)",
                  padding:         "0.875rem 1.25rem",
                  borderLeft:      "3px solid var(--color-secondary)",
                }}
              >
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-mid)", margin: 0 }}>
                  <strong style={{ color: "var(--color-primary)" }}>
                    {currentCategory.items.length} Signature Items
                  </strong>
                  {" "}available in this category
                </p>
              </div>
            </div>
          </div>

          {/* Items grid */}
          <div className="menu-items-grid">
            {currentCategory.items.map((item, idx) => {
              const isVeg = vegItems.has(item.name);
              return (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius:    "var(--radius-md)",
                    padding:         "1.125rem 1.375rem",
                    border:          "1px solid rgba(200,135,42,0.1)",
                    display:         "flex",
                    alignItems:      "flex-start",
                    gap:             "0.875rem",
                    transition:      "transform 0.25s ease, box-shadow 0.25s ease",
                    animationDelay:  `${idx * 0.05}s`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform  = "translateY(-2px)";
                    el.style.boxShadow  = "0 8px 24px rgba(44,24,16,0.1)";
                    el.style.borderColor = "rgba(200,135,42,0.25)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform  = "translateY(0)";
                    el.style.boxShadow  = "none";
                    el.style.borderColor = "rgba(200,135,42,0.1)";
                  }}
                >
                  {/* Veg / Non-Veg dot */}
                  <div style={{ paddingTop: "2px", flexShrink: 0 }}>
                    <VegDot />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily:   "var(--font-display)",
                        fontWeight:   700,
                        fontSize:     "1rem",
                        color:        "var(--color-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.name}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>

                  {settings.showPrices && item.price && (
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize:   "1rem",
                        color:      "var(--color-secondary)",
                        flexShrink: 0,
                        paddingTop: "2px",
                      }}
                    >
                      ₹{item.price}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Note about ordering */}
        <p
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            fontSize:  "0.875rem",
            color:     "var(--color-text-light)",
          }}
        >
          Menu subject to seasonal availability. For the full menu and pricing, visit us or{" "}
          <a
            href="https://www.zomato.com/lucknow/cafora-house-gomti-nagar/order"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-secondary)", textDecoration: "none", fontWeight: 600 }}
          >
            order online ↗
          </a>
        </p>
      </div>
    </section>
  );
}
