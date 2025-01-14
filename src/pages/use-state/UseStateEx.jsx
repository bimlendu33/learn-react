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
  {
    id: 3,
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    department: "Design",
    email: "alice.johnson@example.com",
    phone: "+1-456-789-0123",
    status: "Inactive",
    joiningDate: "2021-11-15",
  },
  {
    id: 4,
    name: "Bob Brown",
    designation: "Quality Analyst",
    department: "Testing",
    email: "bob.brown@example.com",
    phone: "+1-321-654-0987",
    status: "Active",
    joiningDate: "2020-07-20",
  },
  {
    id: 5,
    name: "Charlie Davis",
    designation: "DevOps Engineer",
    department: "IT",
    email: "charlie.davis@example.com",
    phone: "+1-654-321-4567",
    status: "Inactive",
    joiningDate: "2019-03-10",
  },
  {
    id: 6,
    name: "Diana Moore",
    designation: "HR Specialist",
    department: "Human Resources",
    email: "diana.moore@example.com",
    phone: "+1-789-012-3456",
    status: "Active",
    joiningDate: "2023-01-05",
  },
  {
    id: 7,
    name: "Edward Thomas",
    designation: "System Administrator",
    department: "IT",
    email: "edward.thomas@example.com",
    phone: "+1-012-345-6789",
    status: "Active",
    joiningDate: "2022-02-18",
  },
  {
    id: 8,
    name: "Fiona White",
    designation: "Marketing Executive",
    department: "Marketing",
    email: "fiona.white@example.com",
    phone: "+1-987-654-1230",
    status: "Inactive",
    joiningDate: "2020-06-22",
  },
  {
    id: 9,
    name: "George King",
    designation: "Business Analyst",
    department: "Operations",
    email: "george.king@example.com",
    phone: "+1-543-210-9876",
    status: "Active",
    joiningDate: "2021-09-12",
  },
  {
    id: 10,
    name: "Hannah Taylor",
    designation: "Data Scientist",
    department: "Data Science",
    email: "hannah.taylor@example.com",
    phone: "+1-678-901-2345",
    status: "Active",
    joiningDate: "2022-12-08",
  },
];
