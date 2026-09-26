import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so this one is a plain square.
export default async function AppleIcon() {
  const extrabold = await readFile(join(process.cwd(), "assets/CabinetGrotesk-Extrabold.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2446d8",
          color: "#f4f6ff",
          fontFamily: "Cabinet",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -3,
        }}
      >
        MP
      </div>
    ),
    { ...size, fonts: [{ name: "Cabinet", data: extrabold, weight: 800, style: "normal" }] },
  );
}
