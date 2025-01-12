import { useEffect, useState } from "react";
import MyTable from "../../components/MyTable";

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
        <MyTable columns={columns} dataSource={dataSource} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "designation", header: "Designation" },
  { key: "department", header: "Department" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "status", header: "Status" },
  { key: "joiningDate", header: "Joining Date" },
];

const dataSource = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    department: "IT",
    email: "john.doe@example.com",
    phone: "+1-123-456-7890",
    status: "Active",
    joiningDate: "2023-05-10",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Project Manager",
    department: "Operations",
    email: "jane.smith@example.com",
    phone: "+1-987-654-3210",
    status: "Active",
    joiningDate: "2022-08-01",
  },
];
