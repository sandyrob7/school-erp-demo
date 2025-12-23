"use client";
import Link from "next/link";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-green-600 text-white p-4">
        <Link href="/parent">Dashboard</Link>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
