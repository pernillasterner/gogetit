import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-honeydrew gap-3 flex flex-col justify-center items-center w-fit px-8 py-20 rounded-(--ggi-radius)">
      <h1>Logga in</h1>
      <p>Hitta fokus och förutsättningar för ditt drömjobb</p>

      <LoginForm />
    </div>
  );
}
