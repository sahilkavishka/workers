import { useState } from "react";
import api from "../api";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login/", form);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      alert("Logged in successfully!");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2 w-64">
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
