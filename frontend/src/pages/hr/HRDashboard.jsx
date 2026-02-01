import { useEffect, useState } from "react";
import api from "../../api/api";

const HRDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h2>HR Dashboard</h2>
      {employees.map((emp) => (
        <p key={emp.id}>{emp.name} - ₹{emp.salary}</p>
      ))}
    </div>
  );
};

export default HRDashboard;
