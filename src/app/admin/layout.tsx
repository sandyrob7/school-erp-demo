"use client";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <aside className="w-60 border-r bg-white px-4 py-6">
        <h2 className="text-lg font-semibold mb-6">
          School ERP
        </h2>

        <nav className="space-y-3 text-sm">
          <Link href="/admin" className="block hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/admin/students" className="block hover:text-blue-600">
            Students
          </Link>
          <Link href="/admin/attendance" className="block hover:text-blue-600">
            Attendance
          </Link>
          <Link href="/admin/fees" className="block hover:text-blue-600">
            Fees
          </Link>
        </nav>
      </aside>

      <main className="flex-1 px-8 py-6">
        {children}
      </main>
    </div>
  );
}
