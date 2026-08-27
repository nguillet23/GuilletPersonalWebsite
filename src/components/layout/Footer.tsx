import { socialLinks } from "../../data/social-links";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Nicholas Guillet. All rights reserved.</div>
      <div className={styles.links}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.icon === "email" ? undefined : "_blank"}
            rel={link.icon === "email" ? undefined : "noreferrer"}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
