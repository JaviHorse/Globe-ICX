import Image from "next/image";
import Link from "next/link";
import LandingSurveyBlock from "@/app/component/LandingSurveyBlock";

const LIGHT_BLUE = "#C8ECFF";
const DARK_BLUE = "#1F2E8D";

// Decorative white circles in background — random-looking positions/sizes
const BG_CIRCLES = [
  { size: 32, left: 8, top: 12 },
  { size: 48, left: 88, top: 18 },
  { size: 24, left: 72, top: 28 },
  { size: 40, left: 15, top: 45 },
  { size: 56, left: 82, top: 38 },
  { size: 28, left: 45, top: 22 },
  { size: 36, left: 28, top: 65 },
  { size: 44, left: 65, top: 55 },
  { size: 20, left: 92, top: 72 },
  { size: 52, left: 5, top: 78 },
  { size: 30, left: 55, top: 82 },
  { size: 38, left: 38, top: 42 },
  { size: 26, left: 78, top: 8 },
  { size: 42, left: 12, top: 32 },
  { size: 34, left: 70, top: 68 },
  { size: 46, left: 50, top: 58 },
  { size: 22, left: 25, top: 85 },
  { size: 50, left: 85, top: 48 },
];

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${LIGHT_BLUE} 0%, #b8e2f5 100%)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Nav bar — shadow + minimal hover animations */}
      <header
        className="landing-header"
        style={{
          background: "transparent",
          borderBottom: "1px solid rgba(31, 46, 141, 0.1)",
          boxShadow: "0 2px 16px rgba(31, 46, 141, 0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link href="/" className="landing-logo-link" style={{ display: "flex", alignItems: "center", lineHeight: 0 }}>
            <Image
              src="/images/icx-logo.png"
              alt="iCX - Internal Customer Experience"
              width={120}
              height={40}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
          <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <Link href="/landing-page" className="landing-nav-link landing-nav-link-transparent">
              iCX
            </Link>
            <Link href="#" className="landing-nav-link landing-nav-link-transparent">
              Groups
            </Link>
            <Link href="/faqs" className="landing-nav-link landing-nav-link-transparent">
              FAQs
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content area — full width wrapper for lighthouse */}
      <div
        style={{
          flex: 1,
          position: "relative",
          width: "100%",
          minHeight: 0,
        }}
      >
        {/* Lighthouse background — full width, no margin, bigger */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "55vh",
            minHeight: 320,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/lighthouse.png"
            alt=""
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom left",
            }}
          />
        </div>

        {/* Decorative white circles — background style */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {BG_CIRCLES.map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${c.left}%`,
                top: `${c.top}%`,
                width: c.size,
                height: c.size,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.25)",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Content (above background) — wider so less side margin */}
        <main
          style={{
            position: "relative",
            zIndex: 1,
            padding: "32px 32px 48px",
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
        {/* Question container — card bg distinct from text box */}
        <div
          style={{
            background: "linear-gradient(165deg, rgba(232, 246, 252, 0.97) 0%, rgba(220, 240, 250, 0.95) 100%)",
            borderRadius: 24,
            padding: "36px 40px",
            marginBottom: 200,
            boxShadow:
              "0 8px 32px rgba(31, 46, 141, 0.08), 0 1px 0 rgba(255, 255, 255, 0.9) inset",
            border: "1px solid rgba(31, 46, 141, 0.1)",
          }}
        >
          <LandingSurveyBlock />
        </div>

        {/* Video placeholder — scroll target after submit */}
        <div
          id="landing-below-question"
          style={{
            background: "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)",
            borderRadius: 20,
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
            boxShadow:
              "0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="landing-play-btn"
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <svg
              width="30"
              height="34"
              viewBox="0 0 24 28"
              fill="none"
              style={{ marginLeft: 4 }}
            >
              <path d="M2 2L22 14L2 26V2Z" fill={DARK_BLUE} />
            </svg>
          </div>
        </div>

        {/* Bottom section: two buttons — left and right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/faqs"
            className="landing-outline-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 25px",
              background: "white",
              color: DARK_BLUE,
              border: `2px solid ${DARK_BLUE}`,
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Know more about iCX
          </Link>
          <Link
            href="/"
            className="landing-next-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 28px",
              background: DARK_BLUE,
              color: "white",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(31, 46, 141, 0.35)",
              letterSpacing: "0.02em",
            }}
          >
            Start my iCX journey
          </Link>
        </div>
        </main>
      </div>
    </div>
  );
}
