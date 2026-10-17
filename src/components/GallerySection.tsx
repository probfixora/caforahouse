"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/config/business";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : 0));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % gallery.length : 0));

  return (
    <>
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="section-padding container-max">
          {/* Label */}
          <p className="section-label" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Inside Cafora House
          </p>

          {/* Heading */}
          <h2
            id="gallery-heading"
            style={{
              fontFamily:   "var(--font-display)",
              fontWeight:   700,
              fontSize:     "clamp(2rem, 4vw, 3rem)",
              textAlign:    "center",
              color:        "var(--color-primary)",
              marginBottom: "0.75rem",
            }}
          >
            A Glimpse of Our Space
          </h2>

          <div className="ornament-line" style={{ maxWidth: "360px", margin: "0 auto 3rem" }}>
            <span>📸</span>
          </div>

          {/* Gallery grid */}
          <div className="gallery-grid">
            {gallery.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => openLightbox(idx)}
                aria-label={`View larger image: ${img.caption}`}
                style={{
                  position:     "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow:     "hidden",
                  aspectRatio:  idx === 0 ? "16/9" : "4/3",
                  gridColumn:   idx === 0 ? "1 / -1" : undefined,
                  border:       "none",
                  padding:      0,
                  cursor:       "pointer",
                  background:   "var(--color-surface)",
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.05)";
                  const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLDivElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1)";
                  const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLDivElement;
                  if (overlay) overlay.style.opacity = "0";
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
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div
                  className="gallery-overlay"
                  style={{
                    position:        "absolute",
                    inset:           0,
                    backgroundColor: "rgba(44,24,16,0.5)",
                    display:         "flex",
                    alignItems:      "flex-end",
                    padding:         "1.25rem",
                    opacity:         0,
                    transition:      "opacity 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily:  "var(--font-display)",
                      fontWeight:  600,
                      fontSize:    "1rem",
                      color:       "#FAF6EF",
                    }}
                  >
                    {img.caption} ↗
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "var(--color-text-light)", marginBottom: "1rem", fontSize: "0.9375rem" }}>
              Follow us for daily updates, specials, and behind-the-scenes moments
            </p>
            <a
              href="https://www.instagram.com/caforahouse/"
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-link"
              className="btn-secondary"
              style={{ gap: "0.5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @caforahouse
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${lightbox + 1} of ${gallery.length}`}
          style={{
            position:        "fixed",
            inset:           0,
            zIndex:          2000,
            backgroundColor: "rgba(26,15,8,0.95)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            padding:         "1rem",
          }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position:        "absolute",
              top:             "1rem",
              right:           "1rem",
              background:      "rgba(250,246,239,0.15)",
              border:          "none",
              color:           "#FAF6EF",
              fontSize:        "1.5rem",
              width:           "44px",
              height:          "44px",
              borderRadius:    "50%",
              cursor:          "pointer",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            style={{
              position:       "absolute",
              left:           "1rem",
              top:            "50%",
              transform:      "translateY(-50%)",
              background:     "rgba(250,246,239,0.15)",
              border:         "none",
              color:          "#FAF6EF",
              fontSize:       "1.5rem",
              width:          "44px",
              height:         "44px",
              borderRadius:   "50%",
              cursor:         "pointer",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", width: "100%", height: "100%" }}
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

          {/* Caption */}
          <p
            style={{
              position:   "absolute",
              bottom:     "1.5rem",
              left:       "50%",
              transform:  "translateX(-50%)",
              color:      "rgba(250,246,239,0.7)",
              fontSize:   "0.875rem",
              whiteSpace: "nowrap",
            }}
          >
            {gallery[lightbox].caption} — {lightbox + 1} / {gallery.length}
          </p>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            style={{
              position:       "absolute",
              right:          "1rem",
              top:            "50%",
              transform:      "translateY(-50%)",
              background:     "rgba(250,246,239,0.15)",
              border:         "none",
              color:          "#FAF6EF",
              fontSize:       "1.5rem",
              width:          "44px",
              height:         "44px",
              borderRadius:   "50%",
              cursor:         "pointer",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
