"use client";

import { useState, useEffect, useCallback } from "react";
import { business, settings } from "@/config/business";

const navLinks = [
  { href: "#hero",     label: "Home"     },
  { href: "#about",    label: "About"    },
  { href: "#menu",     label: "Menu"     },
  { href: "#gallery",  label: "Gallery"  },
  { href: "#location", label: "Location" },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 40);

    // If near the top, active is "hero" (Home)
    if (scrollY < 240) {
      setActiveSection("hero");
      return;
    }

    const sections = ["contact", "location", "gallery", "menu", "about", "hero"];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 120;
        if (scrollY >= top) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 72;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  const isLightNav = scrolled || mobileOpen;
  const logoTextColor = isLightNav ? "var(--color-primary)" : "#FAF6EF";
  const logoSubColor = isLightNav ? "var(--color-secondary)" : "rgba(255,208,133,0.9)";
  const linkTextColor = isLightNav ? "var(--color-text-mid)" : "rgba(250,246,239,0.9)";

  return (
    <header
      role="banner"
      style={{
        position:        "fixed",
        top:             0,
        left:            0,
        right:           0,
        zIndex:          1000,
        transition:      "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundColor: isLightNav ? "rgba(250, 246, 239, 0.96)" : "transparent",
        backdropFilter:  isLightNav ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: isLightNav ? "blur(16px) saturate(180%)" : "none",
        borderBottom:    isLightNav ? "1px solid rgba(44, 24, 16, 0.08)" : "1px solid transparent",
        boxShadow:       isLightNav ? "0 4px 24px rgba(44, 24, 16, 0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth:       "1200px",
          margin:         "0 auto",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        isLightNav ? "0.75rem 1.5rem" : "1.1rem 1.5rem",
          transition:     "padding 0.3s ease",
          gap:            "1.5rem",
        }}
      >
        {/* ── Brand Logo (Left) ── */}
        <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center" }}>
          <a
            href="#hero"
            aria-label={`${business.name} — return to top`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "0.75rem",
              textDecoration: "none",
              cursor:         "pointer",
            }}
          >
            <span
              style={{
                width:           "38px",
                height:          "38px",
                borderRadius:    "50%",
                backgroundColor: isLightNav ? "var(--color-primary)" : "var(--color-secondary)",
                color:           isLightNav ? "var(--color-secondary)" : "#fff",
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "center",
                fontSize:        "1.05rem",
                flexShrink:      0,
                transition:      "all 0.3s ease",
                boxShadow:       isLightNav
                  ? "0 2px 8px rgba(44,24,16,0.12)"
                  : "0 2px 14px rgba(0,0,0,0.35)",
              }}
              aria-hidden="true"
            >
              ☕
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    700,
                  fontSize:      "1.25rem",
                  color:         logoTextColor,
                  letterSpacing: "-0.01em",
                  lineHeight:    1.1,
                  transition:    "color 0.3s ease",
                  textShadow:    isLightNav ? "none" : "0 1px 8px rgba(0,0,0,0.5)",
                }}
              >
                {business.name}
              </span>
              <span
                style={{
                  fontFamily:    "var(--font-body)",
                  fontSize:      "0.68rem",
                  fontWeight:    600,
                  color:         logoSubColor,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition:    "color 0.3s ease",
                }}
              >
                Cafe &amp; Restaurant
              </span>
            </div>
          </a>
        </div>

        {/* ── Desktop Nav Links (Center) ── */}
        <nav
          aria-label="Primary navigation"
          className="hidden-mobile"
          style={{
            alignItems:     "center",
            justifyContent: "center",
            gap:            "2rem",
          }}
        >
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                aria-current={isActive ? "page" : undefined}
                style={{
                  color:          isActive ? "var(--color-secondary)" : linkTextColor,
                  textShadow:     isLightNav ? "none" : "0 1px 4px rgba(0,0,0,0.5)",
                  fontWeight:     isActive ? 700 : 500,
                  transition:     "all 0.2s ease",
                  fontSize:       "0.9375rem",
                  textDecoration: "none",
                  position:       "relative",
                  padding:        "0.25rem 0",
                  whiteSpace:     "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-secondary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = linkTextColor;
                  }
                }}
              >
                {label}
                {isActive && (
                  <span
                    style={{
                      position:        "absolute",
                      bottom:          "-2px",
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
            flex:           "0 0 auto",
            display:        "flex",
            alignItems:     "center",
            gap:            "0.875rem",
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
                gap:             "0.5rem",
                padding:         "0.6rem 1.35rem",
                fontSize:        "0.875rem",
                fontWeight:      700,
                borderRadius:    "999px",
                textDecoration:  "none",
                whiteSpace:      "nowrap",
                backgroundColor: isLightNav ? "var(--color-primary)" : "var(--color-secondary)",
                color:           isLightNav ? "var(--color-secondary)" : "#fff",
                border:          "1.5px solid transparent",
                transition:      "all 0.25s ease",
                boxShadow:       isLightNav
                  ? "0 2px 10px rgba(44,24,16,0.18)"
                  : "0 2px 14px rgba(200,135,42,0.4)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "var(--color-secondary)";
                el.style.color = "#fff";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = isLightNav ? "var(--color-primary)" : "var(--color-secondary)";
                el.style.color = isLightNav ? "var(--color-secondary)" : "#fff";
                el.style.transform = "translateY(0)";
              }}
            >
              <span>🍽️</span> Order Online
            </a>
          )}
        </div>

        {/* ── Mobile Hamburger Toggle ── */}
        <button
          className="show-mobile hamburger-btn"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            background:   "transparent",
            border:       "none",
            cursor:       "pointer",
            padding:      "0.5rem",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width:          "24px",
              height:         "18px",
              display:        "flex",
              flexDirection:  "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                display:         "block",
                width:           "100%",
                height:          "2px",
                backgroundColor: isLightNav || mobileOpen ? "var(--color-primary)" : "#FAF6EF",
                borderRadius:    "2px",
                transition:      "all 0.3s ease",
                transformOrigin: "left center",
                transform:       mobileOpen ? "rotate(45deg) translate(0px, -1px)" : "none",
              }}
            />
            <span
              style={{
                display:         "block",
                width:           "100%",
                height:          "2px",
                backgroundColor: isLightNav || mobileOpen ? "var(--color-primary)" : "#FAF6EF",
                borderRadius:    "2px",
                transition:      "all 0.2s ease",
                opacity:         mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display:         "block",
                width:           "100%",
                height:          "2px",
                backgroundColor: isLightNav || mobileOpen ? "var(--color-primary)" : "#FAF6EF",
                borderRadius:    "2px",
                transition:      "all 0.3s ease",
                transformOrigin: "left center",
                transform:       mobileOpen ? "rotate(-45deg) translate(0px, 1px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          style={{
            backgroundColor:    "rgba(250, 246, 239, 0.98)",
            backdropFilter:     "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop:          "1px solid rgba(44, 24, 16, 0.08)",
            borderBottom:       "1px solid rgba(44, 24, 16, 0.12)",
            padding:            "1.25rem 1.5rem 1.75rem",
            display:            "flex",
            flexDirection:      "column",
            boxShadow:          "0 12px 36px rgba(44, 24, 16, 0.16)",
          }}
        >
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                style={{
                  color:          isActive ? "var(--color-secondary)" : "var(--color-primary)",
                  textDecoration: "none",
                  fontWeight:     isActive ? 700 : 500,
                  fontSize:       "1.1rem",
                  padding:        "0.9rem 0",
                  borderBottom:   "1px solid rgba(44, 24, 16, 0.06)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                  transition:     "color 0.2s ease",
                }}
              >
                <span>{label}</span>
                {isActive && (
                  <span
                    style={{
                      width:           "8px",
                      height:          "8px",
                      borderRadius:    "50%",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  />
                )}
              </a>
            );
          })}

          <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {settings.showOrderOnline && (
              <a
                href={business.contact.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  gap:             "0.5rem",
                  backgroundColor: "var(--color-secondary)",
                  color:           "#fff",
                  fontWeight:      700,
                  fontSize:        "0.95rem",
                  padding:         "0.875rem",
                  borderRadius:    "999px",
                  textDecoration:  "none",
                  letterSpacing:   "0.02em",
                  boxShadow:       "0 4px 16px rgba(200,135,42,0.3)",
                }}
              >
                <span>🍽️</span> Order on Zomato ↗
              </a>
            )}

            {settings.showPhoneButton && business.contact.phone && (
              <a
                href={`tel:${business.contact.phone.replace(/\s/g, "")}`}
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  gap:             "0.5rem",
                  backgroundColor: "transparent",
                  color:           "var(--color-primary)",
                  border:          "1.5px solid var(--color-primary)",
                  fontWeight:      600,
                  fontSize:        "0.9rem",
                  padding:         "0.75rem",
                  borderRadius:    "999px",
                  textDecoration:  "none",
                }}
              >
                <span>📞</span> Call: {business.contact.phone}
              </a>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
