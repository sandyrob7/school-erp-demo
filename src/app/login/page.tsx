"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function login(role: string) {
    router.push(`/${role}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 p-6 border rounded w-80">
        <h2 className="text-xl font-bold text-center">School ERP Login</h2>

        <button onClick={() => login("admin")} className="w-full btn">
          Login as Admin
        </button>
        <button onClick={() => login("teacher")} className="w-full btn">
          Login as Teacher
        </button>
        <button onClick={() => login("parent")} className="w-full btn">
          Login as Parent
        </button>
      </div>
    </div>
  );
}
