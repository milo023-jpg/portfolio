import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fafaf9",
          fontSize: 22,
          fontFamily: "monospace",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        <span style={{ color: "#c8a982" }}>&lt;</span>
        <span>/</span>
        <span style={{ color: "#c8a982" }}>&gt;</span>
      </div>
    ),
    { ...size },
  );
}
