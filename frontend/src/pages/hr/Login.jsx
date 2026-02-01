import { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("HR");
  const navigate = useNavigate();

  const loginHandler = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      const res = await api.post("/auth/login", { email, role });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      role === "HR" ? navigate("/hr") : navigate("/employee");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="HR">HR</option>
          <option value="EMPLOYEE">Employee</option>
        </select>

        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
