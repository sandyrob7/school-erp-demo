import students from "@/data/students.json";

export default function Students() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Students</h2>

      <table className="mt-4 w-full border">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Class</th><th>Parent</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.class}-{s.section}</td>
              <td>{s.parent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
