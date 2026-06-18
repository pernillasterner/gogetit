import SignOutButton from "@/components/auth/SignOutButton";

export default function Dashboard() {
  return (
    <div className="bg-honeydrew gap-3  flex flex-col justify-center items-center w-fit px-8 py-20 rounded-(--radius)">
      <h1>Dashboard</h1>
      <p>Hitta fokus och förutsättningar för ditt drömjobb</p>
      <a href="/" className="font-bold">
        Tillbaka till start
      </a>

      <SignOutButton/>
    </div>
  );
}
