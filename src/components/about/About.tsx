import { SkillsGrid } from "./SkillsGrid";
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
            I'm a <strong>Computer Engineering Major</strong> with an interest using my technical
            background to go into the sports industry to help improve player and organization{" "}
            <strong>Selection, Development, Performance.</strong>
          </p>
          <p>
            Currently, I am a student at <strong>Villanova University</strong>, where I am on
            track to receive my Bachelor's of Science in Computer Engineering in the Spring of
            2027 with minors in Computer Science, Business, and Mathematics.
          </p>
          <p>
            During the summer of 2026, I was a <strong>Data Science Intern at Construct Connect</strong>,
            under the mentorship of Senior Data Scientist, <strong>Roshan Darji</strong>.
          </p>
          <p>
            When I'm not engineering, I'm likely outside playing <strong>Ultimate Frisbee</strong>{" "}
            at Villanova, where I am a <strong>Captain</strong> for Main Line Ultimate.
          </p>
        </div>
      </div>
      <div className={styles.skillsWrapper}>
        <p className={styles.skillsLabel}>Tech I work with</p>
        <SkillsGrid />
      </div>
    </section>
  );
}
