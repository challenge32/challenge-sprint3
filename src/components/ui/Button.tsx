import { ButtonHTMLAttributes } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost";
};
export default function Button({ variant = "solid", className = "", ...rest }: Props) {
  const base = variant === "solid" ? "btn" : "btn-ghost";
  return <button className={`${base} ${className}`} {...rest} />;
}