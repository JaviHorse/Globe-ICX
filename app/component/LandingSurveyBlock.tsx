"use client";

import { useEffect, useMemo, useState } from "react";

const QUESTIONS = [
  "What's one word that best describes how you're feeling right now?",
  "What emoji best describes you today?",
  "How are you doing right now?",
  "If you can give your day a hashtag, what would it be?",
  "How are things going for you today?",
  "What song best describes your day?",
  "What are you most looking forward to doing today?",
  "Where's your desk today - home, office or field?",
  "How's your day so far?",
  "What's your favorite snack to share in a meeting?",
];

function pickStableQuestionIndex(seed: string, length: number) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return Math.abs(h) % length;
}

const DARK_BLUE = "#1F2E8D";

export default function LandingSurveyBlock() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [seed, setSeed] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setSeed(crypto.randomUUID());
  }, []);

  const questionIndex = useMemo(() => {
    if (!seed) return null;
    return pickStableQuestionIndex(seed, QUESTIONS.length);
  }, [seed]);

  const question = useMemo(() => {
    if (questionIndex == null) return "";
    return QUESTIONS[questionIndex];
  }, [questionIndex]);

  useEffect(() => {
    if (!mounted) return;
    setAnswer("");
    setSubmitted(false);
  }, [question, mounted]);

  // After submit: show success then smooth-scroll down
  useEffect(() => {
    if (!submitted) return;
    const t = window.setTimeout(() => {
      document.getElementById("landing-below-question")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2200);
    return () => clearTimeout(t);
  }, [submitted]);

  const canSubmit = !!seed && answer.trim().length > 0 && answer.trim().length <= 200;

  if (!mounted) return null;

  if (submitted) {
    return (
      <div className="landing-submitted-state" style={{ textAlign: "center", padding: "24px 0" }}>
        <p style={{ color: DARK_BLUE, fontSize: 20, fontWeight: 600, margin: "0 0 20px 0", lineHeight: 1.4 }}>
          Your answer has been submitted. Thanks for sharing!
        </p>
        <p className="landing-scroll-hint" style={{ fontSize: 14, color: "rgba(31, 46, 141, 0.65)", marginBottom: 12 }}>
          See what&apos;s below
        </p>
        <div className="landing-arrow-down" style={{ display: "inline-flex", justifyContent: "center" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: DARK_BLUE }}>
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
        <p
          style={{
            color: DARK_BLUE,
            fontSize: 26,
            fontWeight: 600,
            margin: "0 0 20px 0",
            lineHeight: 1.35,
            letterSpacing: "0.01em",
            textAlign: "center",
          }}
        >
          {question}
        </p>
        <textarea
          className="landing-survey-textarea"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your response here…"
          rows={4}
          style={{
            width: "100%",
            resize: "none",
            borderRadius: 14,
            padding: "18px 20px",
            fontSize: 17,
            lineHeight: 1.5,
            color: DARK_BLUE,
            background: "#ffffff",
            border: "1px solid rgba(31, 46, 141, 0.18)",
            outline: "none",
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(31, 46, 141, 0.06)",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginTop: 16,
          }}
        >
          <span
            style={{
              fontSize: 15,
              color: answer.trim().length > 200 ? "#b91c1c" : "rgba(31, 46, 141, 0.5)",
            }}
          >
            {answer.trim().length}/200
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              type="button"
              onClick={() => {
                setAnswer("");
                setSubmitted(false);
              }}
              style={{
                borderRadius: 999,
                padding: "11px 24px",
                fontSize: 16,
                fontWeight: 600,
                border: `2px solid ${DARK_BLUE}`,
                background: "#ffffff",
                color: DARK_BLUE,
                cursor: "pointer",
                letterSpacing: "0.02em",
                boxShadow: "0 1px 4px rgba(31, 46, 141, 0.08)",
              }}
            >
              Clear
            </button>
            <button
              type="button"
              disabled={!canSubmit || submitted || submitting}
              onClick={async () => {
                if (!canSubmit || submitted || submitting || questionIndex == null || !seed) return;
                try {
                  setSubmitting(true);
                  const res = await fetch("/api/answers", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      seed,
                      questionIndex,
                      questionText: question,
                      answerText: answer.trim(),
                    }),
                  });
                  if (!res.ok) {
                    console.error("Failed to submit", await res.text());
                    return;
                  }
                  setSubmitted(true);
                } catch (err) {
                  console.error("Error submitting", err);
                } finally {
                  setSubmitting(false);
                }
              }}
              style={{
                borderRadius: 999,
                padding: "11px 26px",
                fontSize: 16,
                fontWeight: 600,
                border: "none",
                background: canSubmit && !submitted && !submitting ? DARK_BLUE : "rgba(31, 46, 141, 0.3)",
                color: "white",
                cursor: canSubmit && !submitted && !submitting ? "pointer" : "not-allowed",
                letterSpacing: "0.02em",
                boxShadow: canSubmit && !submitted && !submitting ? "0 3px 14px rgba(31, 46, 141, 0.3)" : "none",
              }}
            >
              {submitting ? "Submitting…" : "Submit"}
            </button>
          </div>
        </div>
    </div>
  );
}
