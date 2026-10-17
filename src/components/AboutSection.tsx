"use client";

import Image from "next/image";
import { business, highlights, amenities } from "@/config/business";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
      style={{ backgroundColor: "var(--color-bg)", overflow: "hidden" }}
    >
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Our Atmosphere &amp; Craft
          </p>
          <h2
            id="about-heading"
            style={{
              fontFamily:   "var(--font-display)",
              fontWeight:   700,
              fontSize:     "clamp(2.1rem, 4.5vw, 3.25rem)",
              color:        "var(--color-primary)",
              marginBottom: "1rem",
              lineHeight:   1.15,
            }}
          >
            Where Great Coffee Meets Good Company
          </h2>
          <div className="ornament-line" style={{ maxWidth: "340px", margin: "0 auto" }}>
            <span>☕</span>
          </div>
        </div>

        {/* ── Editorial Story Split: Real Photography + Narrative ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap:                 "3.5rem",
            alignItems:          "center",
            marginBottom:        "4.5rem",
          }}
        >
          {/* Left: Real Venue Showcase Composition */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position:     "relative",
                borderRadius: "var(--radius-xl)",
                overflow:     "hidden",
                boxShadow:    "0 12px 36px rgba(44, 24, 16, 0.16)",
                aspectRatio:  "4/3",
                border:       "1px solid rgba(200, 135, 42, 0.2)",
              }}
            >
              <Image
                src="/images/real_ambiance.jpg"
                alt="Cafora House warm evening ambiance with velvet chairs, chandeliers, and marble tables"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 550px"
              />
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to top, rgba(44,24,16,0.6) 0%, transparent 50%)",
                }}
              />
              {/* Badge on photo */}
              <div
                style={{
                  position:        "absolute",
                  bottom:          "1.25rem",
                  left:            "1.25rem",
                  backgroundColor: "rgba(250, 246, 239, 0.95)",
                  backdropFilter:  "blur(8px)",
                  padding:         "0.5rem 1rem",
                  borderRadius:    "999px",
                  display:         "inline-flex",
                  alignItems:      "center",
                  gap:             "0.5rem",
                  boxShadow:       "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>📍</span>
                <span
                  style={{
                    fontSize:   "0.8125rem",
                    fontWeight: 700,
                    color:      "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Opposite Amity University, Lucknow
                </span>
              </div>
            </div>

            {/* Small Inset Thumbnail: Real Latte Art */}
            <div
              className="hidden-mobile"
              style={{
                position:        "absolute",
                bottom:          "-1.75rem",
                right:           "-1.5rem",
                width:           "150px",
                height:          "150px",
                borderRadius:    "var(--radius-lg)",
                overflow:        "hidden",
                border:          "4px solid var(--color-bg)",
                boxShadow:       "0 8px 24px rgba(44, 24, 16, 0.2)",
                zIndex:          2,
              }}
            >
              <Image
                src="/images/real_coffee.jpg"
                alt="Authentic latte art in ceramic cup at Cafora House"
                fill
                style={{ objectFit: "cover" }}
                sizes="150px"
              />
            </div>
          </div>

          {/* Right: Narrative Story & Experience */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h3
              style={{
                fontFamily:   "var(--font-display)",
                fontWeight:   700,
                fontSize:     "clamp(1.5rem, 2.5vw, 2rem)",
                color:        "var(--color-primary)",
                lineHeight:   1.25,
              }}
            >
              A thoughtfully designed space for coffee lovers &amp; food enthusiasts.
            </h3>

            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-text-mid)" }}>
              Located right across from Amity University in Malhour, Chinhat, <strong>Cafora House</strong> was envisioned as a comforting everyday retreat. Whether you are catching up over espresso, gathering with college friends for steamed dimsums, or settling in with a laptop in our sunlit corner, the atmosphere feels naturally warm and effortless.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-text-mid)" }}>
              Our kitchen takes equal pride in precision beverages and savory comfort dishes. From single-origin espresso pulls and silky microfoam to authentic wok-tossed Hakka noodles and velvety white sauce pasta, every item is freshly prepared to order.
            </p>

            {/* Amenities Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
              {amenities.map((a) => (
                <span
                  key={a.label}
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border:          "1px solid rgba(200, 135, 42, 0.18)",
                    borderRadius:    "999px",
                    padding:         "0.35rem 0.85rem",
                    fontSize:        "0.8125rem",
                    color:           "var(--color-text-dark)",
                    fontWeight:      500,
                    display:         "inline-flex",
                    alignItems:      "center",
                    gap:             "0.35rem",
                  }}
                >
                  <span>{a.icon}</span>
                  <span>{a.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Highlights Grid ── */}
        <div className="about-highlights-grid">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              style={{
                backgroundColor: "var(--color-surface)",
                borderRadius:    "var(--radius-lg)",
                padding:         "1.85rem 1.5rem",
                textAlign:       "center",
                border:          "1px solid rgba(200, 135, 42, 0.15)",
                transition:      "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "var(--shadow-md)";
                el.style.borderColor = "rgba(200, 135, 42, 0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(200, 135, 42, 0.15)";
              }}
            >
              <div
                style={{
                  width:           "52px",
                  height:          "52px",
                  borderRadius:    "50%",
                  backgroundColor: "var(--color-primary)",
                  color:           "var(--color-secondary)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontSize:        "1.4rem",
                  margin:          "0 auto 1.15rem",
                  boxShadow:       "0 4px 12px rgba(44,24,16,0.15)",
                }}
                aria-hidden="true"
              >
                {h.icon}
              </div>
              <h4
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1.15rem",
                  color:        "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                {h.title}
              </h4>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-text-mid)", margin: 0 }}>
                {h.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Verified Trust & Stats Ribbon ── */}
        <div
          className="about-stats-grid"
          style={{
            marginTop:       "3rem",
            backgroundColor: "var(--color-primary)",
            borderRadius:    "var(--radius-xl)",
            padding:         "2.25rem 2rem",
            boxShadow:       "0 12px 36px rgba(44, 24, 16, 0.2)",
          }}
        >
          {[
            { value: `${business.rating} ★`,            label: "Google Guest Rating"    },
            { value: `${business.reviewCount}+`,         label: "Verified Reviews"       },
            { value: "10:45 AM – 10:30 PM",              label: "Open 7 Days a Week"      },
            { value: "Opposite Amity",                   label: "Prime Campus Location"  },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "clamp(1.4rem, 2.5vw, 2.1rem)",
                  color:        "var(--color-secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize:      "0.8125rem",
                  color:         "rgba(250, 246, 239, 0.75)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight:    500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
