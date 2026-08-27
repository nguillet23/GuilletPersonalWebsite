import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
  children: ReactNode;
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
  children: ReactNode;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", children, className, ...rest }: ButtonProps) {
  const classes = [styles.btn, styles[variant], className].filter(Boolean).join(" ");

  if (rest.as === "a") {
    const { as: _as, ...anchorProps } = rest;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
