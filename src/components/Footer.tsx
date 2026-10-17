"use client";

import { useState, useEffect } from "react";
import { business, settings } from "@/config/business";

// ── Official SVG Icons ───────────────────────────────────────────────────────

const InstagramSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#f09433" />
        <stop offset="25%"  stopColor="#e6683c" />
        <stop offset="50%"  stopColor="#dc2743" />
        <stop offset="75%"  stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad-footer)" />
    <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="white" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
  </svg>
);

const GoogleMapsPinSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
    <circle cx="12" cy="9" r="2.5" fill="white" />
  </svg>
);

// ── Authentic Google Reviews Badge ──────────────────────────────────────────

const GoogleGLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GoogleStars = ({ rating }: { rating: number }) => {
  const full    = Math.floor(rating);
  const partial = rating - full;
  const stars   = 5;

  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {Array.from({ length: stars }).map((_, i) => {
        const fill =
          i < full
            ? "#FBBC04"
            : i === full && partial > 0
            ? `url(#partial-${i})`
            : "rgba(255,255,255,0.2)";
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {i === full && partial > 0 && (
              <defs>
                <linearGradient id={`partial-${i}`} x1="0%" x2="100%">
                  <stop offset={`${partial * 100}%`} stopColor="#FBBC04" />
                  <stop offset={`${partial * 100}%`} stopColor="rgba(255,255,255,0.2)" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill={fill}
            />
          </svg>
        );
      })}
    </div>
  );
};

