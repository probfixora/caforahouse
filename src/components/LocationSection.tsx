"use client";

import { useState, useEffect } from "react";
import { business, settings } from "@/config/business";

const dayOrder = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// Official SVG icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad-loc" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad-loc)" />
    <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="white" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.833L.057 23.5l5.817-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.359-.214-3.72.974.994-3.63-.234-.374A9.82 9.82 0 0 1 2.182 12c0-5.424 4.394-9.818 9.818-9.818S21.818 6.576 21.818 12c0 5.424-4.394 9.818-9.818 9.818z" />
  </svg>
);

const GoogleMapsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
    <circle cx="12" cy="9" r="2.5" fill="white" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

export default function LocationSection() {
  const [today, setToday]   = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const now  = new Date();
    const day  = now.toLocaleDateString("en-US", { weekday: "long" });
    const hour = now.getHours() + now.getMinutes() / 60;
    setToday(day);
    // Cafora House is open 10:45 AM – 10:30 PM (10.75 – 22.5)
    setIsOpen(hour >= 10.75 && hour < 22.5);
  }, []);

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      style={{ backgroundColor: "var(--color-surface)", overflow: "hidden" }}
    >
      <div className="section-padding container-max">
        {/* Label */}
        <p className="section-label" style={{ textAlign: "center", marginBottom: "1rem" }}>
          Find Us
        </p>

        {/* Heading */}
        <h2
          id="location-heading"
          style={{
            fontFamily:   "var(--font-display)",
            fontWeight:   700,
            fontSize:     "clamp(2rem, 4vw, 3rem)",
            textAlign:    "center",
            color:        "var(--color-primary)",
            marginBottom: "0.75rem",
          }}
        >
          Visit Cafora House
        </h2>

        <div className="ornament-line" style={{ maxWidth: "360px", margin: "0 auto 3rem" }}>
          <span>📍</span>
        </div>

        <div className="location-outer-grid">
          {/* ── LEFT: Info Cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Address + Directions — Premium Card */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius:    "var(--radius-lg)",
                overflow:        "hidden",
                border:          "1px solid rgba(200,135,42,0.15)",
                boxShadow:       "var(--shadow-sm)",
              }}
            >
              {/* Warm gradient header strip */}
              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-primary) 0%, #4A2820 100%)",
                  padding:    "1.25rem 1.75rem",
                  display:    "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div
                    style={{
                      width:           "32px",
                      height:          "32px",
                      backgroundColor: "rgba(200,135,42,0.2)",
                      borderRadius:    "50%",
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      border:          "1px solid rgba(200,135,42,0.4)",
                    }}
                  >
                    <GoogleMapsIcon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize:   "1rem",
                      color:      "var(--color-secondary)",
                      margin:     0,
                    }}
                  >
                    Our Address
                  </h3>
                </div>
                {/* Live open/closed pill */}
                {isOpen !== null && (
                  <div
                    style={{
                      backgroundColor: isOpen
                        ? "rgba(46,125,50,0.18)"
                        : "rgba(211,47,47,0.18)",
                      border:          `1px solid ${isOpen ? "rgba(46,125,50,0.5)" : "rgba(211,47,47,0.5)"}`,
                      borderRadius:    "999px",
                      padding:         "0.25rem 0.75rem",
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "0.375rem",
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
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: isOpen ? "#81C784" : "#EF9A9A" }}>
                      {isOpen ? "Open Now" : "Closed"}
                    </span>
                  </div>
                )}
              </div>

              {/* Address body */}
              <div style={{ padding: "1.5rem 1.75rem" }}>
                <address
                  style={{
                    fontStyle:  "normal",
                    color:      "var(--color-text-mid)",
                    lineHeight: 1.8,
                    fontSize:   "0.9375rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                  <br />
                  {business.address.city} – {business.address.pincode},{" "}
                  {business.address.state}
                </address>

                {/* Landmark pill */}
                <div
                  style={{
                    display:         "inline-flex",
                    alignItems:      "center",
                    gap:             "0.375rem",
                    backgroundColor: "rgba(200,135,42,0.1)",
                    border:          "1px solid rgba(200,135,42,0.25)",
                    borderRadius:    "999px",
                    padding:         "0.3rem 0.875rem",
                    marginBottom:    "1.25rem",
                  }}
                >
                  <span style={{ fontSize: "0.8rem" }}>🎓</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-secondary)" }}>
                    {business.address.landmark}
                  </span>
                </div>

                <a
                  href={business.contact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="directions-card-btn"
                  style={{
                    display:         "inline-flex",
                    alignItems:      "center",
                    gap:             "0.5rem",
                    backgroundColor: "var(--color-primary)",
                    color:           "var(--color-secondary)",
                    fontWeight:      700,
                    fontSize:        "0.875rem",
                    padding:         "0.75rem 1.5rem",
                    borderRadius:    "var(--radius-md)",
                    textDecoration:  "none",
                    transition:      "all 0.25s ease",
                    border:          "2px solid var(--color-primary)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "transparent";
                    el.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "var(--color-primary)";
                    el.style.color = "var(--color-secondary)";
                  }}
                >
                  <GoogleMapsIcon />
                  Get Directions ↗
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius:    "var(--radius-lg)",
                padding:         "1.75rem",
                border:          "1px solid rgba(200,135,42,0.15)",
                boxShadow:       "var(--shadow-sm)",
              }}
            >
              <h3
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1rem",
                  color:        "var(--color-primary)",
                  marginBottom: "1rem",
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "0.5rem",
                }}
              >
                <span aria-hidden="true">🕐</span> Opening Hours
              </h3>

              <dl style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {dayOrder.map((day) => {
                  const h       = business.hours.find((x) => x.day === day);
                  const isToday = day === today;
                  return (
                    <div
                      key={day}
                      style={{
                        display:         "flex",
                        justifyContent:  "space-between",
                        alignItems:      "center",
                        padding:         "0.5rem 0.75rem",
                        borderRadius:    "var(--radius-sm)",
                        backgroundColor: isToday
                          ? "rgba(200,135,42,0.08)"
                          : "transparent",
                        border: isToday
                          ? "1px solid rgba(200,135,42,0.2)"
                          : "1px solid transparent",
                      }}
                    >
                      <dt
                        style={{
                          fontSize:   "0.875rem",
                          fontWeight: isToday ? 700 : 500,
                          color:      isToday
                            ? "var(--color-primary)"
                            : "var(--color-text-mid)",
                          display:    "flex",
                          alignItems: "center",
                          gap:        "0.375rem",
                        }}
                      >
                        {day}
                        {isToday && (
                          <span
                            style={{
                              fontSize:        "0.65rem",
                              backgroundColor: "var(--color-secondary)",
                              color:           "#fff",
                              borderRadius:    "999px",
                              padding:         "0.1rem 0.45rem",
                              fontWeight:      700,
                            }}
                          >
                            Today
                          </span>
                        )}
                      </dt>
                      <dd
                        style={{
                          fontSize:   "0.875rem",
                          fontWeight: isToday ? 700 : 400,
                          color:      h?.closed
                            ? "var(--color-text-light)"
                            : isToday
                            ? "var(--color-secondary)"
                            : "var(--color-text-mid)",
                          margin:     0,
                        }}
                      >
                        {h?.closed ? "Closed" : `${h?.open} – ${h?.close}`}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* Get In Touch — Premium dark card */}
            <div
              style={{
                background:   "linear-gradient(135deg, var(--color-primary) 0%, #3A2018 100%)",
                borderRadius: "var(--radius-lg)",
                padding:      "1.75rem",
                border:       "1px solid rgba(200,135,42,0.15)",
              }}
            >
              <h3
                style={{
                  fontFamily:   "var(--font-display)",
                  fontWeight:   700,
                  fontSize:     "1rem",
                  color:        "var(--color-secondary)",
                  marginBottom: "1.25rem",
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "0.5rem",
                }}
              >
                <span aria-hidden="true">💬</span> Get in Touch
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Phone */}
                {settings.showPhoneButton && business.contact.phone && (
                  <a
                    href={`tel:${business.contact.phone.replace(/\s/g, "")}`}
                    id="phone-link"
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "0.875rem",
                      color:           "#FAF6EF",
                      textDecoration:  "none",
                      fontSize:        "0.9375rem",
                      padding:         "0.625rem 0",
                      borderBottom:    "1px solid rgba(250,246,239,0.08)",
                      transition:      "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-secondary)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#FAF6EF")}
                  >
                    <span
                      style={{
                        width:           "36px",
                        height:          "36px",
                        backgroundColor: "rgba(250,246,239,0.1)",
                        borderRadius:    "50%",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        flexShrink:      0,
                        border:          "1px solid rgba(250,246,239,0.15)",
                      }}
                    >
                      <PhoneIcon />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(250,246,239,0.5)", letterSpacing: "0.08em", marginBottom: "2px" }}>
                        CALL US
                      </div>
                      <div style={{ fontWeight: 600 }}>{business.contact.phone}</div>
                    </div>
                  </a>
                )}

                {/* Email */}
                {(settings as unknown as { showEmail?: boolean }).showEmail && business.contact.email && (
                  <a
                    href={`mailto:${business.contact.email}`}
                    id="email-link"
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "0.875rem",
                      color:           "#FAF6EF",
                      textDecoration:  "none",
                      fontSize:        "0.9375rem",
                      padding:         "0.625rem 0",
                      borderBottom:    "1px solid rgba(250,246,239,0.08)",
                      transition:      "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-secondary)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#FAF6EF")}
                  >
                    <span
                      style={{
                        width:           "36px",
                        height:          "36px",
                        backgroundColor: "rgba(250,246,239,0.1)",
                        borderRadius:    "50%",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        flexShrink:      0,
                        border:          "1px solid rgba(250,246,239,0.15)",
                      }}
                    >
                      <EmailIcon />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(250,246,239,0.5)", letterSpacing: "0.08em", marginBottom: "2px" }}>
                        EMAIL US
                      </div>
                      <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>{business.contact.email}</div>
                    </div>
                  </a>
                )}

                {/* WhatsApp */}
                {settings.showWhatsApp && business.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent("Hi! I'd like to know more about Cafora House.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="whatsapp-link"
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      gap:             "0.875rem",
                      color:           "#FAF6EF",
                      textDecoration:  "none",
                      fontSize:        "0.9375rem",
                      padding:         "0.625rem 0",
                      borderBottom:    "1px solid rgba(250,246,239,0.08)",
                      transition:      "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#25D366")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#FAF6EF")}
                  >
                    <span
                      style={{
                        width:           "36px",
                        height:          "36px",
                        backgroundColor: "rgba(37,211,102,0.15)",
                        borderRadius:    "50%",
                        display:         "flex",
                        alignItems:      "center",
                        justifyContent:  "center",
                        flexShrink:      0,
                        border:          "1px solid rgba(37,211,102,0.3)",
                      }}
                    >
                      <WhatsAppIcon />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(250,246,239,0.5)", letterSpacing: "0.08em", marginBottom: "2px" }}>
                        WHATSAPP
                      </div>
                      <div style={{ fontWeight: 600 }}>Chat with Us</div>
                    </div>
                  </a>
                )}

                {/* Instagram */}
                <a
                  href={business.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="instagram-contact-link"
                  style={{
                    display:         "flex",
                    alignItems:      "center",
                    gap:             "0.875rem",
                    color:           "#FAF6EF",
                    textDecoration:  "none",
                    fontSize:        "0.9375rem",
                    padding:         "0.625rem 0",
                    transition:      "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#E1306C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#FAF6EF")}
                >
                  <span
                    style={{
                      width:           "36px",
                      height:          "36px",
                      background:      "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                      borderRadius:    "50%",
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      flexShrink:      0,
                    }}
                  >
                    <InstagramIcon />
                  </span>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(250,246,239,0.5)", letterSpacing: "0.08em", marginBottom: "2px" }}>
                      INSTAGRAM
                    </div>
                    <div style={{ fontWeight: 600 }}>@caforahouse</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Google Maps Embed ── */}
          {settings.showMap && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  borderRadius: "var(--radius-xl)",
                  overflow:     "hidden",
                  boxShadow:    "var(--shadow-lg)",
                  border:       "1px solid rgba(200,135,42,0.15)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.9247656686016!2d81.0509179!3d26.852579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3830960bb1d%3A0xe228e8d8fadf7b6c!2sCafora%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="440"
                  className="location-map-iframe"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cafora House location on Google Maps — opposite Amity University, Lucknow"
                  aria-label="Google Maps showing Cafora House, opposite Amity University, Malhaur, Lucknow"
                />
              </div>

              {/* "Open in Maps" action strip */}
              <a
                href={business.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-link"
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  gap:             "0.625rem",
                  backgroundColor: "#fff",
                  border:          "1px solid rgba(200,135,42,0.2)",
                  borderRadius:    "var(--radius-md)",
                  padding:         "0.875rem 1.5rem",
                  textDecoration:  "none",
                  color:           "var(--color-primary)",
                  fontWeight:      600,
                  fontSize:        "0.9rem",
                  transition:      "all 0.25s ease",
                  boxShadow:       "var(--shadow-sm)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "var(--color-primary)";
                  el.style.color = "var(--color-secondary)";
                  el.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#fff";
                  el.style.color = "var(--color-primary)";
                  el.style.borderColor = "rgba(200,135,42,0.2)";
                }}
              >
                <GoogleMapsIcon />
                Open in Google Maps ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
