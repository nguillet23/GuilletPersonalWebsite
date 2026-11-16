import { SkillsGrid } from "./SkillsGrid";
import { alsoWorkWith } from "../../data/skills";
import { profile } from "../../data/profile";
import { RichText } from "../ui/RichText";
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
          <img src={asset("/Content/FrisbeeProfile.png")} alt={profile.name} />
        </div>
        <div className={styles.text}>
          {profile.bio.map((paragraph, i) => (
            <p key={i}>
              <RichText runs={paragraph} />
            </p>
          ))}
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
