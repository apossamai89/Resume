"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useInView } from "./hooks/useInView";
import { useCountUp } from "./hooks/useCountUp";

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

// prefix, numeric value, suffix
const STATS: { prefix: string; value: number; suffix: string; label: string }[] = [
  { prefix: "$", value: 45, suffix: "M+", label: "Influenced bookings" },
  { prefix: "", value: 8, suffix: "+", label: "Years in ABM" },
  { prefix: "", value: 1500, suffix: "+", label: "Target accounts scaled" },
  { prefix: "", value: 898, suffix: "%", label: "YoY revenue growth" },
];

function StatCard({ stat, index, gridVisible }: { stat: typeof STATS[0]; index: number; gridVisible: boolean }) {
  const count = useCountUp(stat.value, 1200, gridVisible);
  const display = gridVisible ? count : 0;
  return (
    <div
      className={`${styles.statCard} ${gridVisible ? styles.visible : ""}`}
      style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
    >
      <span className={styles.statValue}>
        {stat.prefix}{display}{stat.suffix}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  );
}

function TimelineItem({ role, index }: { role: typeof ROLES[0]; index: number }) {
  const [ref, isVisible] = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${isVisible ? styles.visible : ""}`}
      style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}
    >
      <div className={styles.timelineDot} />
      <div className={styles.timelineContent}>
        <span className={styles.period}>{role.period}</span>
        <h3 className={`${styles.roleTitle} ${index === 0 ? styles.roleTitleCurrent : ""}`}>{role.title}</h3>
        <p className={styles.company}>{role.company}</p>
        <ul className={styles.bullets}>
          {role.bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SideCard({ children, index }: { children: React.ReactNode; index: number }) {
  const [ref, isVisible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`${styles.sideCard} ${isVisible ? styles.visible : ""}`}
      style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function SkillPills() {
  const [ref, isVisible] = useInView(0.1);
  return (
    <div ref={ref} className={`${styles.skillPills} ${isVisible ? styles.visible : ""}`}>
      {SKILLS.map((s, i) => (
        <span
          key={s}
          className={styles.pill}
          style={{ "--pill-index": i } as React.CSSProperties}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [nameVisible, setNameVisible] = useState(false);
  const [statsRef, statsVisible] = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setNameVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={`${styles.nameBlock} ${nameVisible ? styles.nameVisible : ""}`}>
            <p className={styles.eyebrow}>Portfolio</p>
            <h1 className={styles.name}>
              Alessandra<br />
              <span className={styles.nameUnderline}>Possamai</span>
            </h1>
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

          <div ref={statsRef} className={styles.statsGrid}>
            {STATS.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} gridVisible={statsVisible} />
            ))}
          </div>
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.experience}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {ROLES.map((role, i) => (
              <TimelineItem key={i} role={role} index={i} />
            ))}
          </div>
        </section>

        <aside className={styles.sidebar}>
          <SideCard index={0}>
            <h2 className={styles.sideTitle}>Education</h2>
            <p className={styles.sideHeading}>Bachelor of Commerce</p>
            <p className={styles.sideSub}>Rotman Commerce, University of Toronto</p>
            <p className={styles.sideBadge}>Graduated with Distinction</p>
          </SideCard>

          <SideCard index={1}>
            <h2 className={styles.sideTitle}>Tools & Skills</h2>
            <SkillPills />
          </SideCard>

          <SideCard index={2}>
            <h2 className={styles.sideTitle}>Industry Visibility</h2>
            <ul className={styles.visibilityList}>
              <li>🎤 Speaker — B2B Marketing Expo</li>
              <li>🎤 Speaker — Traffic & Conversion Summit</li>
              <li>🎤 Speaker — ABM Toronto Meet-up</li>
              <li>📰 Cover feature — ABM in Action (Vol. 05, Issue 02)</li>
              <li>🎙 Guest — "Let's Talk ABM" podcast</li>
            </ul>
          </SideCard>
        </aside>
      </div>
    </main>
  );
}
