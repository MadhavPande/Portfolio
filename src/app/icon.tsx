import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 14,
          fontFamily: "Cabinet",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        MP
      </div>
    ),
    { ...size, fonts: [{ name: "Cabinet", data: extrabold, weight: 800, style: "normal" }] },
  );
}
