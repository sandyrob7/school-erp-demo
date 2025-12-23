export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 text-sm">
        <div>
          <div className="text-gray-500">Students</div>
          <div className="text-xl font-semibold">312</div>
        </div>

        <div>
          <div className="text-gray-500">Attendance Today</div>
          <div className="text-xl font-semibold">94%</div>
        </div>

        <div>
          <div className="text-gray-500">Fees Collected</div>
          <div className="text-xl font-semibold">₹12.4L</div>
        </div>

        <div>
          <div className="text-gray-500">Pending Dues</div>
          <div className="text-xl font-semibold">₹1.8L</div>
        </div>
      </div>
    </div>
  );
}
