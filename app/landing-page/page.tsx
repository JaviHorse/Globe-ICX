"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LandingSurveyBlock from "@/app/component/LandingSurveyBlock";

export default function LandingPage() {
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "1512px", // Fixed width
        height: "1948px", // Fixed height
        background: "#FFFFFF",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Blue Background */}
      <div
        style={{
          position: "absolute",
          width: "1516px",
          height: "962px",
          left: "0px",
          top: "0px",
          background: "#C8ECFF",
          zIndex: 0,
        }}
      />

      {/* Layer 2: Hero Elements (Lighthouse & Beam) */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>

        {/* Vector 1 (Beam) */}
        <div
          style={{
            position: "absolute",
            width: "1595px",
            height: "1074px",
            left: "152px",
            top: "-103px",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/Vector 1.png"
            alt="Lighthouse Beam"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Lighthouse */}
        <div
          style={{
            position: "absolute",
            width: "887px",
            height: "624px",
            left: "-101px",
            top: "338px",
            zIndex: 2,
          }}
        >
          <Image
            src="/images/lighthouse.png"
            alt="Lighthouse"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Layer 3: Main Content (Text, Nav, Chatbox) */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 10 }}>

        {/* Hi, Ka-Globe! */}
        <div
          style={{
            position: "absolute",
            width: "563px",
            height: "60px",
            left: "618px",
            top: "162px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "96px",
            textAlign: "center",
            color: "#1F2E8D",
          }}
        >
          Hi, Ka-Globe!
        </div>

        {/* Nav / Logo */}
        <div
          style={{
            position: "absolute",
            width: "174px",
            height: "174px",
            left: "12px",
            top: "-12px",
          }}
        >
          <Image
            src="/images/icx-logo.png"
            alt="iCX Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <Link
          href="/landing-page"
          style={{
            position: "absolute",
            width: "98px",
            height: "52px",
            left: "1041px",
            top: "49px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "33px",
            lineHeight: "50px",
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
            width: "158px",
            height: "52px",
            left: "1159px",
            top: "49px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "33px",
            lineHeight: "50px",
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
            width: "158px",
            height: "52px",
            left: "1327px",
            top: "49px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "33px",
            lineHeight: "50px",
            textAlign: "center",
            color: "#29348F",
            textDecoration: "none",
          }}
        >
          FAQs
        </Link>

        {/* Chatbox / Survey Container */}
        <div
          style={{
            position: "absolute",
            width: "920px",
            height: "380px",
            left: "440px",
            top: "310px",
          }}
        >
          <LandingSurveyBlock />
        </div>

        {/* Next Button (Now Scrolls) */}
        <button
          onClick={scrollToVideo}
          style={{
            position: "absolute",
            width: "196px",
            height: "52px",
            left: "802px",
            top: "730px",
            background: "#3D59B7",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            zIndex: 20
          }}
        >
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "24px",
            color: "#FFFFFF",
          }}>
            Next
          </span>
        </button>

        {/* iCX makes sharing feedback easy and meaningful! */}
        <div
          style={{
            position: "absolute",
            width: "1512px",
            height: "60px",
            left: "0px",
            top: "1065px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "60px",
            textAlign: "center",
            color: "#1F2E8D",
          }}
        >
          iCX makes sharing feedback easy and meaningful!
        </div>

        {/* Video Section (Ref added here) */}
        <div
          ref={videoSectionRef}
          style={{
            position: "absolute",
            width: "1031px",
            height: "544px",
            left: "240px",
            top: "1162px",
          }}
        >
          {/* Rectangle 1 (Black bg) */}
          <div
            style={{
              position: "absolute",
              width: "1031px",
              height: "544px",
              left: "0px",
              top: "0px",
              background: "#030303",
              boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.3)",
              borderRadius: "30px",
            }}
          />
          {/* Play Button Triangle */}
          <div
            style={{
              position: "absolute",
              left: "465px",
              top: "218px",
              width: 0,
              height: 0,
              borderTop: "54px solid transparent",
              borderBottom: "54px solid transparent",
              borderLeft: "100px solid #FFFFFF",
            }}
          />
        </div>

        {/* Bottom Buttons */}
        <Link
          href="/faqs"
          style={{
            position: "absolute",
            width: "375px",
            height: "52px",
            left: "240px",
            top: "1767px",
            background: "#FFFFFF",
            border: "2px solid #1F2E8D",
            borderRadius: "30px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none"
          }}
        >
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "45px",
            color: "#1F2E8D",
          }}>
            Know more about iCX
          </span>
        </Link>

        <Link
          href="/groups"
          style={{
            position: "absolute",
            width: "375px",
            height: "52px",
            left: "896px",
            top: "1767px",
            background: "#3D59B7",
            borderRadius: "30px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none"
          }}
        >
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "45px",
            color: "#FFFFFF",
          }}>
            Start my iCX journey
          </span>
        </Link>

      </div>
    </div>
  );
}
