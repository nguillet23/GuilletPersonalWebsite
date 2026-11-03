import { SkillsGrid } from "./SkillsGrid";
import { alsoWorkWith } from "../../data/skills";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { asset } from "../../lib/asset";
import styles from "./About.module.css";

export function About() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.about}>
      <div className="section-label">About</div>
      <h2>Who I Am</h2>
      <div ref={revealRef} className={`${styles.grid} reveal`}>
        <div className={styles.photo}>
          <img src={asset("/Content/FrisbeeProfile.png")} alt="Nicholas Guillet" />
        </div>
        <div className={styles.text}>
          <p>
            I'm a <strong>Computer Engineering</strong> student who builds{" "}
            <strong>software, machine-learning models, data pipelines, and AI workflows</strong>{" "}
            that connect engineers, business teams, and customers. My goal is to become a technical
            leader on Agile teams that own systems end to end.
          </p>
          <p>
            I'm on track to receive my Bachelor of Science in Computer Engineering from{" "}
            <strong>Villanova University</strong> in May 2027, with minors in Mathematics, Computer
            Science, and Business.
          </p>
          <p>
            During the summer of 2026, I was a{" "}
            <strong>Software Engineer Intern at ConstructConnect</strong>, where I improved an NLP
            model's precision and recall by over 20%.
          </p>
          <p>
            When I'm not engineering, I'm likely outside playing <strong>Ultimate Frisbee</strong>{" "}
            at Villanova, where I am a <strong>Captain</strong> for Villanova Club Ultimate Frisbee.
          </p>
        </div>
      </div>
      <div className={styles.skillsWrapper}>
        <p className={styles.skillsLabel}>Tech I work with</p>
        <SkillsGrid />
        <p className={styles.alsoWorkWith}>Also: {alsoWorkWith.join(" · ")}</p>
      </div>
    </section>
  );
}
