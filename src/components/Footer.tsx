"use client";

import { useState, useEffect } from "react";
import { business, settings } from "@/config/business";

// ── Official Brand SVGs ──────────────────────────────────────────────────────
const InstagramSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-footer-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#f09433" />
        <stop offset="25%"  stopColor="#e6683c" />
        <stop offset="50%"  stopColor="#dc2743" />
        <stop offset="75%"  stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-footer-grad)" />
    <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="white" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
  </svg>
);

const GoogleGLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const WhatsAppSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.833L.057 23.5l5.817-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.359-.214-3.72.974.994-3.63-.234-.374A9.82 9.82 0 0 1 2.182 12c0-5.424 4.394-9.818 9.818-9.818S21.818 6.576 21.818 12c0 5.424-4.394 9.818-9.818 9.818z" />
  </svg>
);

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-primary)",
        color:           "rgba(250, 246, 239, 0.8)",
        paddingTop:      "4.5rem",
        paddingBottom:   "2rem",
        borderTop:       "1px solid rgba(200, 135, 42, 0.2)",
      }}
    >
      <div className="container-max" style={{ padding: "0 1.5rem" }}>
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  width:           "42px",
                  height:          "42px",
                  borderRadius:    "50%",
                  backgroundColor: "var(--color-secondary)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontSize:        "1.25rem",
                  boxShadow:       "0 2px 8px rgba(0,0,0,0.25)",
                }}
                aria-hidden="true"
              >
                ☕
              </span>
              <div>
                <span
                  style={{
                    fontFamily:    "var(--font-display)",
                    fontWeight:    700,
                    fontSize:      "1.35rem",
                    color:         "#FAF6EF",
                    letterSpacing: "-0.01em",
                    display:       "block",
                    lineHeight:    1.1,
                  }}
                >
                  {business.name}
                </span>
                <span
                  style={{
                    fontSize:      "0.68rem",
                    color:         "var(--color-secondary)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight:    600,
                  }}
                >
                  Cafe &amp; Restaurant
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(250, 246, 239, 0.7)", margin: 0, maxWidth: "290px" }}>
              {business.tagline}<br />{business.subTagline}
            </p>

            {/* Verified Google Review Pill Badge */}
            <a
              href={business.contact.googleReviewsUrl || business.contact.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-google-review-badge"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "0.75rem",
                backgroundColor: "rgba(250, 246, 239, 0.08)",
                border:          "1px solid rgba(250, 246, 239, 0.15)",
                borderRadius:    "var(--radius-md)",
                padding:         "0.65rem 1rem",
                textDecoration:  "none",
                maxWidth:        "260px",
                transition:      "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(250, 246, 239, 0.15)";
                el.style.borderColor = "var(--color-secondary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                el.style.borderColor = "rgba(250, 246, 239, 0.15)";
              }}
            >
              <div
                style={{
                  width:           "32px",
                  height:          "32px",
                  backgroundColor: "#fff",
                  borderRadius:    "50%",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  flexShrink:      0,
                }}
              >
                <GoogleGLogo />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ color: "#FFD085", fontSize: "0.9rem" }}>★★★★★</span>
                  <strong style={{ color: "#FAF6EF", fontSize: "0.9rem" }}>{business.rating}</strong>
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(250, 246, 239, 0.6)" }}>
                  {business.reviewCount}+ Google Reviews
                </div>
              </div>
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
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
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { href: "#hero",     label: "Home"     },
                  { href: "#about",    label: "About Us" },
                  { href: "#menu",     label: "Our Menu" },
                  { href: "#gallery",  label: "Gallery"  },
                  { href: "#location", label: "Location" },
                  { href: "#contact",  label: "Contact"  },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(href);
                      }}
                      style={{
                        color:          "rgba(250, 246, 239, 0.7)",
                        textDecoration: "none",
                        fontSize:       "0.9rem",
                        transition:     "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-secondary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250, 246, 239, 0.7)")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* What We Serve Column */}
          <div>
            <h4
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
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Artisan Coffee & Hot Brews", "Cold Concentrates & Shakes", "Steamed Dimsums & Wok Chinese", "Pastas & Continental Plates", "Gourmet Desserts"].map((c) => (
                <li key={c} style={{ color: "rgba(250, 246, 239, 0.7)", fontSize: "0.9rem" }}>
                  {c}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "1.25rem" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--color-secondary)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.06em", display: "block", marginBottom: "0.35rem" }}>
                Hours of Operation
              </span>
              <p style={{ fontSize: "0.875rem", color: "rgba(250, 246, 239, 0.7)", margin: 0, lineHeight: 1.5 }}>
                Monday – Sunday<br />10:45 AM – 10:30 PM
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4
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
              Visit &amp; Contact
            </h4>

            <address
              style={{
                fontStyle:    "normal",
                color:        "rgba(250, 246, 239, 0.7)",
                fontSize:     "0.875rem",
                lineHeight:   1.65,
                marginBottom: "1rem",
              }}
            >
              <strong style={{ color: "#FAF6EF" }}>Opposite Amity University</strong><br />
              Khasra 359, Ground Floor, Nizampur, Malhour,<br />
              Lucknow, Uttar Pradesh – 226010
            </address>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {business.contact.phone && (
                <a
                  href={`tel:${business.contact.phone.replace(/\s/g, "")}`}
                  style={{
                    color:          "rgba(250, 246, 239, 0.8)",
                    textDecoration: "none",
                    fontSize:       "0.875rem",
                    transition:     "color 0.2s ease",
                    display:        "inline-flex",
                    alignItems:     "center",
                    gap:            "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-secondary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250, 246, 239, 0.8)")}
                >
                  <span>📞</span> {business.contact.phone}
                </a>
              )}
              {business.contact.email && (
                <a
                  href={`mailto:${business.contact.email}`}
                  style={{
                    color:          "rgba(250, 246, 239, 0.8)",
                    textDecoration: "none",
                    fontSize:       "0.875rem",
                    transition:     "color 0.2s ease",
                    display:        "inline-flex",
                    alignItems:     "center",
                    gap:            "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-secondary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250, 246, 239, 0.8)")}
                >
                  <span>✉️</span> {business.contact.email}
                </a>
              )}
            </div>

            {/* Social Icons Bar */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              {/* Instagram */}
              <a
                href={business.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cafora House on Instagram"
                id="footer-ig-link"
                style={{
                  width:           "38px",
                  height:          "38px",
                  borderRadius:    "50%",
                  backgroundColor: "rgba(250, 246, 239, 0.08)",
                  border:          "1px solid rgba(250, 246, 239, 0.15)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(225, 48, 108, 0.25)";
                  el.style.borderColor = "#E1306C";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                  el.style.borderColor = "rgba(250, 246, 239, 0.15)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <InstagramSVG />
              </a>

              {/* WhatsApp */}
              {business.contact.whatsapp && (
                <a
                  href={`https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent("Hi! I would like to inquire about Cafora House opposite Amity University.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Cafora House on WhatsApp"
                  id="footer-whatsapp-link"
                  style={{
                    width:           "38px",
                    height:          "38px",
                    borderRadius:    "50%",
                    backgroundColor: "rgba(250, 246, 239, 0.08)",
                    border:          "1px solid rgba(250, 246, 239, 0.15)",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    textDecoration:  "none",
                    transition:      "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "rgba(37, 211, 102, 0.25)";
                    el.style.borderColor = "#25D366";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                    el.style.borderColor = "rgba(250, 246, 239, 0.15)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <WhatsAppSVG />
                </a>
              )}

              {/* Google Maps Directions */}
              <a
                href={business.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cafora House on Google Maps"
                id="footer-maps-link"
                style={{
                  width:           "38px",
                  height:          "38px",
                  borderRadius:    "50%",
                  backgroundColor: "rgba(250, 246, 239, 0.08)",
                  border:          "1px solid rgba(250, 246, 239, 0.15)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                  fontSize:        "1.1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(234, 67, 53, 0.25)";
                  el.style.borderColor = "#EA4335";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                  el.style.borderColor = "rgba(250, 246, 239, 0.15)";
                  el.style.transform = "translateY(0)";
                }}
              >
                📍
              </a>

              {/* Zomato Order */}
              <a
                href={business.contact.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order from Cafora House on Zomato"
                id="footer-zomato-link"
                style={{
                  width:           "38px",
                  height:          "38px",
                  borderRadius:    "50%",
                  backgroundColor: "rgba(250, 246, 239, 0.08)",
                  border:          "1px solid rgba(250, 246, 239, 0.15)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                  fontSize:        "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(229, 43, 31, 0.25)";
                  el.style.borderColor = "#E52B1F";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                  el.style.borderColor = "rgba(250, 246, 239, 0.15)";
                  el.style.transform = "translateY(0)";
                }}
              >
                🍽️
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Agency Credit */}
        <div
          style={{
            display:        "flex",
            flexWrap:       "wrap",
            justifyContent: "space-between",
            alignItems:     "center",
            paddingTop:     "1.75rem",
            borderTop:      "1px solid rgba(250, 246, 239, 0.1)",
            gap:            "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(250, 246, 239, 0.5)", margin: 0 }}>
            © {year} {business.name}. All rights reserved.
          </p>

          {settings.agencyCredit.show && (
            <p style={{ fontSize: "0.8125rem", color: "rgba(250, 246, 239, 0.5)", margin: 0 }}>
              Crafted with precision by{" "}
              <span style={{ color: "var(--color-secondary)", fontWeight: 600 }}>
                {settings.agencyCredit.name}
              </span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
