import AppHeader from "../../components/app/Header";

// Logged in user
export default function AppLayout({ children }: { children: React.ReactNode }) {
  // const session = await getSession(); // Supabase-koll
  // if (!session) redirect("/auth/login");

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
