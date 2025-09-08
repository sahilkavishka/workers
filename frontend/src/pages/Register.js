import { useState } from "react";
import api from "../api";
import "./Register.css"; // Import your CSS file

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register/", form);
      alert("Registered successfully! You can login now.");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <>
      {/* Background pet elements */}
      <div className="floating-pets">
        <div className="floating-pet"></div>
        <div className="floating-pet"></div>
        <div className="floating-pet"></div>
      </div>
      
      <div className="paw-trail">
        <div className="paw-print"></div>
        <div className="paw-print"></div>
        <div className="paw-print"></div>
        <div className="paw-print"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <div className="pet-icon"></div>
          <h2>Join Our Pet Family</h2>
          <p className="form-subtitle">Connect with loving pet parents & find your perfect companion</p>
        </div>
        
        <input
          placeholder=" username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder=" email address"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder=" password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select 
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          value={form.role}
        >
          <option value="buyer">🏠 Looking for a pet</option>
          <option value="seller">🐾 pet seller </option>
        </select>
        <button type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default Register;