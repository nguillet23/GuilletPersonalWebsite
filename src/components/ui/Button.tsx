import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

/** A link styled as a button. Every call site links somewhere, so it always renders an `<a>`. */
export function Button({ variant = "primary", children, className, ...rest }: ButtonProps) {
  const classes = [styles.btn, styles[variant], className].filter(Boolean).join(" ");

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
