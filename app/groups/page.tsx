"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Data Mapping with Real Groups
const GROUPS_BY_CLASSIFICATION = {
    "Commercial Teams": [
        { name: "B2B" },
        { name: "Enterprise Data & Strategic Services" },
        { name: "B2C Territory Management & Synergies" },
        { name: "Feel Valued Tribe" },
        { name: "Broadband Business" },
        { name: "Marketing" },
        { name: "Consumer Mobile Business" },
    ],
    "Business Enabling": [
        { name: "AIG & ISDP Shared Service" },
        { name: "Finance & Administration" },
        { name: "Internal Audit" },
        { name: "Artificial Intelligence" },
        { name: "Human Resources" },
        { name: "Sustainability & Corporate Communications" },
        { name: "Corporate & Legal Services" },
        { name: "Information Security & Data Privacy" },
    ],
    "XDT": [
        { name: "Information Services" },
        { name: "Customer Experience Creation" },
        { name: "Network Technical" },
        { name: "Product Experience" },
        { name: "Office of Strategy Management and Customer Experience" },
    ],
};

// 2. Refined GroupButton (Flex-child, Interactive Classes)
const GroupButton = ({
    name,
    sub,
    isSelected,
    onClick
}: {
    name: string;
    sub?: string;
    isSelected?: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className={`groupCard ${isSelected ? 'selected' : ''}`}
        style={{
            boxSizing: "border-box",
            flexShrink: 0,
            width: "318px",
            height: "155px",
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            cursor: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Poppins', sans-serif",
            color: "#1F2E8D",
            userSelect: "none",
            padding: "10px",
            position: "relative",
            outline: "none"
        }}
    >
        <div style={{
            fontSize: name.length > 30 ? "20px" : "24px",
            fontWeight: 400,
            textAlign: "center",
            width: "280px",
            lineHeight: "1.2",
            position: "relative",
            zIndex: 2
        }}>
            {name}
        </div>
        {sub && (
            <div style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                width: "280px",
                marginTop: "5px",
                position: "relative",
                zIndex: 2
            }}>
                {sub}
            </div>
        )}
    </button>
);

