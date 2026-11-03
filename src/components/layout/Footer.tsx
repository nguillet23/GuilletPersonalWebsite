import { socialLinks } from "../../data/social-links";
import { isExternalLink } from "../../types/nav";
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
            title={link.detail}
            target={isExternalLink(link) ? "_blank" : undefined}
            rel={isExternalLink(link) ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
