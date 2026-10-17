"use client";

import { business, highlights } from "@/config/business";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
      style={{ backgroundColor: "var(--color-bg)", overflow: "hidden" }}
    >
      <div className="container-max">
        {/* Section label */}
        <p className="section-label" style={{ textAlign: "center", marginBottom: "1rem" }}>
          Our Story
        </p>

        {/* Section heading */}
        <h2
          id="about-heading"
          style={{
            fontFamily:   "var(--font-display)",
            fontWeight:   700,
            fontSize:     "clamp(2rem, 4vw, 3rem)",
            textAlign:    "center",
            color:        "var(--color-primary)",
            marginBottom: "1.25rem",
            lineHeight:   1.15,
          }}
        >
          Where Every Cup Tells a Story
        </h2>

        {/* Ornament */}
        <div className="ornament-line" style={{ maxWidth: "400px", margin: "0 auto 2rem" }}>
          <span style={{ fontSize: "1.25rem" }}>☕</span>
        </div>

        {/* Description */}
        <p
          style={{
            maxWidth:     "680px",
            margin:       "0 auto 4rem",
            textAlign:    "center",
            fontSize:     "1.0625rem",
            lineHeight:   1.8,
            color:        "var(--color-text-mid)",
          }}
        >
          {business.description}
          {" "}Nestled in the heart of Lucknow&apos;s university belt, we&apos;ve built a space that feels as good as it tastes — warm lighting, velvet seating, artisan coffee, and a kitchen that takes Chinese and Continental cooking seriously.
        </p>

        {/* Highlights grid */}
        <div className="about-highlights-grid">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              style={{
                backgroundColor: "var(--color-surface)",
                borderRadius:    "var(--radius-lg)",
                padding:         "2rem 1.5rem",
                textAlign:       "center",
                border:          "1px solid rgba(200,135,42,0.12)",
                transition:      "transform 0.3s ease, box-shadow 0.3s ease",
                animationDelay:  `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width:           "56px",
                  height:          "56px",
                  borderRadius:    "50%",
                  backgroundColor: "var(--color-primary)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontSize:        "1.5rem",
                  margin:          "0 auto 1.25rem",
                }}
                aria-hidden="true"
              >
                {h.icon}
              </div>
              <h3
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1.125rem",
                  color:        "var(--color-primary)",
                  marginBottom: "0.625rem",
                }}
              >
                {h.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-text-light)" }}>
                {h.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="about-stats-grid"
          style={{
            marginTop:       "3.5rem",
            backgroundColor: "var(--color-primary)",
            borderRadius:    "var(--radius-xl)",
            padding:         "2.5rem 2rem",
          }}
        >
          {[
            { value: `${business.rating}⭐`,           label: "Google Rating"    },
            { value: `${business.reviewCount}+`,        label: "Happy Reviews"    },
            { value: business.cuisines.length + "+",    label: "Cuisine Types"    },
            { value: "Open Daily",                       label: business.hours[0].open + " onwards" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "clamp(1.5rem, 3vw, 2.25rem)",
                  color:        "var(--color-secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(250,246,239,0.65)", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