const GoogleReviewBadge = () => (
  <a
    href={(business.contact as Record<string, string>).googleReviewsUrl || business.contact.googleMaps}
    target="_blank"
    rel="noopener noreferrer"
    id="google-reviews-badge"
    style={{
      display:         "flex",
      alignItems:      "center",
      gap:             "0.875rem",
      backgroundColor: "rgba(255,255,255,0.06)",
      border:          "1px solid rgba(255,255,255,0.1)",
      borderRadius:    "var(--radius-md)",
      padding:         "0.875rem 1.125rem",
      textDecoration:  "none",
      transition:      "all 0.25s ease",
      maxWidth:        "280px",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.backgroundColor = "rgba(255,255,255,0.1)";
      el.style.borderColor = "rgba(200,135,42,0.35)";
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.backgroundColor = "rgba(255,255,255,0.06)";
      el.style.borderColor = "rgba(255,255,255,0.1)";
    }}
  >
    {/* Google G */}
    <div
      style={{
        width:           "44px",
        height:          "44px",
        backgroundColor: "#fff",
        borderRadius:    "50%",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        flexShrink:      0,
        boxShadow:       "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <GoogleGLogo />
    </div>

    {/* Rating info */}
    <div>
      {/* Stars row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
        <GoogleStars rating={business.rating} />
        <span
          style={{
            fontFamily: "'Roboto', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize:   "1rem",
            color:      "#FAF6EF",
            lineHeight: 1,
          }}
        >
          {business.rating}
        </span>
      </div>
      {/* Source label */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <span
          style={{
            fontFamily: "'Roboto', 'Inter', sans-serif",
            fontSize:   "0.72rem",
            color:      "rgba(250,246,239,0.55)",
            letterSpacing: "0.02em",
          }}
        >
          {business.reviewCount}+ Google Reviews
        </span>
      </div>
    </div>
  </a>
);

// ── Footer Component ─────────────────────────────────────────────────────────

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-primary)",
        color:           "rgba(250,246,239,0.75)",
        paddingTop:      "4rem",
        paddingBottom:   "2rem",
      }}
    >
      <div className="container-max" style={{ padding: "0 1.5rem" }}>

        {/* Top row */}
        <div className="footer-grid">
          {/* Brand + Google Reviews */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <span
                style={{
                  width:           "40px",
                  height:          "40px",
                  borderRadius:    "50%",
                  backgroundColor: "var(--color-secondary)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontSize:        "1.25rem",
                }}
                aria-hidden="true"
              >
                ☕
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize:   "1.25rem",
                  color:      "#FAF6EF",
                }}
              >
                {business.name}
              </span>
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "260px", color: "rgba(250,246,239,0.65)", marginBottom: "1.25rem" }}>
              {business.tagline}<br />{business.subTagline}
            </p>

            {/* Genuine Google Reviews badge */}
            <GoogleReviewBadge />
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "0.875rem",
                fontWeight:    700,
                color:         "var(--color-secondary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom:  "1.25rem",
              }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", padding: 0, margin: 0 }}>
                {[
                  { href: "#about",    label: "About Us"  },
                  { href: "#menu",     label: "Our Menu"  },
                  { href: "#gallery",  label: "Gallery"   },
                  { href: "#location", label: "Location"  },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{
                        color:          "rgba(250,246,239,0.65)",
                        textDecoration: "none",
                        fontSize:       "0.9rem",
                        transition:     "color 0.2s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--color-secondary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,246,239,0.65)")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* What We Serve */}
          <div>
            <h3
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "0.875rem",
                fontWeight:    700,
                color:         "var(--color-secondary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom:  "1.25rem",
              }}
            >
              What We Serve
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", padding: 0, margin: 0 }}>
              {business.cuisines.map((c) => (
                <li key={c} style={{ color: "rgba(250,246,239,0.65)", fontSize: "0.9rem" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "0.875rem",
                fontWeight:    700,
                color:         "var(--color-secondary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom:  "1.25rem",
              }}
            >
              Contact
            </h3>

            <address
              style={{
                fontStyle:    "normal",
                color:        "rgba(250,246,239,0.65)",
                fontSize:     "0.875rem",
                lineHeight:   1.7,
                marginBottom: "1rem",
              }}
            >
              {business.address.landmark}<br />
              {business.address.city}, {business.address.state}
            </address>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {business.contact.phone && (
                <a
                  href={`tel:${business.contact.phone.replace(/\s/g, "")}`}
                  style={{
                    color:          "rgba(250,246,239,0.65)",
                    textDecoration: "none",
                    fontSize:       "0.875rem",
                    transition:     "color 0.2s ease",
                    display:        "flex",
                    alignItems:     "center",
                    gap:            "0.375rem",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,246,239,0.65)")}
                >
                  <span>📞</span> {business.contact.phone}
                </a>
              )}
              {business.contact.email && (
                <a
                  href={`mailto:${business.contact.email}`}
                  style={{
                    color:          "rgba(250,246,239,0.65)",
                    textDecoration: "none",
                    fontSize:       "0.875rem",
                    transition:     "color 0.2s ease",
                    display:        "flex",
                    alignItems:     "center",
                    gap:            "0.375rem",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,246,239,0.65)")}
                >
                  <span>✉️</span> {business.contact.email}
                </a>
              )}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              {/* Instagram — official SVG */}
              <a
                href={business.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram @caforahouse"
                id="footer-instagram"
                title="@caforahouse on Instagram"
                style={{
                  width:           "38px",
                  height:          "38px",
                  borderRadius:    "50%",
                  backgroundColor: "rgba(250,246,239,0.08)",
                  border:          "1px solid rgba(250,246,239,0.12)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(220,39,67,0.2)";
                  el.style.borderColor = "rgba(220,39,67,0.5)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(250,246,239,0.08)";
                  el.style.borderColor = "rgba(250,246,239,0.12)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <InstagramSVG />
              </a>

              {/* Google Maps — official pin SVG */}
              <a
                href={business.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Google Maps"
                id="footer-maps"
                title="Cafora House on Google Maps"
                style={{
                  width:           "38px",
                  height:          "38px",
                  borderRadius:    "50%",
                  backgroundColor: "rgba(250,246,239,0.08)",
                  border:          "1px solid rgba(250,246,239,0.12)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(234,67,53,0.2)";
                  el.style.borderColor = "rgba(234,67,53,0.5)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(250,246,239,0.08)";
                  el.style.borderColor = "rgba(250,246,239,0.12)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <GoogleMapsPinSVG />
              </a>

              {/* Zomato */}
              <a
                href={business.contact.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on Zomato"
                id="footer-zomato"
                title="Order from Cafora House on Zomato"
                style={{
                  width:           "38px",
                  height:          "38px",
                  borderRadius:    "50%",
                  backgroundColor: "rgba(250,246,239,0.08)",
                  border:          "1px solid rgba(250,246,239,0.12)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                  fontSize:        "1rem",
                  color:           "rgba(250,246,239,0.7)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(229,43,31,0.2)";
                  el.style.borderColor = "rgba(229,43,31,0.5)";
                  el.style.transform = "translateY(-2px)";
                  el.style.color = "#E52B1F";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(250,246,239,0.08)";
                  el.style.borderColor = "rgba(250,246,239,0.12)";
                  el.style.transform = "translateY(0)";
                  el.style.color = "rgba(250,246,239,0.7)";
                }}
              >
                🍽️
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display:        "flex",
            flexWrap:       "wrap",
            justifyContent: "space-between",
            alignItems:     "center",
            paddingTop:     "1.5rem",
            gap:            "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(250,246,239,0.4)", margin: 0 }}>
            © {year} {business.name}. All rights reserved.
          </p>
          {settings.agencyCredit.show && (
            <p style={{ fontSize: "0.8125rem", color: "rgba(250,246,239,0.4)", margin: 0 }}>
              Designed &amp; built by{" "}
              {settings.agencyCredit.url ? (
                <a
                  href={settings.agencyCredit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-secondary)", textDecoration: "none" }}
                >
                  {settings.agencyCredit.name}
                </a>
              ) : (
                <span style={{ color: "var(--color-secondary)" }}>{settings.agencyCredit.name}</span>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
