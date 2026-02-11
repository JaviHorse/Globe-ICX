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
  const [displayText, setDisplayText] = useState("");

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

  // Typing animation effect
  useEffect(() => {
    if (!question) return;

    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(question.slice(0, i + 1));
      i++;
      if (i >= question.length) {
        clearInterval(interval);
      }
    }, 40); // 40ms per character for a smooth typing feel

    return () => clearInterval(interval);
  }, [question]);

  useEffect(() => {
    if (!mounted) return;
    setAnswer("");
    setSubmitted(false);
  }, [question, mounted]);

  const canSubmit = !!seed && answer.trim().length > 0 && answer.trim().length <= 200;

  if (!mounted) return null;

  if (submitted) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(5px)',
          borderRadius: '30px',
          boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.3)',
        }}
      >
        <p style={{ color: DARK_BLUE, fontSize: 30, fontWeight: 700, margin: "0 0 20px 0", textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
          Your answer has been submitted.<br />Thanks for sharing!
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSeed(crypto.randomUUID()); // Pick a new question
          }}
          style={{
            marginTop: '20px',
            padding: '10px 30px',
            background: DARK_BLUE,
            color: 'white',
            borderRadius: '30px',
            fontSize: '20px',
            fontFamily: "'Poppins', sans-serif",
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Outer Card Background: White, 0.2 opacity, shadow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.3)',
        borderRadius: '30px'
      }} />

      {/* Inner Content - Relative to 1058x434 container */}
      <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>

        {/* QUICK CHECK IN Label */}
        <div style={{
          position: 'absolute',
          left: '45px',
          top: '35px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '0.05em',
          color: '#1F2E8D',
          opacity: 0.8
        }}>
          QUICK CHECK IN
        </div>

        {/* Question Title with Typing Animation */}
        <div
          style={{
            position: 'absolute',
            top: '70px',
            width: '100%',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '36px',
            textAlign: 'center',
            color: '#1F2E8D',
            padding: '0 40px',
            boxSizing: 'border-box',
            height: '40px' // Maintain height during typing
          }}
        >
          {displayText}
          <span style={{ borderRight: '2px solid #1F2E8D', marginLeft: '2px', animation: 'blink 0.7s infinite' }} />
          <style jsx>{`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}</style>
        </div>

        {/* Input Box Area */}
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type here..."
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '130px',
            width: '85%',
            maxWidth: '900px',
            height: '140px',
            background: 'rgba(224, 217, 217, 0.3)',
            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '20px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '18px',
            color: '#1F2E8D',
            resize: 'none',
            outline: 'none',
            textAlign: 'center'
          }}
        />

        {/* Buttons Area - Bottom Right */}
        <div style={{
          position: 'absolute',
          bottom: '35px',
          right: '45px',
          display: 'flex',
          gap: '15px'
        }}>
          {/* Clear Button */}
          <button
            type="button"
            onClick={() => setAnswer("")}
            style={{
              width: '140px',
              height: '44px',
              background: '#938E8E',
              borderRadius: '50px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            Clear
          </button>

          {/* Submit Button */}
          <button
            type="button"
            onClick={async () => {
              if (!canSubmit || submitting) return;
              setSubmitting(true);
              try {
                await fetch("/api/answers", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    seed,
                    questionIndex,
                    questionText: question,
                    answerText: answer.trim(),
                  }),
                });
                setSubmitted(true);
              } catch (e) {
                console.error(e);
              } finally {
                setSubmitting(false);
              }
            }}
            disabled={!canSubmit || submitting}
            style={{
              width: '140px',
              height: '44px',
              background: canSubmit ? '#1F2E8D' : '#938E8E',
              borderRadius: '50px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              color: '#FFFFFF',
              border: 'none',
              cursor: canSubmit ? 'pointer' : 'not-allowed',
              opacity: canSubmit ? 1 : 0.7,
              transition: 'background 0.2s'
            }}
          >
            {submitting ? "..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
