import { useEffect, useState } from "react";
import styles from "./UseStateEx.module.css";

export default function UseStateEx() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    async function getStudents() {
      const studentsListJSONPromise = await fetch("/data/students.json");
      const studentsList = await studentsListJSONPromise.json();
      setStudents(studentsList.data);
    }

    getStudents();
  }, []);

  return (
    <>
      {students ? (
        <div className={`${styles.tableWrapper} table-responsive`}>
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Joining Date</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className={styles.cell}>{student.id}</td>
                  <td className={styles.cell}>{student.name}</td>
                  <td className={styles.cell}>{student.designation}</td>
                  <td className={styles.cell}>{student.department}</td>
                  <td className={styles.cell}>{student.email}</td>
                  <td className={styles.cell}>{student.phone}</td>
                  <td className={styles.cell}>{student.status}</td>
                  <td className={styles.cell}>{student.joiningDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
