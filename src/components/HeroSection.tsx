"use client";

import Image from "next/image";
import { business } from "@/config/business";

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Welcome to Cafora House"
      style={{
        position:   "relative",
        width:      "100%",
        minHeight:  "100svh",
        display:    "flex",
        alignItems: "center",
        overflow:   "hidden",
        margin:     0,
        padding:    0,
      }}
    >
      {/* ── Background Image with Refined Editorial Grading ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/real_hero.jpg"
          alt="Cafora House authentic cafe interior and espresso bar with amber pendant lights, green velvet seating, and marble tables"
          fill
          priority
          quality={92}
          style={{
            objectFit:      "cover",
            objectPosition: "center 42%",
          }}
          sizes="100vw"
        />

        {/* Sophisticated dual gradient overlay: preserves ambient warmth while guaranteeing readability */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: `
              linear-gradient(
                to bottom,
                rgba(26, 15, 8, 0.72) 0%,
                rgba(26, 15, 8, 0.45) 30%,
                rgba(26, 15, 8, 0.68) 70%,
                rgba(26, 15, 8, 0.92) 100%
              )
            `,
          }}
        />

        {/* Subtle radial vignette to focus attention on the content */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "radial-gradient(circle at center, transparent 35%, rgba(20, 10, 5, 0.55) 100%)",
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div
        className="container-max"
        style={{
          position:    "relative",
          zIndex:      1,
          padding:     "clamp(4.75rem, 8.5vh, 6.25rem) 1.5rem clamp(1.25rem, 3vh, 2.25rem)",
          width:       "100%",
          maxWidth:    "860px",
          margin:      "0 auto",
        }}
      >
        {/* Verified Rating Pill */}
        <div
          className="animate-fade-up"
          style={{
            display:         "inline-flex",
            alignItems:      "center",
            gap:             "0.5rem",
            backgroundColor: "rgba(200, 135, 42, 0.22)",
            border:          "1px solid rgba(255, 208, 133, 0.45)",
            backdropFilter:  "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius:    "999px",
            padding:         "0.3rem 0.9rem",
            marginBottom:    "1rem",
          }}
        >
          <span
            style={{
              fontSize:      "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color:         "#FFD085",
              fontWeight:    700,
              fontFamily:    "var(--font-body)",
              display:       "inline-flex",
              alignItems:    "center",
              gap:           "0.35rem",
            }}
          >
            <span>★</span> {business.rating} Rating · {business.reviewCount}+ Verified Reviews · Opposite Amity
          </span>
        </div>

        {/* Cafe Name */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    700,
            fontSize:      "clamp(2.5rem, 5.8vw, 4.4rem)",
            lineHeight:    1.05,
            color:         "#FAF6EF",
            marginBottom:  "0.4rem",
            letterSpacing: "-0.015em",
            textShadow:    "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {business.name}
        </h1>

        {/* Compelling Headline */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontFamily:   "var(--font-display)",
            fontStyle:    "italic",
            fontSize:     "clamp(1.1rem, 2.1vw, 1.5rem)",
            color:        "#FFD085",
            marginBottom: "0.85rem",
            lineHeight:   1.3,
            textShadow:   "0 1px 10px rgba(0,0,0,0.4)",
          }}
        >
          {business.tagline} {business.subTagline}
        </p>

        {/* Short, Natural Description of Cuisine & Atmosphere */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontSize:     "clamp(0.925rem, 1.3vw, 1.05rem)",
            lineHeight:   1.6,
            color:        "rgba(250, 246, 239, 0.9)",
            maxWidth:     "680px",
            marginBottom: "1.5rem",
            textShadow:   "0 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          Lucknow’s welcoming cafe retreat opposite Amity University — where artisan coffee meets authentic Chinese wok dishes and comforting Continental plates in an intimate, velvet-seated lounge.
        </p>

        {/* ── Primary & Secondary CTAs ── */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display:     "flex",
            gap:         "1rem",
            flexWrap:    "wrap",
            alignItems:  "center",
            marginBottom: "1.75rem",
          }}
        >
          {/* Primary CTA: "Explore Our Menu" */}
          <a
            href="#menu"
            id="hero-explore-menu-btn"
            onClick={(e) => scrollToSection(e, "menu")}
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "0.6rem",
              backgroundColor: "var(--color-secondary)",
              color:           "#FAF6EF",
              fontWeight:      700,
              fontSize:        "0.95rem",
              padding:         "0.875rem 2rem",
              borderRadius:    "999px",
              textDecoration:  "none",
              border:          "2px solid var(--color-secondary)",
              transition:      "all 0.25s ease",
              boxShadow:       "0 6px 24px rgba(200, 135, 42, 0.4)",
              cursor:          "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--color-gold)";
              el.style.borderColor = "var(--color-gold)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 30px rgba(212, 168, 67, 0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--color-secondary)";
              el.style.borderColor = "var(--color-secondary)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 6px 24px rgba(200, 135, 42, 0.4)";
            }}
          >
            <span>🍽️</span> Explore Our Menu
          </a>

          {/* Secondary CTA: "Find Us" */}
          <a
            href="#location"
            id="hero-find-us-btn"
            onClick={(e) => scrollToSection(e, "location")}
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "0.5rem",
              backgroundColor: "rgba(250, 246, 239, 0.12)",
              color:           "#FAF6EF",
              fontWeight:      600,
              fontSize:        "0.95rem",
              padding:         "0.875rem 1.85rem",
              borderRadius:    "999px",
              textDecoration:  "none",
              border:          "1.5px solid rgba(250, 246, 239, 0.45)",
              backdropFilter:  "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              transition:      "all 0.25s ease",
              cursor:          "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(250, 246, 239, 0.24)";
              el.style.borderColor = "#FAF6EF";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(250, 246, 239, 0.12)";
              el.style.borderColor = "rgba(250, 246, 239, 0.45)";
              el.style.transform = "translateY(0)";
            }}
          >
            <span>📍</span> Find Us
          </a>
        </div>

        {/* ── Key Highlights Ribbon (Compact) ── */}
        <div
          className="animate-fade-up delay-500"
          style={{
            display:     "flex",
            alignItems:  "center",
            gap:         "0.75rem",
            flexWrap:    "wrap",
            paddingTop:  "0.5rem",
            borderTop:   "1px solid rgba(250, 246, 239, 0.15)",
          }}
        >
          {[
            { icon: "☕", label: "Artisan Coffee" },
            { icon: "🥢", label: "Authentic Chinese" },
            { icon: "🍽️", label: "Classic Continental" },
            { icon: "🕒", label: "Open Daily 10:45 AM – 10:30 PM" },
          ].map((pill) => (
            <div
              key={pill.label}
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "0.4rem",
                color:           "rgba(250, 246, 239, 0.8)",
                fontSize:        "0.8125rem",
                fontWeight:      500,
                backgroundColor: "rgba(26, 15, 8, 0.4)",
                padding:         "0.25rem 0.65rem",
                borderRadius:    "6px",
                border:          "1px solid rgba(250, 246, 239, 0.1)",
              }}
            >
              <span>{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
