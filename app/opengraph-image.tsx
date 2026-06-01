import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: 80 }}>
          UmbraCraft
        </h1>

        <p style={{ fontSize: 30 }}>
          Beautiful UI Components
        </p>
      </div>
    ),
    size
  );
}