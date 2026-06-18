"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { validateEmail, validatePassword } from "@/lib/validation/validation";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setError(emailError || passwordError);
      return;
    }

    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    // console.log("data:", data);
    // console.log("error:", error);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/onboarding");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <label htmlFor="email" className="sr-only">
        Lägg till din e-post
      </label>

      <TextField
        id="email"
        label="E-post"
        type="email"
        autoComplete="off"
        value={email}
        onChange={setEmail}
      />

      <TextField
        id="password"
        label="Lösenord"
        type="password"
        autoComplete="off"
        value={password}
        onChange={setPassword}
      />

      <Button type="submit">Go get it!</Button>
    </form>
  );
}
