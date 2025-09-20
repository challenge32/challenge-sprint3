import { PropsWithChildren } from "react";
type Props = { variant?: "2" | "3" | "members"; className?: string };
export default function Grid({ variant = "2", className = "", children }: PropsWithChildren<Props>) {
  const map = {
    "2": "grid-2",
    "3": "grid-3",
    "members": "membros",
  } as const;
  return <div className={`${map[variant]} ${className}`}>{children}</div>;
}