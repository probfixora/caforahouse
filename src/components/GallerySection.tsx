"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { gallery, business } from "@/config/business";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : 0));
  }, []);
  const next = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % gallery.length : 0));
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, prev, next]);

  return (
    <>
      <section
        id="gallery"
        className="section-padding"
        aria-labelledby="gallery-heading"
        style={{ backgroundColor: "var(--color-bg)", overflow: "hidden" }}
      >
        <div className="container-max">
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              Visual Glimpse
            </p>
            <h2
              id="gallery-heading"
              style={{
                fontFamily:   "var(--font-display)",
                fontWeight:   700,
                fontSize:     "clamp(2.1rem, 4.5vw, 3.25rem)",
                color:        "var(--color-primary)",
                marginBottom: "1rem",
                lineHeight:   1.15,
              }}
            >
              The Cafora House Experience
            </h2>
            <div className="ornament-line" style={{ maxWidth: "340px", margin: "0 auto" }}>
              <span>📸</span>
            </div>
          </div>

          {/* ── Balanced Editorial Gallery Grid ── */}
          <div
            className="gallery-editorial-grid"
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap:                 "1.25rem",
              marginBottom:        "3.5rem",
            }}
          >
            {gallery.map((img, idx) => {
              // Curate editorial column spans for high aesthetic balance
              // Card 0: 8 cols (hero lounge), Card 1: 4 cols (latte art)
              // Card 2: 4 cols (dimsums), Card 3: 4 cols (pasta), Card 4: 4 cols (shake)
              // Card 5: 4 cols (mocktails), Card 6: 4 cols (evening), Card 7: 4 cols (daylight)
              const colSpan = idx === 0 ? "span 8" : idx === 1 ? "span 4" : "span 4";
              const aspect = idx === 0 ? "16/10" : "4/3";

              return (
                <button
                  key={img.src}
                  onClick={() => openLightbox(idx)}
                  aria-label={`Open photo in full view: ${img.caption}`}
                  className={`gallery-card gallery-card-${idx}`}
                  style={{
                    gridColumn:      colSpan,
                    position:        "relative",
                    borderRadius:    "var(--radius-lg)",
                    overflow:        "hidden",
                    aspectRatio:     aspect,
                    border:          "1px solid rgba(200, 135, 42, 0.15)",
                    padding:         0,
                    cursor:          "pointer",
                    backgroundColor: "var(--color-surface)",
                    boxShadow:       "var(--shadow-sm)",
                    transition:      "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "var(--shadow-lg)";
                    const imageEl = el.querySelector("img");
                    if (imageEl) imageEl.style.transform = "scale(1.05)";
                    const overlayEl = el.querySelector(".gallery-hover-overlay") as HTMLDivElement;
                    if (overlayEl) overlayEl.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "var(--shadow-sm)";
                    const imageEl = el.querySelector("img");
                    if (imageEl) imageEl.style.transform = "scale(1)";
                    const overlayEl = el.querySelector(".gallery-hover-overlay") as HTMLDivElement;
                    if (overlayEl) overlayEl.style.opacity = "0";
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{
                      objectFit:  "cover",
                      transition: "transform 0.5s ease",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />

                  {/* Gradient bottom shade */}
                  <div
                    style={{
                      position:   "absolute",
                      inset:      0,
                      background: "linear-gradient(to top, rgba(26,15,8,0.7) 0%, rgba(26,15,8,0.1) 40%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Caption pill always visible at bottom */}
                  <div
                    style={{
                      position:       "absolute",
                      bottom:         "1rem",
                      left:           "1rem",
                      right:          "1rem",
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "space-between",
                      pointerEvents:  "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:    "var(--font-display)",
                        fontWeight:    600,
                        fontSize:      idx === 0 ? "1.05rem" : "0.9rem",
                        color:         "#FAF6EF",
                        textShadow:    "0 1px 6px rgba(0,0,0,0.6)",
                        textAlign:     "left",
                      }}
                    >
                      {img.caption}
                    </span>
                    <span
                      style={{
                        backgroundColor: "rgba(250,246,239,0.25)",
                        backdropFilter:  "blur(6px)",
                        color:           "#FAF6EF",
                        fontSize:        "0.75rem",
                        padding:         "0.25rem 0.5rem",
                        borderRadius:    "4px",
                        fontWeight:      600,
                      }}
                    >
                      View ↗
                    </span>
                  </div>

                  {/* Interactive hover overlay */}
                  <div
                    className="gallery-hover-overlay"
                    style={{
                      position:        "absolute",
                      inset:           0,
                      backgroundColor: "rgba(44, 24, 16, 0.45)",
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      opacity:         0,
                      transition:      "opacity 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        width:           "48px",
                        height:          "48px",
                        borderRadius:    "50%",
                        backgroundColor: "var(--color-secondary)",
                        color:           "#fff",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        fontSize:        "1.25rem",
                        boxShadow:       "0 4px 16px rgba(0,0,0,0.3)",
                      }}
                    >
                      🔍
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Instagram Social Connection ── */}
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              borderRadius:    "var(--radius-xl)",
              border:          "1px solid rgba(200, 135, 42, 0.2)",
              padding:         "2rem 2.5rem",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "space-between",
              flexWrap:        "wrap",
              gap:             "1.5rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize:      "0.78rem",
                  fontWeight:    700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color:         "var(--color-secondary)",
                  marginBottom:  "0.25rem",
                }}
              >
                Connect On Social
              </p>
              <h4
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1.3rem",
                  color:        "var(--color-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                Follow Our Daily Cafe Journey
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-mid)", margin: 0 }}>
                Behind-the-scenes brew sessions, fresh wok specials, and warm moments in Lucknow.
              </p>
            </div>

            <a
              href={business.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="gallery-instagram-btn"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "0.6rem",
                backgroundColor: "var(--color-primary)",
                color:           "#FAF6EF",
                fontWeight:      600,
                fontSize:        "0.925rem",
                padding:         "0.85rem 1.75rem",
                borderRadius:    "999px",
                textDecoration:  "none",
                transition:      "all 0.25s ease",
                border:          "1.5px solid var(--color-primary)",
                boxShadow:       "var(--shadow-sm)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#E1306C";
                el.style.borderColor = "#E1306C";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "var(--color-primary)";
                el.style.borderColor = "var(--color-primary)";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              <span>@caforahouse on Instagram ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Accessible Lightbox Modal ── */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${lightbox + 1} of ${gallery.length}: ${gallery[lightbox].caption}`}
          style={{
            position:        "fixed",
            inset:           0,
            zIndex:          2000,
            backgroundColor: "rgba(20, 10, 5, 0.96)",
            backdropFilter:  "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display:         "flex",
            flexDirection:   "column",
            alignItems:      "center",
            justifyContent:  "center",
            padding:         "1.5rem",
          }}
          onClick={closeLightbox}
        >
          {/* Top Bar with Counter and Close Button */}
          <div
            style={{
              position:        "absolute",
              top:             "1.25rem",
              left:            "1.5rem",
              right:           "1.5rem",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "space-between",
              zIndex:          2010,
            }}
          >
            <span
              style={{
                color:         "rgba(250, 246, 239, 0.75)",
                fontSize:      "0.875rem",
                fontFamily:    "var(--font-body)",
                letterSpacing: "0.08em",
                fontWeight:    600,
              }}
            >
              {lightbox + 1} / {gallery.length}
            </span>

            <button
              onClick={closeLightbox}
              aria-label="Close photo preview"
              style={{
                background:      "rgba(250, 246, 239, 0.15)",
                border:          "1px solid rgba(250, 246, 239, 0.25)",
                color:           "#FAF6EF",
                fontSize:        "1.5rem",
                width:           "42px",
                height:          "42px",
                borderRadius:    "50%",
                cursor:          "pointer",
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "center",
                transition:      "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(250,246,239,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(250,246,239,0.15)")}
            >
              ✕
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photograph"
            style={{
              position:        "absolute",
              left:            "1.5rem",
              top:             "50%",
              transform:       "translateY(-50%)",
              background:      "rgba(250, 246, 239, 0.15)",
              border:          "1px solid rgba(250, 246, 239, 0.25)",
              color:           "#FAF6EF",
              fontSize:        "1.75rem",
              width:           "48px",
              height:          "48px",
              borderRadius:    "50%",
              cursor:          "pointer",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              zIndex:          2010,
              transition:      "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(250, 246, 239, 0.15)")}
          >
            ‹
          </button>

          {/* Centered Image Container */}
          <div
            style={{
              position:  "relative",
              maxWidth:  "85vw",
              maxHeight: "75vh",
              width:     "100%",
              height:    "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
              priority
            />
          </div>

          {/* Bottom Caption */}
          <div
            style={{
              marginTop: "1.25rem",
              textAlign: "center",
              maxWidth:  "600px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize:   "1.15rem",
                color:      "#FAF6EF",
                fontWeight: 600,
                margin:     0,
              }}
            >
              {gallery[lightbox].caption}
            </p>
            <p
              style={{
                fontSize:   "0.825rem",
                color:      "rgba(250, 246, 239, 0.6)",
                margin:     "0.25rem 0 0",
              }}
            >
              {gallery[lightbox].alt}
            </p>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photograph"
            style={{
              position:        "absolute",
              right:           "1.5rem",
              top:             "50%",
              transform:       "translateY(-50%)",
              background:      "rgba(250, 246, 239, 0.15)",
              border:          "1px solid rgba(250, 246, 239, 0.25)",
              color:           "#FAF6EF",
              fontSize:        "1.75rem",
              width:           "48px",
              height:          "48px",
              borderRadius:    "50%",
              cursor:          "pointer",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              zIndex:          2010,
              transition:      "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(250, 246, 239, 0.15)")}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
