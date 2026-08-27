import { NavLink as RouterNavLink } from "react-router-dom";
import type { NavLink } from "../../types/nav";
import { asset } from "../../lib/asset";
import styles from "./Navbar.module.css";

const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
];

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <RouterNavLink to="/" className={styles.logo} end>
        <img src={asset("/Content/Blue_Logo.png")} alt="Nicholas Guillet" />
      </RouterNavLink>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <RouterNavLink
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {link.label}
            </RouterNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
