import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            margin: 0,
          }}
        >
          UmbraCraft
        </h1>

        <p
          style={{
            fontSize: 36,
            color: "#a3a3a3",
            marginTop: 20,
          }}
        >
          Modern Box Shadows for Developers & Designers
        </p>

        <div
          style={{
            marginTop: 40,
            fontSize: 28,
          }}
        >
          50+ Shadows • Copy & Paste • Free
        </div>
      </div>
    ),
    size
  );
}