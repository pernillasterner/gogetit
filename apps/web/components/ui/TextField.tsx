type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  autoComplete: string;
  onChange: (value: string) => void;
  error?: string;
};

export function TextField({
  id,
  label,
  type = "text",
  value,
  autoComplete,
  onChange,
  error,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}
