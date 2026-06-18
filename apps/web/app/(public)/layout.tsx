import PublicFooter from "@/components/public/Footer";
import PublicHeader from "@/components/public/Header";

// utloggade
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 flex flex-col justify-center items-center pt-(--header-height)">
        {children}
      </main>
      <PublicFooter />
    </>
  );
}
