"use client";

import { useState, useEffect } from "react";
import { business, settings } from "@/config/business";

const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Official brand SVG icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-loc-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-loc-grad)" />
    <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="white" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
  </svg>
);

const WhatsAppIcon = ({ color = "white", size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.833L.057 23.5l5.817-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.359-.214-3.72.974.994-3.63-.234-.374A9.82 9.82 0 0 1 2.182 12c0-5.424 4.394-9.818 9.818-9.818S21.818 6.576 21.818 12c0 5.424-4.394 9.818-9.818 9.818z" />
  </svg>
);

const PhoneCallIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapsPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function LocationSection() {
  const [today, setToday]   = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    // Compute current day & hour in IST (Asia/Kolkata)
    const options: Intl.DateTimeFormatOptions = { timeZone: "Asia/Kolkata", weekday: "long" };
    const dayStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
    setToday(dayStr);

    // Compute hour in IST
    const istTimeStr = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).format(new Date());

    const [hourStr, minStr] = istTimeStr.split(":");
    const decimalHour = parseInt(hourStr, 10) + parseInt(minStr, 10) / 60;
    // Cafora House is open 10:45 AM (10.75) to 10:30 PM (22.5) daily
    setIsOpen(decimalHour >= 10.75 && decimalHour < 22.5);
  }, []);

  return (
    <section
      id="location"
      className="section-padding"
      aria-labelledby="location-heading"
      style={{ backgroundColor: "var(--color-surface)", overflow: "hidden" }}
    >
      {/* Contact anchor target for direct navigation */}
      <div id="contact" style={{ position: "relative", top: "-80px" }} />

      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Visit &amp; Connect
          </p>
          <h2
            id="location-heading"
            style={{
              fontFamily:   "var(--font-display)",
              fontWeight:   700,
              fontSize:     "clamp(2.1rem, 4.5vw, 3.25rem)",
              color:        "var(--color-primary)",
              marginBottom: "1rem",
              lineHeight:   1.15,
            }}
          >
            Find Us in Lucknow
          </h2>
          <div className="ornament-line" style={{ maxWidth: "340px", margin: "0 auto" }}>
            <span>📍</span>
          </div>
        </div>

        {/* ── Main Location Grid: Info Cards + Map ── */}
        <div className="location-outer-grid">
          {/* Left Column: Address, Hours, Contact Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Address Card */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius:    "var(--radius-xl)",
                border:          "1px solid rgba(200, 135, 42, 0.18)",
                overflow:        "hidden",
                boxShadow:       "var(--shadow-sm)",
              }}
            >
              {/* Header strip */}
              <div
                style={{
                  background:     "linear-gradient(135deg, var(--color-primary) 0%, #3D2318 100%)",
                  padding:        "1.25rem 1.75rem",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div
                    style={{
                      width:           "34px",
                      height:          "34px",
                      backgroundColor: "rgba(250,246,239,0.12)",
                      borderRadius:    "50%",
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                    }}
                  >
                    <MapsPinIcon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize:   "1.1rem",
                      color:      "#FAF6EF",
                      margin:     0,
                    }}
                  >
                    Our Address
                  </h3>
                </div>

                {/* Dynamic Open / Closed Status Pill */}
                {isOpen !== null && (
                  <div
                    style={{
                      backgroundColor: isOpen ? "rgba(46, 125, 50, 0.22)" : "rgba(211, 47, 47, 0.22)",
                      border:          `1px solid ${isOpen ? "rgba(76, 175, 80, 0.6)" : "rgba(239, 83, 80, 0.6)"}`,
                      borderRadius:    "999px",
                      padding:         "0.25rem 0.85rem",
                      display:         "inline-flex",
                      alignItems:      "center",
                      gap:             "0.4rem",
                    }}
                  >
                    <span
                      style={{
                        width:           "7px",
                        height:          "7px",
                        borderRadius:    "50%",
                        backgroundColor: isOpen ? "#4CAF50" : "#EF5350",
                        animation:       isOpen ? "pulse 2s infinite" : "none",
                      }}
                    />
                    <span
                      style={{
                        fontSize:   "0.75rem",
                        fontWeight: 700,
                        color:      isOpen ? "#A5D6A7" : "#FFCDD2",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {isOpen ? "Open Now" : "Closed"}
                    </span>
                  </div>
                )}
              </div>

              {/* Address details */}
              <div style={{ padding: "1.75rem" }}>
                <address
                  style={{
                    fontStyle:    "normal",
                    fontSize:     "0.95rem",
                    lineHeight:   1.75,
                    color:        "var(--color-text-dark)",
                    marginBottom: "1rem",
                  }}
                >
                  <strong style={{ color: "var(--color-primary)", display: "block", marginBottom: "0.25rem" }}>
                    {business.name}
                  </strong>
                  {business.address.line1}<br />
                  {business.address.line2}<br />
                  {business.address.city} – {business.address.pincode}, {business.address.state}
                </address>

                {/* Landmark Callout */}
                <div
                  style={{
                    display:         "inline-flex",
                    alignItems:      "center",
                    gap:             "0.45rem",
                    backgroundColor: "rgba(200, 135, 42, 0.1)",
                    border:          "1px solid rgba(200, 135, 42, 0.25)",
                    borderRadius:    "999px",
                    padding:         "0.35rem 0.95rem",
                    marginBottom:    "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.85rem" }}>🎓</span>
                  <span
                    style={{
                      fontSize:   "0.825rem",
                      fontWeight: 700,
                      color:      "var(--color-secondary)",
                    }}
                  >
                    Landmark: {business.address.landmark}
                  </span>
                </div>

                <div>
                  <a
                    href={business.contact.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="location-directions-btn"
                    style={{
                      display:         "inline-flex",
                      alignItems:      "center",
                      gap:             "0.5rem",
                      backgroundColor: "var(--color-primary)",
                      color:           "var(--color-secondary)",
                      fontWeight:      700,
                      fontSize:        "0.9rem",
                      padding:         "0.75rem 1.65rem",
                      borderRadius:    "999px",
                      textDecoration:  "none",
                      border:          "1.5px solid var(--color-primary)",
                      transition:      "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = "var(--color-secondary)";
                      el.style.borderColor = "var(--color-secondary)";
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = "var(--color-primary)";
                      el.style.borderColor = "var(--color-primary)";
                      el.style.color = "var(--color-secondary)";
                    }}
                  >
                    <span>🧭</span> Get Google Directions ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule Card */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius:    "var(--radius-xl)",
                border:          "1px solid rgba(200, 135, 42, 0.18)",
                padding:         "1.75rem",
                boxShadow:       "var(--shadow-sm)",
              }}
            >
              <h3
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1.1rem",
                  color:        "var(--color-primary)",
                  marginBottom: "1rem",
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "0.5rem",
                }}
              >
                <span>🕒</span> Opening Hours
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {dayOrder.map((day) => {
                  const schedule = business.hours.find((h) => h.day === day);
                  const isCurrentDay = day === today;
                  return (
                    <div
                      key={day}
                      style={{
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "space-between",
                        padding:         "0.5rem 0.85rem",
                        borderRadius:    "8px",
                        backgroundColor: isCurrentDay ? "rgba(200, 135, 42, 0.1)" : "transparent",
                        border:          isCurrentDay ? "1px solid rgba(200, 135, 42, 0.25)" : "1px solid transparent",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span
                          style={{
                            fontSize:   "0.875rem",
                            fontWeight: isCurrentDay ? 700 : 500,
                            color:      isCurrentDay ? "var(--color-primary)" : "var(--color-text-mid)",
                          }}
                        >
                          {day}
                        </span>
                        {isCurrentDay && (
                          <span
                            style={{
                              fontSize:        "0.65rem",
                              fontWeight:      700,
                              textTransform:   "uppercase",
                              backgroundColor: "var(--color-secondary)",
                              color:           "#fff",
                              borderRadius:    "4px",
                              padding:         "0.15rem 0.45rem",
                            }}
                          >
                            Today
                          </span>
                        )}
                      </div>

                      <span
                        style={{
                          fontSize:   "0.875rem",
                          fontWeight: isCurrentDay ? 700 : 500,
                          color:      isCurrentDay ? "var(--color-secondary)" : "var(--color-text-mid)",
                        }}
                      >
                        {schedule?.open} – {schedule?.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Card (Phone, WhatsApp, Email, Instagram) */}
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                color:           "#FAF6EF",
                borderRadius:    "var(--radius-xl)",
                padding:         "1.75rem",
                boxShadow:       "0 8px 30px rgba(44, 24, 16, 0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1.15rem",
                  color:        "var(--color-secondary)",
                  marginBottom: "1.25rem",
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "0.5rem",
                }}
              >
                <span>💬</span> Quick Contact &amp; Enquiries
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Click to Call */}
                {settings.showPhoneButton && business.contact.phone && (
                  <a
                    href={`tel:${business.contact.phone.replace(/\s/g, "")}`}
                    id="contact-call-btn"
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "1rem",
                      color:           "#FAF6EF",
                      textDecoration:  "none",
                      padding:         "0.75rem 1rem",
                      borderRadius:    "var(--radius-md)",
                      backgroundColor: "rgba(250, 246, 239, 0.08)",
                      border:          "1px solid rgba(250, 246, 239, 0.12)",
                      transition:      "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(250, 246, 239, 0.16)";
                      el.style.borderColor = "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                      el.style.borderColor = "rgba(250, 246, 239, 0.12)";
                    }}
                  >
                    <div
                      style={{
                        width:           "36px",
                        height:          "36px",
                        borderRadius:    "50%",
                        backgroundColor: "var(--color-secondary)",
                        color:           "#fff",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        flexShrink:      0,
                      }}
                    >
                      <PhoneCallIcon />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(250, 246, 239, 0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Call Us Directly
                      </div>
                      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                        {business.contact.phone}
                      </div>
                    </div>
                  </a>
                )}

                {/* WhatsApp Chat Button */}
                {settings.showWhatsApp && business.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent("Hi! I would like to inquire about Cafora House opposite Amity University.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-whatsapp-btn"
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "1rem",
                      color:           "#FAF6EF",
                      textDecoration:  "none",
                      padding:         "0.75rem 1rem",
                      borderRadius:    "var(--radius-md)",
                      backgroundColor: "rgba(37, 211, 102, 0.12)",
                      border:          "1px solid rgba(37, 211, 102, 0.25)",
                      transition:      "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(37, 211, 102, 0.22)";
                      el.style.borderColor = "#25D366";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(37, 211, 102, 0.12)";
                      el.style.borderColor = "rgba(37, 211, 102, 0.25)";
                    }}
                  >
                    <div
                      style={{
                        width:           "36px",
                        height:          "36px",
                        borderRadius:    "50%",
                        backgroundColor: "#25D366",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        flexShrink:      0,
                      }}
                    >
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "#81C784", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        WhatsApp Message
                      </div>
                      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                        Chat with Cafora House
                      </div>
                    </div>
                  </a>
                )}

                {/* Email */}
                {business.contact.email && (
                  <a
                    href={`mailto:${business.contact.email}`}
                    id="contact-email-btn"
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "1rem",
                      color:           "#FAF6EF",
                      textDecoration:  "none",
                      padding:         "0.75rem 1rem",
                      borderRadius:    "var(--radius-md)",
                      backgroundColor: "rgba(250, 246, 239, 0.08)",
                      border:          "1px solid rgba(250, 246, 239, 0.12)",
                      transition:      "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(250, 246, 239, 0.16)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(250, 246, 239, 0.08)";
                    }}
                  >
                    <div
                      style={{
                        width:           "36px",
                        height:          "36px",
                        borderRadius:    "50%",
                        backgroundColor: "rgba(250,246,239,0.15)",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        flexShrink:      0,
                      }}
                    >
                      <MailIcon />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(250, 246, 239, 0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Email Enquiries
                      </div>
                      <div style={{ fontWeight: 600, fontSize: "0.925rem" }}>
                        {business.contact.email}
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Interactive Directions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow:     "hidden",
                border:       "1px solid rgba(200, 135, 42, 0.2)",
                boxShadow:    "var(--shadow-md)",
                backgroundColor: "#fff",
                position:     "relative",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Cafora+House,+Opposite+Amity+University,+Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="460"
                style={{ border: 0, display: "block", minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafora House Location Map — Opposite Amity University, Malhour, Lucknow"
                aria-label="Google Maps embed showing Cafora House location opposite Amity University"
              />
            </div>

            {/* Quick Map Action Bar */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius:    "var(--radius-lg)",
                border:          "1px solid rgba(200, 135, 42, 0.18)",
                padding:         "1.25rem 1.75rem",
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "space-between",
                flexWrap:        "wrap",
                gap:             "1rem",
                boxShadow:       "var(--shadow-sm)",
              }}
            >
              <div>
                <p style={{ fontWeight: 700, color: "var(--color-primary)", margin: 0, fontSize: "0.95rem" }}>
                  Need help finding the entrance?
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-mid)", margin: "0.15rem 0 0" }}>
                  Located on the ground floor of Adarsh Market, directly facing Amity University main gate road.
                </p>
              </div>

              <a
                href={business.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                id="location-open-maps-btn"
                style={{
                  display:         "inline-flex",
                  alignItems:      "center",
                  gap:             "0.5rem",
                  backgroundColor: "var(--color-secondary)",
                  color:           "#fff",
                  fontWeight:      700,
                  fontSize:        "0.875rem",
                  padding:         "0.65rem 1.4rem",
                  borderRadius:    "999px",
                  textDecoration:  "none",
                  transition:      "all 0.2s ease",
                  whiteSpace:      "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-secondary)")}
              >
                Open in Maps App ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
