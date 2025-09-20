type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};
export default function ChecklistItem({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 accent-blue-600"
      />
      <span>{label}</span>
    </label>
  );
}