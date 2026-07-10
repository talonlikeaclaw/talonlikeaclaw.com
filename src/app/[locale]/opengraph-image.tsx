import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const alt = "Talon Dunbar | Infrastructure & Deployment Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0f",
        padding: "80px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: "#0a0a0f",
            border: "2px solid #22c55e",
            color: "#22c55e",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          TD
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#e4e4e7",
              fontSize: "56px",
              fontWeight: "bold",
            }}
          >
            talonlikeaclaw
          </div>
          <div style={{ color: "#a1a1aa", fontSize: "28px" }}>
            Infrastructure &amp; Deployment Engineering
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#22c55e", fontSize: "24px" }}>
          talonlikeaclaw.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
