"use client";

import { useState, useEffect, useCallback } from "react";
import { business, settings } from "@/config/business";

const navLinks = [
  { href: "#about",    label: "About"    },
  { href: "#menu",     label: "Menu"     },
  { href: "#gallery",  label: "Gallery"  },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
    const sections = navLinks.map(l => l.href.replace("#", ""));
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const logoColor  = scrolled ? "var(--color-primary)" : "#FAF6EF";
  const logoShadow = scrolled ? "none" : "0 1px 6px rgba(0,0,0,0.5)";
  const linkColor  = scrolled ? "var(--color-text-mid)" : "rgba(255,255,255,0.88)";
  const linkShadow = scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.4)";

  return (
    <>
      <header
        role="banner"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          1000,
          transition:      "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          backgroundColor: scrolled ? "rgba(255,255,255,0.93)" : "transparent",
          backdropFilter:  scrolled ? "blur(18px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
          borderBottom:    scrolled ? "1px solid rgba(44,24,16,0.08)" : "1px solid transparent",
          boxShadow:       scrolled ? "0 4px 30px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div
          style={{
            maxWidth:       "1200px",
            margin:         "0 auto",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            padding:        "0.875rem 1.25rem",
            gap:            "1.5rem",
          }}
        >
          {/* ── Logo (Left) ── */}
          <div style={{ flex: "1 1 0%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <a
              href="#"
              aria-label={`${business.name} — back to top`}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.625rem",
                textDecoration: "none",
                flexShrink:     0,
              }}
            >
              <span
                style={{
                  width:           "36px",
                  height:          "36px",
                  borderRadius:    "50%",
                  backgroundColor: scrolled ? "var(--color-primary)" : "rgba(200,135,42,0.95)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontSize:        "0.95rem",
                  flexShrink:      0,
                  transition:      "background-color 0.4s ease",
                  boxShadow:       scrolled ? "none" : "0 2px 12px rgba(0,0,0,0.3)",
                }}
                aria-hidden="true"
              >
                ☕
              </span>
              <span
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    700,
                  fontSize:      "1.2rem",
                  color:         logoColor,
                  letterSpacing: "-0.01em",
                  transition:    "color 0.4s ease",
                  textShadow:    logoShadow,
                  whiteSpace:    "nowrap",
                }}
              >
                {business.name}
              </span>
            </a>
          </div>

          {/* ── Desktop Nav Links (Center) ── */}
          <nav
            aria-label="Primary navigation"
            className="hidden-mobile"
            style={{
              alignItems:     "center",
              justifyContent: "center",
              gap:            "2.25rem",
            }}
          >
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    color:          isActive ? "var(--color-secondary)" : linkColor,
                    textShadow:     isActive ? "none" : linkShadow,
                    fontWeight:     isActive ? 700 : 500,
                    transition:     "color 0.3s ease",
                    fontSize:       "0.9375rem",
                    textDecoration: "none",
                    position:       "relative",
                    paddingBottom:  "2px",
                    whiteSpace:     "nowrap",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-secondary)";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color = linkColor;
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = linkShadow;
                    }
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      style={{
                        position:        "absolute",
                        bottom:          "-4px",
                        left:            0,
                        right:           0,
                        height:          "2px",
                        backgroundColor: "var(--color-secondary)",
                        borderRadius:    "999px",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop CTA (Right) ── */}
          <div
            className="hidden-mobile"
            style={{
              flex:           "1 1 0%",
              alignItems:     "center",
              justifyContent: "flex-end",
              gap:            "0.75rem",
            }}
          >
            {settings.showOrderOnline && (
              <a
                href={business.contact.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-order-btn"
                style={{
                  display:         "inline-flex",
                  alignItems:      "center",
                  padding:         "0.625rem 1.4rem",
                  fontSize:        "0.875rem",
                  fontWeight:      700,
                  borderRadius:    "999px",
                  textDecoration:  "none",
                  whiteSpace:      "nowrap",
                  backgroundColor: scrolled ? "var(--color-primary)" : "var(--color-secondary)",
                  color:           "#fff",
                  border:          "2px solid transparent",
                  transition:      "all 0.3s ease",
                  boxShadow:       scrolled
                    ? "0 2px 12px rgba(44,24,16,0.2)"
                    : "0 2px 16px rgba(200,135,42,0.4)",
                }}
              >
                Order Online
              </a>
            )}
          </div>

          {/* ── Hamburger (Mobile only) ── */}
          <button
            className="show-mobile hamburger-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(v => !v)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display:         "block",
                  width:           "22px",
                  height:          "2px",
                  backgroundColor: scrolled || mobileOpen ? "var(--color-primary)" : "#FAF6EF",
                  borderRadius:    "2px",
                  transition:      "all 0.3s ease",
                  transformOrigin: "center",
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                    : "scaleX(0)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            style={{
              backgroundColor:    "rgba(255,255,255,0.98)",
              backdropFilter:     "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop:          "1px solid rgba(44,24,16,0.08)",
              padding:            "1.25rem 1.25rem 1.5rem",
              display:            "flex",
              flexDirection:      "column",
              gap:                "0",
            }}
          >
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  style={{
                    color:          isActive ? "var(--color-secondary)" : "var(--color-text-mid)",
                    textDecoration: "none",
                    fontWeight:     isActive ? 700 : 500,
                    fontSize:       "1.0625rem",
                    padding:        "0.875rem 0",
                    borderBottom:   "1px solid rgba(44,24,16,0.06)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "space-between",
                    transition:     "color 0.2s ease",
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      style={{
                        width:           "6px",
                        height:          "6px",
                        borderRadius:    "50%",
                        backgroundColor: "var(--color-secondary)",
                      }}
                    />
                  )}
                </a>
              );
            })}

            {settings.showOrderOnline && (
              <a
                href={business.contact.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop:       "1.25rem",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  backgroundColor: "var(--color-primary)",
                  color:           "var(--color-secondary)",
                  fontWeight:      700,
                  fontSize:        "1rem",
                  padding:         "1rem",
                  borderRadius:    "12px",
                  textDecoration:  "none",
                  letterSpacing:   "0.02em",
                }}
              >
                🍽️ Order Online ↗
              </a>
            )}
          </nav>
        )}
      </header>
    </>
  );
}
