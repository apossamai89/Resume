"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useInView } from "./hooks/useInView";
import { useCountUp } from "./hooks/useCountUp";

const STATS = [
  { prefix: "$", value: 45, suffix: "M+", label: "Influenced bookings", color: "green" },
  { prefix: "",  value: 8,  suffix: "+",  label: "Years in ABM",         color: "blue"  },
  { prefix: "",  value: 1500, suffix: "+", label: "Target accounts",     color: "blue"  },
  { prefix: "",  value: 898, suffix: "%",  label: "YoY revenue growth",  color: "green" },
] as const;

const ROLES = [
  {
    period: "Mar 2023 – Present",
    title: "Sr. ABM Manager, Global Enterprise",
    company: "Shutterstock",
    current: true,
    highlight: { value: "500%", label: "ROI Exceeded", color: "green" as const },
    bullets: [
      "Architected signal-driven ABM across Content, Studios & AI — ROI exceeded by 250%, 425%, and 500% across three consecutive years.",
      "Led ABM expansion into Shutterstock's AI division, exceeding annual pipeline targets by 177% in Q1 alone.",
      "Closed program's largest ever deal: an eight-figure Fortune 100 win in a 4-month cycle via AI-first account selection + targeted advertising.",
    ],
  },
  {
    period: "Mar 2021 – Mar 2023",
    title: "ABM Manager, Global Enterprise",
    company: "Shutterstock",
    highlight: { value: "120%", label: "AOV Growth", color: "green" as const },
    bullets: [
      "Executed 1:1, 1:few, and 1:many plays for new Enterprise launches — drove 120% growth in AOV and the program's first multi-million dollar closure.",
      "Re-stabilized a 30% YoY organic lead decline through site optimization tests and close SDR alignment.",
    ],
  },
  {
    period: "Mar 2020 – Mar 2021",
    title: "Sr. ABM Specialist, Global Enterprise",
    company: "Shutterstock",
    highlight: { value: "200%", label: "ROI vs Goal", color: "green" as const },
    bullets: [
      "Managed a multi-six-figure budget, exceeding ROI goals by 200% while cutting spend by 25%.",
      "Absorbed inbound paid media, email nurture, and marketing ops responsibilities during pandemic-driven restructuring.",
    ],
  },
  {
    period: "Jun 2018 – Mar 2020",
    title: "ABM Specialist, Global Enterprise",
    company: "Shutterstock",
    highlight: { value: "898%", label: "YoY Revenue Growth", color: "green" as const },
    bullets: [
      "Scaled the ABM program from 30 to 1,500+ target accounts globally with a tiered plays library.",
      "Drove adoption of 5 new ABM tools in a single quarter. Achieved 898% YoY growth in influenced revenue.",
    ],
  },
  {
    period: "Sep 2017 – May 2018",
    title: "Marketing Coordinator, Enterprise",
    company: "Shutterstock Studios",
    highlight: { value: "30", label: "Campaigns in 5 Months", color: "blue" as const },
    bullets: [
      "Built Shutterstock's ABM program from scratch — 30 active 1:1 campaigns against F500 accounts in 5 months.",
    ],
  },
  {
    period: "Jun 2016 – Aug 2017",
    title: "Contributor Recruitment Intern",
    company: "Flashstock (acq. by Shutterstock)",
    highlight: { value: "100+", label: "Creators Recruited", color: "blue" as const },
    bullets: [
      "Recruited 100+ global photographers and videographers to deepen the product's creator network.",
    ],
  },
];

const TOOLS = [
  "Demandbase", "Salesforce", "Sendoso", "Salesloft",
  "Zoominfo", "LeadIQ", "LinkedIn Campaign Manager",
  "Tableau", "Contentful", "ChatGPT / Claude / Gemini",
];

const SPEAKING = [
  { icon: "🎤", text: "Speaker — B2B Marketing Expo" },
  { icon: "🎤", text: "Speaker — Traffic & Conversion Summit" },
  { icon: "🎤", text: "Speaker — ABM Toronto Meet-up" },
  { icon: "📰", text: 'Cover feature — ABM in Action (Vol. 05, Issue 02)' },
  { icon: "🎙", text: 'Guest — "Let\'s Talk ABM" podcast' },
];

