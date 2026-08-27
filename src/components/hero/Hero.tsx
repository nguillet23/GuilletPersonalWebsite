import { socialLinks } from "../../data/social-links";
import { Button } from "../ui/Button";
import { IconLink } from "../ui/IconLink";
import { asset } from "../../lib/asset";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.tag}>
        <span className={styles.tagInner}>Computer Engineer</span>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.name}>Nicholas Guillet</h1>
          <p className={styles.desc}>
            Rising Senior Computer Engineer at Villanova University interested in Software and
            Data Engineering.
          </p>
          <p className={styles.desc}>
            Post-Graduation, I plan on pursuing a Master of Science in Sports Performance
            Engineering at Villanova University.
          </p>
          <div className={styles.btns}>
            <Button as="a" href={asset("/Content/Guillet_Resume.pdf")} download="Guillet_Resume.pdf">
              ↓ Resume
            </Button>
            {socialLinks.map((link) => (
              <IconLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <div className={styles.photo}>
          <img src={asset("/Content/Linkedin_Profile.jpg")} alt="Nicholas Guillet" />
        </div>
      </div>
    </section>
  );
}
