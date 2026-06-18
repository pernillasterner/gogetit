"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    // Behöver veta vilken användare som ska signa ut

    // Logga ut användare via supabase
    const supabase = createClient();

    await supabase.auth.signOut({ scope: "local" });
    router.push("/auth/login");
  };

  return (
    <button onClick={handleSignOut} className="border-2 border-black p-2">
      Logga ut
    </button>
  );
}