// 3. ScrollingRow Component with Grab-to-Drag + Click Prevention logic
const ScrollingRow = ({
    groups,
    top,
    selectedGroup,
    onGroupSelect
}: {
    groups: any[];
    top: number;
    selectedGroup: string | null;
    onGroupSelect: (name: string) => void;
}) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [movement, setMovement] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!rowRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - rowRef.current.offsetLeft);
        setScrollLeftState(rowRef.current.scrollLeft);
        setMovement(0);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !rowRef.current) return;
        e.preventDefault();
        const x = e.pageX - rowRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        rowRef.current.scrollLeft = scrollLeftState - walk;
        setMovement(Math.abs(x - startX));
    };

    const handleGroupClick = (name: string) => {
        // Only select if it was a click, not a drag
        if (movement < 10) {
            onGroupSelect(name);
        }
    };

    return (
        <div
            ref={rowRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            style={{
                position: "absolute",
                width: "1398px",
                height: "220px", // Increased to accommodate lift + glow without clipping
                left: "57px",
                top: `${top}px`,
                overflowX: "auto",
                overflowY: "hidden",
                cursor: isDown ? "grabbing" : "grab",
                scrollBehavior: isDown ? "auto" : "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
            className="no-scrollbar"
        >
            <div
                style={{
                    display: "flex",
                    gap: "32px",
                    padding: "20px 10px", // More padding for effects
                    width: "max-content",
                }}
            >
                {groups.map((g, i) => (
                    <GroupButton
                        key={i}
                        name={g.name}
                        sub={g.sub}
                        isSelected={selectedGroup === g.name}
                        onClick={() => handleGroupClick(g.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default function GroupsPage() {
    const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

    return (
        <div
            style={{
                position: "relative",
                width: "1512px",
                height: "1948px",
                background: "#FFFFFF",
                margin: "0 auto",
                overflow: "hidden",
            }}
        >
            {/* Premium Interactions & Scrollbar Hiding */}
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .groupCard {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
          will-change: transform;
          transform: translateZ(0);
        }

        .groupCard::before {
          content: "";
          position: absolute;
          inset: -8px;
          background: radial-gradient(circle, rgba(0, 160, 234, 0.4) 0%, rgba(41, 52, 143, 0) 70%);
          opacity: 0;
          filter: blur(20px);
          transition: opacity 0.3s ease;
          z-index: 1;
          pointer-events: none;
          border-radius: 30px;
        }

        .groupCard:hover {
          transform: translateY(-6px) translateZ(0);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          border-color: #00A0EA !important;
        }

        .groupCard:hover::before {
          opacity: 0.3;
        }

        .groupCard:active {
          transform: translateY(-2px) translateZ(0);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        }

        .groupCard:active::before {
          opacity: 0.5;
        }

        .groupCard:focus-visible {
          box-shadow: 0 0 0 4px rgba(0, 160, 234, 0.5);
        }

        .groupCard.selected {
          border: 2px solid #00A0EA !important;
          box-shadow: inset 0px 0px 10px rgba(0, 160, 234, 0.2), 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
        }
      `}</style>

            {/* ICX logo 1 - Wired to Landing Page */}
            <Link
                href="/landing-page"
                style={{
                    position: "absolute",
                    width: "174px",
                    height: "174px",
                    left: "12px",
                    top: "-12px",
                    zIndex: 10,
                }}
            >
                <Image src="/images/icx-logo.png" alt="iCX Logo" fill style={{ objectFit: "contain" }} />
            </Link>

            {/* Nav Links */}
            <div style={{ position: "absolute", width: "100%", height: "100px", zIndex: 10 }}>
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
            </div>

            {/* Lorem Ipsum Title */}
            <div
                style={{
                    position: "absolute",
                    width: "968px",
                    height: "60px",
                    left: "272px",
                    top: "162px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "75px",
                    textAlign: "center",
                    color: "#1F2E8D",
                }}
            >
                Lorem Ipsum
            </div>

            {/* Rectangle 8 (Grey Banner) */}
            <div
                style={{
                    position: "absolute",
                    width: "1277px",
                    height: "286px",
                    left: "99px",
                    top: "283px",
                    background: "#D9D9D9",
                    borderRadius: "10px",
                }}
            />

            {/* We’d like to know you... */}
            <div
                style={{
                    position: "absolute",
                    width: "968px",
                    height: "60px",
                    left: "272px",
                    top: "379px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "75px",
                    textAlign: "center",
                    color: "#1F2E8D",
                    zIndex: 5,
                }}
            >
                We’d like to know you...
            </div>

            {/* Sections Rendering */}

            {/* 1. Commercial Teams */}
            <div
                style={{
                    position: "absolute",
                    width: "1512px",
                    height: "67px",
                    left: "0px",
                    top: "634px",
                    background: "linear-gradient(90deg, #29348F 0%, #00A0EA 51.45%, #29348F 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "30px", color: "#FFFFFF" }}>
                    Commercial Teams
                </div>
            </div>
            <ScrollingRow
                groups={GROUPS_BY_CLASSIFICATION["Commercial Teams"]}
                top={789}
                selectedGroup={selectedGroup}
                onGroupSelect={setSelectedGroup}
            />

            {/* 2. Business Enabling */}
            <div
                style={{
                    position: "absolute",
                    width: "1512px",
                    height: "67px",
                    left: "0px",
                    top: "1045px",
                    background: "linear-gradient(90deg, #29348F 0%, #00A0EA 51.45%, #29348F 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "30px", color: "#FFFFFF" }}>
                    Business Enabling
                </div>
            </div>
            <ScrollingRow
                groups={GROUPS_BY_CLASSIFICATION["Business Enabling"]}
                top={1205}
                selectedGroup={selectedGroup}
                onGroupSelect={setSelectedGroup}
            />

            {/* 3. XDT */}
            <div
                style={{
                    position: "absolute",
                    width: "1512px",
                    height: "67px",
                    left: "0px",
                    top: "1455px",
                    background: "linear-gradient(90deg, #29348F 0%, #00A0EA 51.45%, #29348F 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "30px", color: "#FFFFFF" }}>
                    Experience Delivery & Transformation (XDT)
                </div>
            </div>
            <ScrollingRow
                groups={GROUPS_BY_CLASSIFICATION["XDT"]}
                top={1615}
                selectedGroup={selectedGroup}
                onGroupSelect={setSelectedGroup}
            />

        </div>
    );
}
