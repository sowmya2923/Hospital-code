import React, { useState } from "react"
import axios from "axios";
import './Forms.css';

export default function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPatient = { name, age, gender, weight, disease };

    try {
      const response = await axios.post(
        "https://doc-back.onrender.com/patients",
        newPatient
      );

      console.log("Response:", response.data);
      alert("Patient added successfully!");

      setName("");
      setAge("");
      setGender("");
      setWeight("");
      setDisease("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error! Please try again.");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-header">
          <p style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🩺</p>
          <h2>Patient Admission</h2>
          <p>Please enter the patient's information to register them in our system.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              placeholder="Enter full name"
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
                placeholder="Years"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group" style={{flex: 1}}>
              <label>Weight (kg)</label>
              <input
                type="number"
                placeholder="kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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
            <label>Diagnosis / Disease</label>
            <input
              type="text"
              placeholder="Primary condition"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            Register Patient
          </button>
        </form>
      </div>
    </div>
  );
}