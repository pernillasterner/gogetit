export function validateEmail(email: string): string | null {
  const trimmed = email.trim();

  if (!trimmed) {
    return "E-post krävs";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmed)) {
    return "Ogiltig e-postadress";
  }

  return null;
}

export function validatePassword(password: string): string | null {
  const trimmed = password.trim();

  if (!trimmed) {
    return "Lösenord krävs";
  }

  if (trimmed.length < 6) {
    return "Lösenordet måste vara minst 6 tecken";
  }

  return null;
}
