import { ImageResponse } from "next/og";

export const alt =
  "Juan Felipe Mosquera Lasso — Fullstack Engineer | SaaS Architect | Real-Time Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Emerald ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            width: 56,
            height: 4,
            background: "#10b981",
            borderRadius: 2,
            marginBottom: 36,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-1px",
          }}
        >
          Juan Felipe Mosquera Lasso
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 26,
            color: "#10b981",
            fontWeight: 600,
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>Fullstack Engineer</span>
          <span style={{ color: "#374151" }}>·</span>
          <span>SaaS Architect</span>
          <span style={{ color: "#374151" }}>·</span>
          <span>Real-Time Systems</span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 19,
            color: "#9ca3af",
            maxWidth: 720,
            lineHeight: 1.6,
          }}
        >
          Ingeniero Fullstack especializado en arquitectura SaaS, microservicios
          y sistemas en tiempo real. Construyo productos escalables con enfoque
          en performance y conversión.
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10b981",
            }}
          />
          <div style={{ fontSize: 16, color: "#6b7280", fontWeight: 500 }}>
            juanfelipemosquera.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
