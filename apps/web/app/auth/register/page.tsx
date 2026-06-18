import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="bg-honeydrew gap-3 flex flex-col justify-center items-center w-fit px-8 py-20 rounded-(--ggi-radius)">
      <h1>Registrering formulär</h1>
      <p>Hitta fokus och förutsättningar för ditt drömjobb</p>

      <RegisterForm />
    </div>
  );
}
