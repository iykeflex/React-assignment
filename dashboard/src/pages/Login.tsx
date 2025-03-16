import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Viewer");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, role as "Admin" | "Editor" | "Viewer");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Viewer">Viewer</option>
        <option value="Editor">Editor</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
