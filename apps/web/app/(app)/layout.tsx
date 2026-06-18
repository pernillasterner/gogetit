import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AppHeader from "@/components/app/Header";

// Inloggad användare
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <>
      {/* <DashboardNav /> */}
      <AppHeader />
      <main className="flex-1 grid grid-cols-[240px_1fr] gap-6 p-8">
        {children}
      </main>
    </>
  );
}
