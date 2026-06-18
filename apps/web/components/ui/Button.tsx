type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
};

export function Button({ type = "button", children }: ButtonProps) {
  return (
    <button type={type} className="border-2 border-black py-2">
      {children}
    </button>
  );
}
