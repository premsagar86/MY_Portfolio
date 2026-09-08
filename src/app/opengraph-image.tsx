import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Eedubilli Premsagar — Full-Stack Developer";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#08080a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#c8ff2d",
            fontSize: 28,
            letterSpacing: 6,
            fontWeight: 700,
          }}
        >
          FULL-STACK DEVELOPER
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12 }}>
          Eedubilli Premsagar
        </div>
        <div style={{ fontSize: 30, color: "#9a9aa2", marginTop: 24 }}>
          React · Next.js · Node · MySQL · Redis · AWS
        </div>
      </div>
    ),
    { ...size },
  );
}
