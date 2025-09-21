import { useState } from "react";
import api from "../api";
import "./Register.css"; 


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
    
    <div className="register-container">
      {/* Left side image */}
      <div className="register-image">
        <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a" alt="Pet" />
      </div>
      
    <div className="register-form-wrapper">
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
        <button type="submit"> Register </button>
      </form>
    </div>
    {/* right side image */}
      <div className="register-image">
  <img
    src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80"
    alt="Cute Cat"
  />
</div>

    </div>
  );
}

export default Register;