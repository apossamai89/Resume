"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";

type Message = { role: "user" | "assistant"; content: string };

const ROLES = [
  {
    period: "2023 – Present",
    title: "Sr. ABM Manager, Global Enterprise",
    company: "Shutterstock",
    bullets: [
      "Architected signal-driven ABM across Content, Studios & AI — ROI exceeded by 250%, 425%, and 500% across three consecutive years.",
      "Led ABM expansion into Shutterstock's AI division, exceeding annual pipeline targets by 177% in Q1 alone.",
      "Closed the program's largest ever deal: an eight-figure Fortune 100 win in a 4-month cycle via AI-first account selection + targeted advertising.",
    ],
  },
  {
    period: "2021 – 2023",
    title: "ABM Manager, Global Enterprise",
    company: "Shutterstock",
    bullets: [
      "Executed 1:1, 1:few, and 1:many plays for new Enterprise launches — drove 120% growth in AOV and the program's first multi-million dollar closure.",
      "Re-stabilized a 30% YoY organic lead decline through site optimization tests and close SDR alignment.",
    ],
  },
  {
    period: "2020 – 2021",
    title: "Sr. ABM Specialist, Global Enterprise",
    company: "Shutterstock",
    bullets: [
      "Managed a multi-six-figure budget, exceeding ROI goals by 200% while cutting spend by 25%.",
      "Absorbed inbound paid media, email nurture, and marketing ops responsibilities during pandemic-driven restructuring.",
    ],
  },
  {
    period: "2018 – 2020",
    title: "ABM Specialist, Global Enterprise",
    company: "Shutterstock",
    bullets: [
      "Scaled the ABM program from 30 to 1,500+ target accounts globally with a tiered plays library.",
      "Drove adoption of 5 new ABM tools in a single quarter. Achieved 898% YoY growth in influenced revenue.",
    ],
  },
  {
    period: "2017 – 2018",
    title: "Marketing Coordinator, Enterprise",
    company: "Shutterstock Studios",
    bullets: [
      "Built Shutterstock's ABM program from scratch — 30 active 1:1 campaigns against F500 accounts in 5 months.",
    ],
  },
  {
    period: "2016 – 2017",
    title: "Contributor Recruitment Intern",
    company: "Flashstock (acq. by Shutterstock)",
    bullets: [
      "Recruited 100+ global photographers and videographers to deepen the product's creator network.",
    ],
  },
];

const SKILLS = [
  "Demandbase",
  "Salesforce",
  "Sendoso",
  "Salesloft",
  "Zoominfo",
  "LeadIQ",
  "LinkedIn Campaign Manager",
  "Tableau",
  "Contentful",
  "ChatGPT / Claude / Gemini",
];

const STATS = [
  { value: "$45M+", label: "Influenced bookings" },
  { value: "8+", label: "Years in ABM" },
  { value: "1,500+", label: "Target accounts scaled" },
  { value: "898%", label: "YoY revenue growth" },
];

const SUGGESTED = [
  "What's her biggest career achievement?",
  "What ABM tools does she know?",
  "Tell me about her AI experience",
  "Has she spoken publicly?",
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(text?: string) {
    const content = text || input.trim();
    if (!content) return;
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.main}>
      {/* Decorative background elements */}
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.nameBlock}>
            <p className={styles.eyebrow}>Portfolio</p>
            <h1 className={styles.name}>Alessandra<br />Possamai</h1>
            <p className={styles.tagline}>
              ABM leader · 8+ years · $45M+ influenced bookings
            </p>
            <div className={styles.contactRow}>
              <a href="mailto:apossamai89@gmail.com" className={styles.contactLink}>apossamai89@gmail.com</a>
              <span className={styles.dot}>·</span>
              <a href="https://linkedin.com" target="_blank" className={styles.contactLink}>LinkedIn</a>
              <span className={styles.dot}>·</span>
              <span>Toronto, ON</span>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className={styles.body}>
        {/* Left: Experience */}
        <section className={styles.experience}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {ROLES.map((role, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{role.period}</span>
                  <h3 className={styles.roleTitle}>{role.title}</h3>
                  <p className={styles.company}>{role.company}</p>
                  <ul className={styles.bullets}>
                    {role.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right: sidebar */}
        <aside className={styles.sidebar}>
          {/* Education */}
          <div className={styles.sideCard}>
            <h2 className={styles.sideTitle}>Education</h2>
            <p className={styles.sideHeading}>Bachelor of Commerce</p>
            <p className={styles.sideSub}>Rotman Commerce, University of Toronto</p>
            <p className={styles.sideBadge}>Graduated with Distinction</p>
          </div>

          {/* Skills */}
          <div className={styles.sideCard}>
            <h2 className={styles.sideTitle}>Tools & Skills</h2>
            <div className={styles.skillPills}>
              {SKILLS.map((s) => (
                <span key={s} className={styles.pill}>{s}</span>
              ))}
            </div>
          </div>

          {/* Visibility */}
          <div className={styles.sideCard}>
            <h2 className={styles.sideTitle}>Industry Visibility</h2>
            <ul className={styles.visibilityList}>
              <li>🎤 Speaker — B2B Marketing Expo</li>
              <li>🎤 Speaker — Traffic & Conversion Summit</li>
              <li>🎤 Speaker — ABM Toronto Meet-up</li>
              <li>📰 Cover feature — ABM in Action (Vol. 05, Issue 02)</li>
              <li>🎙 Guest — "Let's Talk ABM" podcast</li>
            </ul>
          </div>

          {/* AI Chat CTA */}
          <button className={styles.chatCta} onClick={() => setChatOpen(true)}>
            <span className={styles.ctaIcon}>✦</span>
            <span>Ask me anything about Alessandra</span>
          </button>
        </aside>
      </div>

      {/* Chat panel */}
      {chatOpen && (
        <div className={styles.chatOverlay} onClick={(e) => { if (e.target === e.currentTarget) setChatOpen(false); }}>
          <div className={styles.chatPanel}>
            <div className={styles.chatHeader}>
              <div>
                <p className={styles.chatTitle}>Ask Alessandra's AI</p>
                <p className={styles.chatSub}>Powered by Claude</p>
              </div>
              <button className={styles.closeBtn} onClick={() => setChatOpen(false)}>✕</button>
            </div>

            <div className={styles.chatMessages}>
              {messages.length === 0 && (
                <div className={styles.emptyState}>
                  <p>Ask anything about Alessandra's background, achievements, or skills.</p>
                  <div className={styles.suggestedGrid}>
                    {SUGGESTED.map((q) => (
                      <button key={q} className={styles.suggestedBtn} onClick={() => send(q)}>{q}</button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? styles.userMsg : styles.assistantMsg}>
                  {m.content}
                </div>
              ))}
              {loading && <div className={styles.assistantMsg}>
                <span className={styles.typingDots}><span /><span /><span /></span>
              </div>}
              <div ref={bottomRef} />
            </div>

            <div className={styles.chatInputRow}>
              <input
                className={styles.chatInput}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask a question…"
              />
              <button className={styles.sendBtn} onClick={() => send()} disabled={loading}>→</button>
            </div>
          </div>
        </div>
      )}

      {/* Floating chat button */}
      {!chatOpen && (
        <button className={styles.floatingChat} onClick={() => setChatOpen(true)}>
          <span>✦ Ask AI</span>
        </button>
      )}
    </main>
  );
}
