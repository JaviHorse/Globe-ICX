import Image from "next/image";
import Link from "next/link";
import ResponsiveStage from "../component/ResponsiveStage";

const DARK_BLUE = "#1F2E8D";

export default function FAQsPage() {
  return (
    <ResponsiveStage designWidth={1512} designHeight={1200}>
      <div
        style={{
          width: "1512px",
          height: "1200px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Poppins', sans-serif",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header matching landing page — fixed sizes */}
        <header
          style={{
            position: "relative",
            width: "1512px",
            height: "120px",
            margin: "0 auto",
            background: "transparent",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              left: "24px",
              top: "15px",
            }}
          >
            <Link href="/landing-page">
              <Image
                src="/images/icx-logo.png"
                alt="iCX Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>

          {/* Nav Links */}
          <Link
            href="/landing-page"
            style={{
              position: "absolute",
              width: "80px",
              height: "40px",
              left: "1080px",
              top: "55px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              textAlign: "center",
              color: "#29348F",
              textDecoration: "none",
            }}
          >
            iCX
          </Link>
          <Link
            href="/groups"
            style={{
              position: "absolute",
              width: "120px",
              height: "40px",
              left: "1180px",
              top: "55px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              textAlign: "center",
              color: "#29348F",
              textDecoration: "none",
            }}
          >
            Groups
          </Link>
          <Link
            href="/faqs"
            style={{
              position: "absolute",
              width: "120px",
              height: "40px",
              left: "1320px",
              top: "55px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              textAlign: "center",
              color: "#29348F",
              textDecoration: "none",
            }}
          >
            FAQs
          </Link>
        </header>

        <main
          style={{
            flex: 1,
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px 32px 64px",
          }}
        >
          {/* Back to landing page */}
          <Link
            href="/landing-page"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: DARK_BLUE,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              marginBottom: 24,
              transition: "opacity 0.2s ease",
            }}
            className="faqs-back-link"
          >
            <span aria-hidden>←</span>
            Back to landing page
          </Link>

          {/* Centered main title */}
          <h1
            style={{
              textAlign: "center",
              color: DARK_BLUE,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              marginBottom: 48,
              letterSpacing: "-0.02em",
            }}
          >
            FAQs
          </h1>

          {/* Section 1 */}
          <section style={{ marginBottom: 48 }}>
            <h2
              style={{
                color: DARK_BLUE,
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              Lorem Ipsum
            </h2>
            <p
              style={{
                color: "#333",
                fontSize: 16,
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p
              style={{
                color: "#333",
                fontSize: 16,
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p
              style={{
                color: "#333",
                fontSize: 16,
                lineHeight: 1.65,
              }}
            >
              Curabitur pretium tincidunt lacus. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
              tellus consequat imperdiet.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: 32 }}>
            <h2
              style={{
                color: DARK_BLUE,
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              Lorem Ipsum
            </h2>
            <p
              style={{
                color: "#333",
                fontSize: 16,
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p
              style={{
                color: "#333",
                fontSize: 16,
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p
              style={{
                color: "#333",
                fontSize: 16,
                lineHeight: 1.65,
              }}
            >
              Curabitur pretium tincidunt lacus. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
              tellus consequat imperdiet.
            </p>
          </section>
        </main>

        {/* Footer line */}
        <footer
          style={{
            borderTop: "1px solid rgba(31, 46, 141, 0.2)",
            width: "100%",
          }}
        />
      </div>
    </ResponsiveStage>
  );
}
