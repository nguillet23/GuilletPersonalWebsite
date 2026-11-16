import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social-links";
import { Button } from "../ui/Button";
import { IconLink } from "../ui/IconLink";
import { asset } from "../../lib/asset";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.tag}>
        <span className={styles.tagInner}>{profile.role}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.desc}>{profile.heroPitch}</p>
          <div className={styles.btns}>
            <Button href={asset("/Content/Guillet_Resume.pdf")} download="Guillet_Resume.pdf">
              ↓ Resume
            </Button>
            {socialLinks.map((link) => (
              <IconLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <div className={styles.photo}>
          <img src={asset("/Content/Linkedin_Profile.jpg")} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
