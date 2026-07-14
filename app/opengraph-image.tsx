import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

export const alt = `${SITE_NAME} — Website Developer & Software Developer`;
export const size = { width: 1200, height: 630 };
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
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ fontSize: "22px", color: "#94a3b8" }}>
            Available for remote projects
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          {SITE_NAME}
        </div>

        <div
          style={{
            fontSize: "34px",
            fontWeight: 600,
            color: "#60a5fa",
            lineHeight: 1.3,
            marginBottom: "28px",
            maxWidth: "900px",
          }}
        >
          {SITE_TAGLINE}
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            lineHeight: 1.5,
            maxWidth: "880px",
          }}
        >
          Laravel · React · TypeScript · Custom Business Software · Remote Worldwide
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "72px",
            fontSize: "22px",
            color: "#64748b",
          }}
        >
          istiakhossain.com
        </div>
      </div>
    ),
    { ...size },
  );
}
