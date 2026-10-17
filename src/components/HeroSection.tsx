"use client";

import Image from "next/image";
import { business, settings } from "@/config/business";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Welcome to Cafora House"
      style={{
        position:   "relative",
        minHeight:  "100svh",
        display:    "flex",
        alignItems: "center",
        overflow:   "hidden",
      }}
    >
      {/* Hero Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/real_hero.jpg"
          alt="Cafora House authentic cafe interior and espresso bar with amber pendant lights, green velvet seating, and marble tables"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          sizes="100vw"
        />
        {/* Gradient overlay — dark at top for nav, fades to darker at bottom for text */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: `
              linear-gradient(
                to bottom,
                rgba(26,15,8,0.55) 0%,
                rgba(26,15,8,0.30) 40%,
                rgba(26,15,8,0.65) 75%,
                rgba(26,15,8,0.85) 100%
              )
            `,
          }}
        />
        {/* Subtle warm vignette */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(44,24,16,0.5) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container-max"
        style={{
          position:    "relative",
          zIndex:      1,
          padding:     "8rem 1.5rem 5rem",
          width:       "100%",
          maxWidth:    "900px",
        }}
      >
        {/* Category Badge */}
        <div
          className="animate-fade-up"
          style={{
            display:         "inline-flex",
            alignItems:      "center",
            gap:             "0.5rem",
            backgroundColor: "rgba(200,135,42,0.18)",
            border:          "1px solid rgba(200,135,42,0.45)",
            backdropFilter:  "blur(8px)",
            borderRadius:    "999px",
            padding:         "0.4rem 1rem",
            marginBottom:    "1.5rem",
          }}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD085", fontWeight: 600 }}>
            ⭐ {business.rating} · {business.reviewCount} Reviews · Cafe
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily:  "var(--font-display)",
            fontWeight:  700,
            fontSize:    "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight:  1.05,
            color:       "#FAF6EF",
            marginBottom: "0.5rem",
            textShadow:  "0 2px 16px rgba(0,0,0,0.4)",
          }}
        >
          {business.name}
        </h1>

        {/* Taglines */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontFamily:   "var(--font-display)",
            fontStyle:    "italic",
            fontSize:     "clamp(1.15rem, 2.5vw, 1.65rem)",
            color:        "#FFD085",
            marginBottom: "0.25rem",
            textShadow:   "0 1px 8px rgba(0,0,0,0.4)",
          }}
        >
          {business.tagline}
        </p>
        <p
          className="animate-fade-up delay-300"
          style={{
            fontFamily:   "var(--font-display)",
            fontStyle:    "italic",
            fontSize:     "clamp(1rem, 2vw, 1.4rem)",
            color:        "rgba(255,208,133,0.8)",
            marginBottom: "1.75rem",
            textShadow:   "0 1px 8px rgba(0,0,0,0.4)",
          }}
        >
          {business.subTagline}
        </p>

        {/* Cuisine tags */}
        <div
          className="animate-fade-up delay-300"
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
        >
          {business.cuisines.map((c) => (
            <span
              key={c}
              style={{
                backgroundColor: "rgba(250,246,239,0.12)",
                border:          "1px solid rgba(250,246,239,0.25)",
                backdropFilter:  "blur(4px)",
                color:           "rgba(250,246,239,0.9)",
                borderRadius:    "999px",
                padding:         "0.25rem 0.875rem",
                fontSize:        "0.8125rem",
                fontWeight:      500,
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
        >
          {settings.showOrderOnline && (
            <a
              href={business.contact.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-order-btn"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "0.5rem",
                backgroundColor: "var(--color-secondary)",
                color:           "#fff",
                fontWeight:      700,
                fontSize:        "0.9375rem",
                padding:         "1rem 2.25rem",
                borderRadius:    "999px",
                textDecoration:  "none",
                border:          "2px solid var(--color-secondary)",
                transition:      "all 0.3s ease",
                boxShadow:       "0 4px 20px rgba(200,135,42,0.4)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D4A843";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4A843";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-secondary)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-secondary)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              🍽️ Order Online
            </a>
          )}
          <a
            href={business.contact.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-directions-btn"
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "0.5rem",
              backgroundColor: "rgba(250,246,239,0.12)",
              color:           "#FAF6EF",
              fontWeight:      600,
              fontSize:        "0.9375rem",
              padding:         "1rem 2rem",
              borderRadius:    "999px",
              textDecoration:  "none",
              border:          "2px solid rgba(250,246,239,0.4)",
              backdropFilter:  "blur(8px)",
              transition:      "all 0.3s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(250,246,239,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(250,246,239,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            📍 Get Directions
          </a>
        </div>

        {/* Location pill */}
        <div
          className="animate-fade-up delay-500"
          style={{
            marginTop:  "2.5rem",
            display:    "inline-flex",
            alignItems: "center",
            gap:        "0.5rem",
            color:      "rgba(250,246,239,0.65)",
            fontSize:   "0.875rem",
          }}
        >
          <span>📍</span>
          <span>{business.address.landmark}, {business.address.city}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position:       "absolute",
          bottom:         "2rem",
          left:           "50%",
          transform:      "translateX(-50%)",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          gap:            "0.375rem",
          animation:      "fadeIn 1s ease 1s both",
          zIndex:         1,
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(250,246,239,0.5)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(250,246,239,0.5), transparent)" }} />
      </div>
    </section>
  );
}
