import students from "@/data/students.json";

export default function AttendancePage() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Mark Attendance</h2>

      {students.map(s => (
        <div key={s.id}>
          <input type="checkbox" defaultChecked /> {s.name}
        </div>
      ))}

      <br />
      <button onClick={() => alert("Attendance Saved")}>
        Save Attendance
      </button>
    </div>
  );
}
