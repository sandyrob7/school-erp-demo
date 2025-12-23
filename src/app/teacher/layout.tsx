"use client";
import Link from "next/link";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex gap-4">
        <Link href="/teacher">Dashboard</Link>
        <Link href="/teacher/attendance">Attendance</Link>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
