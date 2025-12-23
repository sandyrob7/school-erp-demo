"use client";
import students from "@/data/students.json";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="card">Students: {students.length}</div>
        <div className="card">Today Attendance: 92%</div>
        <div className="card">Fees Collected: ₹1,20,000</div>
      </div>
    </div>
  );
}
