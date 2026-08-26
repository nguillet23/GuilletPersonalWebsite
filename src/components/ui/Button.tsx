import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  // TODO: styled per variant, mirroring .btn-primary / .btn-ghost
  return null;
}
