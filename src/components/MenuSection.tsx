"use client";

import { useState } from "react";
import Image from "next/image";
import { menu, settings, business } from "@/config/business";

// FSSAI standard vegetarian / non-vegetarian indicator
const VegDot = ({ isVeg }: { isVeg: boolean }) => (
  <span
    aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    style={{
      display:        "inline-flex",
      alignItems:     "center",
      justifyContent: "center",
      width:          "15px",
      height:         "15px",
      border:         `1.5px solid ${isVeg ? "#2E7D32" : "#8B0000"}`,
      borderRadius:   "3px",
      flexShrink:     0,
      marginTop:      "3px",
      backgroundColor: "#fff",
    }}
  >
    <span
      style={{
        width:           "7px",
        height:          "7px",
        backgroundColor: isVeg ? "#2E7D32" : "#8B0000",
        borderRadius:    "50%",
      }}
    />
  </span>
);

// Verified non-veg items in existing menu
const nonVegItems = new Set([
  "Chicken Manchurian",
  "Grilled Herb Chicken",
]);

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0].id);
  const currentCategory = menu.categories.find((c) => c.id === activeCategory) || menu.categories[0];

  return (
    <section
      id="menu"
      className="section-padding"
      aria-labelledby="menu-heading"
      style={{ backgroundColor: "var(--color-surface)", overflow: "hidden" }}
    >
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Handcrafted Selection
          </p>
          <h2
            id="menu-heading"
            style={{
              fontFamily:   "var(--font-display)",
              fontWeight:   700,
              fontSize:     "clamp(2.1rem, 4.5vw, 3.25rem)",
              color:        "var(--color-primary)",
              marginBottom: "1rem",
              lineHeight:   1.15,
            }}
          >
            Explore Our Menu
          </h2>
          <div className="ornament-line" style={{ maxWidth: "340px", margin: "0 auto" }}>
            <span>🍽️</span>
          </div>
        </div>

        {/* ── Category Navigation Tabs ── */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="menu-tabs-row"
          style={{
            display:        "flex",
            gap:            "0.625rem",
            flexWrap:       "wrap",
            justifyContent: "center",
            marginBottom:   "3rem",
          }}
        >
          {menu.categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`tabpanel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className="menu-tab-btn"
                style={{
                  display:         "inline-flex",
                  alignItems:      "center",
                  gap:             "0.5rem",
                  padding:         "0.65rem 1.35rem",
                  borderRadius:    "999px",
                  border:          isSelected
                    ? "2px solid var(--color-primary)"
                    : "1.5px solid rgba(44, 24, 16, 0.15)",
                  backgroundColor: isSelected
                    ? "var(--color-primary)"
                    : "#fff",
                  color:           isSelected
                    ? "var(--color-secondary)"
                    : "var(--color-text-mid)",
                  fontWeight:      isSelected ? 700 : 500,
                  fontSize:        "0.9rem",
                  cursor:          "pointer",
                  transition:      "all 0.25s ease",
                  fontFamily:      "var(--font-body)",
                  boxShadow:       isSelected
                    ? "0 4px 14px rgba(44, 24, 16, 0.15)"
                    : "0 2px 6px rgba(0, 0, 0, 0.04)",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: "1.05rem" }}>{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* ── Active Category Showcase & Items Panel ── */}
        <div
          key={activeCategory}
          role="tabpanel"
          id={`tabpanel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          {/* Category Editorial Showcase Banner */}
          <div
            className="menu-showcase-grid"
            style={{
              backgroundColor: "#fff",
              borderRadius:    "var(--radius-xl)",
              border:          "1px solid rgba(200, 135, 42, 0.16)",
              boxShadow:       "var(--shadow-sm)",
              overflow:        "hidden",
              marginBottom:    "2.5rem",
            }}
          >
            {/* Real Dish Photography */}
            <div
              style={{
                position:  "relative",
                minHeight: "260px",
                height:    "100%",
                width:     "100%",
              }}
            >
              <Image
                src={currentCategory.image}
                alt={`${currentCategory.name} specialty at Cafora House`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to top, rgba(26,15,8,0.5) 0%, transparent 40%)",
                }}
              />
              <div
                style={{
                  position:        "absolute",
                  top:             "1rem",
                  left:            "1rem",
                  backgroundColor: "rgba(44, 24, 16, 0.82)",
                  backdropFilter:  "blur(8px)",
                  borderRadius:    "999px",
                  padding:         "0.35rem 0.9rem",
                  display:         "inline-flex",
                  alignItems:      "center",
                  gap:             "0.4rem",
                  border:          "1px solid rgba(200, 135, 42, 0.35)",
                }}
              >
                <span>{currentCategory.emoji}</span>
                <span
                  style={{
                    fontSize:      "0.78rem",
                    fontWeight:    700,
                    color:         "var(--color-secondary)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Featured Category
                </span>
              </div>
            </div>

            {/* Category Description & Craft Details */}
            <div
              style={{
                padding:        "2rem 2.25rem",
                display:        "flex",
                flexDirection:  "column",
                justifyContent: "center",
                gap:            "1rem",
              }}
            >
              <div>
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.25rem" }}>
                  {currentCategory.emoji}
                </span>
                <h3
                  style={{
                    fontFamily:   "var(--font-display)",
                    fontWeight:   700,
                    fontSize:     "clamp(1.6rem, 2.5vw, 2.1rem)",
                    color:        "var(--color-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {currentCategory.name}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-mid)", lineHeight: 1.65, margin: 0 }}>
                  {currentCategory.description}
                </p>
              </div>

              {/* Quality & Preparation Tags */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {[
                  activeCategory === "hot-brews"   && "Single-Origin Beans",
                  activeCategory === "hot-brews"   && "Precision Microfoam Art",
                  activeCategory === "cold-drinks" && "Freshly Blended",
                  activeCategory === "cold-drinks" && "Signature Thick Shakes",
                  activeCategory === "chinese"     && "Steamed in Bamboo Baskets",
                  activeCategory === "chinese"     && "Wok-Tossed on Order",
                  activeCategory === "continental" && "Silky Parmesan Sauces",
                  activeCategory === "continental" && "Toasted Herb Garlic Bread",
                  activeCategory === "desserts"    && "Decadent & Fresh",
                  activeCategory === "desserts"    && "Sweet Indulgence",
                ]
                  .filter(Boolean)
                  .map((tag) => (
                    <span
                      key={tag as string}
                      style={{
                        backgroundColor: "rgba(200, 135, 42, 0.1)",
                        border:          "1px solid rgba(200, 135, 42, 0.22)",
                        borderRadius:    "999px",
                        padding:         "0.3rem 0.8rem",
                        fontSize:        "0.78rem",
                        color:           "var(--color-secondary)",
                        fontWeight:      600,
                      }}
                    >
                      ✦ {tag as string}
                    </span>
                  ))}
              </div>

              <div
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  gap:             "0.5rem",
                  fontSize:        "0.85rem",
                  color:           "var(--color-text-light)",
                  borderTop:       "1px solid rgba(44, 24, 16, 0.08)",
                  paddingTop:      "0.85rem",
                }}
              >
                <span>✨</span>
                <span>{currentCategory.items.length} signature dishes &amp; drinks in this collection</span>
              </div>
            </div>
          </div>

          {/* ── Menu Items Grid ── */}
          <div className="menu-items-grid">
            {currentCategory.items.map((item) => {
              const isVeg = !nonVegItems.has(item.name);
              return (
                <article
                  key={item.name}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius:    "var(--radius-lg)",
                    padding:         "1.35rem 1.5rem",
                    border:          "1px solid rgba(200, 135, 42, 0.12)",
                    boxShadow:       "var(--shadow-sm)",
                    display:         "flex",
                    flexDirection:   "column",
                    gap:             "0.6rem",
                    transition:      "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = "var(--shadow-md)";
                    el.style.borderColor = "rgba(200, 135, 42, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "var(--shadow-sm)";
                    el.style.borderColor = "rgba(200, 135, 42, 0.12)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <VegDot isVeg={isVeg} />
                      <h4
                        style={{
                          fontFamily:   "var(--font-display)",
                          fontWeight:   700,
                          fontSize:     "1.05rem",
                          color:        "var(--color-primary)",
                          lineHeight:   1.3,
                          margin:       0,
                        }}
                      >
                        {item.name}
                      </h4>
                    </div>

                    {settings.showPrices && item.price && (
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize:   "1.05rem",
                          color:      "var(--color-secondary)",
                          flexShrink: 0,
                        }}
                      >
                        ₹{item.price}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize:   "0.875rem",
                      color:      "var(--color-text-mid)",
                      lineHeight: 1.55,
                      margin:     0,
                      paddingLeft:"1.55rem",
                    }}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* ── Order Online Callout Banner ── */}
        <div
          style={{
            marginTop:       "3.5rem",
            backgroundColor: "#fff",
            borderRadius:    "var(--radius-xl)",
            border:          "1px solid rgba(200, 135, 42, 0.2)",
            padding:         "2rem 2.25rem",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "space-between",
            flexWrap:        "wrap",
            gap:             "1.5rem",
            boxShadow:       "var(--shadow-sm)",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h4
              style={{
                fontFamily:   "var(--font-display)",
                fontWeight:   700,
                fontSize:     "1.25rem",
                color:        "var(--color-primary)",
                marginBottom: "0.35rem",
              }}
            >
              Enjoy Cafora House at Home or On the Go
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-mid)", margin: 0, lineHeight: 1.6 }}>
              Looking for fast takeaway or doorstep delivery? Browse our complete active menu with live item availability on Zomato.
            </p>
          </div>

          <a
            href={business.contact.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            id="menu-order-zomato-btn"
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "0.6rem",
              backgroundColor: "var(--color-primary)",
              color:           "var(--color-secondary)",
              fontWeight:      700,
              fontSize:        "0.925rem",
              padding:         "0.875rem 1.85rem",
              borderRadius:    "999px",
              textDecoration:  "none",
              border:          "2px solid var(--color-primary)",
              transition:      "all 0.25s ease",
              boxShadow:       "0 4px 16px rgba(44, 24, 16, 0.15)",
              whiteSpace:      "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--color-secondary)";
              el.style.borderColor = "var(--color-secondary)";
              el.style.color = "#fff";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--color-primary)";
              el.style.borderColor = "var(--color-primary)";
              el.style.color = "var(--color-secondary)";
              el.style.transform = "translateY(0)";
            }}
          >
            <span>🍽️</span> Order on Zomato ↗
          </a>
        </div>
      </div>
    </section>
  );
}
