import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Madhav Pande, strategy, analytics, and consulting professional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs TTF/OTF, not the woff2 files the site uses.
const extrabold = readFile(join(process.cwd(), "assets/CabinetGrotesk-Extrabold.ttf"));
const medium = readFile(join(process.cwd(), "assets/CabinetGrotesk-Medium.ttf"));

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f4f5",
          color: "#111215",
          padding: "80px 88px",
          fontFamily: "Cabinet",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 500, color: "#565961", letterSpacing: 1 }}>
            Strategy, analytics, and consulting
          </div>
          <div style={{ fontSize: 128, fontWeight: 800, letterSpacing: -4, lineHeight: 1, marginTop: 24 }}>
            Madhav Pande
          </div>
          <div style={{ display: "flex", width: 120, height: 10, background: "#2446d8", borderRadius: 999, marginTop: 44 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 36, fontWeight: 500, lineHeight: 1.3 }}>
            <div>$1B+ pharma forecasts at Viscadia</div>
            <div>20M+ users in government tech at EY</div>
          </div>
          <div style={{ fontSize: 26, fontWeight: 500, color: "#565961" }}>madhavpande.netlify.app</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cabinet", data: await extrabold, weight: 800, style: "normal" },
        { name: "Cabinet", data: await medium, weight: 500, style: "normal" },
      ],
    },
  );
}
