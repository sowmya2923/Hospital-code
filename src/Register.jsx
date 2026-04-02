import React, { useState } from "react";
import axios from "axios";
import './Forms.css';

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {name,age, gender, salary, specialization, };

    console.log("Doctor data:", newDoctor);

    axios
      .post("https://doc-back.onrender.com/doctors", newDoctor)
      .then((res) => {
        console.log("Response:", res);
        alert("Doctor registered successfully!");
        setName("");
        setAge("");
        setGender("");
        setSalary("");
        setSpecialization("");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Error! Please try again.");
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-header">
          <p style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>👨‍⚕️</p>
          <h2>Medical Staff Onboarding</h2>
          <p>Register a new practitioner to the hospital's medical database.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="e.g. Dr. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div style={{display: 'flex', gap: '1rem'}}>
            <div className="form-group" style={{flex: 1}}>
              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group" style={{flex: 1}}>
              <label>Experience (Salary)</label>
              <input
                type="number"
                placeholder="₹ Amount"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="form-input"
              style={{cursor: 'pointer'}}
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Medical Specialization</label>
            <input
              type="text"
              placeholder="e.g. Cardiology, Neurology"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn" style={{background: 'linear-gradient(135deg, #1d3557 0%, var(--primary) 100%)'}}>
            Confirm Practitioner
          </button>
        </form>
      </div>
    </div>
  );
}