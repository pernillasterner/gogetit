// Kräver inloggning, har egen nav och sidmeny

// export default async function AppLayout({ children }) {
//   const session = await getSession(); // Supabase-koll
//   if (!session) redirect("/auth/login");

//   return (
//     <>
//       <DashboardNav />
//       {children}
//     </>
//   );
// }