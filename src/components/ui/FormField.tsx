import { PropsWithChildren } from "react";
type Props = {
  id: string;
  label: string;
  error?: string;
};
export default function FormField({ id, label, error, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium">{label}</label>
      {children}
      {error && <p role="alert" className="text-red-700">{error}</p>}
    </div>
  );
}