function HeroStat({ stat, active }: { stat: typeof STATS[number]; active: boolean }) {
  const count = useCountUp(stat.value, 1400, active);
  return (
    <div className={styles.heroStat}>
      <span className={`${styles.heroStatValue} ${styles[stat.color]}`}>
        {stat.prefix}{active ? count : 0}{stat.suffix}
      </span>
      <span className={styles.heroStatLabel}>{stat.label}</span>
    </div>
  );
}

function ExperienceCard({ role }: { role: typeof ROLES[number] }) {
  const [ref, isVisible] = useInView(0.1);
  return (
    <div ref={ref} className={`${styles.expCard} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.expLeft}>
        {role.current && <span className={styles.currentBadge}>● Current</span>}
        <span className={styles.expPeriod}>{role.period}</span>
      </div>
      <div className={styles.expCenter}>
        <h3 className={styles.expTitle}>{role.title}</h3>
        <p className={styles.expCompany}>{role.company}</p>
        <ul className={styles.expBullets}>
          {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
      <div className={styles.expRight}>
        <span className={`${styles.expMetricValue} ${styles[role.highlight.color]}`}>
          {role.highlight.value}
        </span>
        <span className={styles.expMetricLabel}>{role.highlight.label}</span>
      </div>
    </div>
  );
}

function ToolItem({ tool }: { tool: string }) {
  const [ref, isVisible] = useInView(0.1);
  return (
    <div ref={ref} className={`${styles.toolItem} ${isVisible ? styles.visible : ""}`}>
      {tool}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <span className={styles.navName}>Alessandra Possamai</span>
        <div className={styles.navLinks}>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" className={`${styles.hero} ${mounted ? styles.mounted : ""}`}>
          <div className={styles.heroBadge}>✦ ABM Leader · Signal-Driven Growth</div>
          <h1 className={styles.heroName}>
            <span>Alessandra</span>
            <span className={styles.heroNameAccent}>Possamai</span>
          </h1>
          <p className={styles.heroTagline}>
            8+ years architecting signal-driven ABM programs generating $45M+ in influenced bookings against Fortune 500 accounts globally.
          </p>
          <div className={styles.heroStats}>
            {STATS.map((s) => (
              <HeroStat key={s.label} stat={s} active={mounted} />
            ))}
          </div>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.ctaPrimary}>✉ Get In Touch</a>
            <a href="#experience" className={styles.ctaOutline}>View Experience</a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Career Journey</h2>
            <p className={styles.sectionSub}>Building success across enterprise accounts</p>
          </div>
          <div className={styles.expList}>
            {ROLES.map((role, i) => <ExperienceCard key={i} role={role} />)}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
            <p className={styles.sectionSub}>Technology-driven ABM leadership</p>
          </div>
          <div className={styles.skillsGrid}>
            <div>
              <h3 className={styles.skillsSubtitle}>Tools & Platforms</h3>
              <div className={styles.toolsList}>
                {TOOLS.map((t) => <ToolItem key={t} tool={t} />)}
              </div>
            </div>
            <div>
              <h3 className={styles.skillsSubtitle}>Industry Visibility</h3>
              <div className={styles.visibilityList}>
                {SPEAKING.map((s, i) => (
                  <div key={i} className={styles.visibilityItem}>
                    <span>{s.icon}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.educationCard}>
                <p className={styles.eduDegree}>Bachelor of Commerce</p>
                <p className={styles.eduSchool}>Rotman Commerce, University of Toronto</p>
                <span className={styles.eduBadge}>Graduated with Distinction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
            <p className={styles.sectionSub}>Ready to drive growth together</p>
          </div>
          <div className={styles.contactGrid}>
            <a href="mailto:apossamai89@gmail.com" className={styles.contactCard}>
              <span className={styles.contactIcon}>✉</span>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>apossamai89@gmail.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" className={styles.contactCard}>
              <span className={styles.contactIcon}>in</span>
              <span className={styles.contactLabel}>LinkedIn</span>
              <span className={styles.contactValue}>Connect on LinkedIn</span>
            </a>
            <div className={styles.contactCard}>
              <span className={styles.contactIcon}>📍</span>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactValue}>Toronto, ON</span>
            </div>
          </div>
          <div className={styles.contactCta}>
            <h3>Ready to Connect?</h3>
            <p>Let&apos;s discuss how signal-driven ABM can accelerate your enterprise pipeline.</p>
            <a href="mailto:apossamai89@gmail.com" className={styles.ctaPrimary}>✉ Send a Message</a>
          </div>
        </section>
      </main>
    </>
  );
}
