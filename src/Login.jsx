import React, { useState } from "react";
import axios from "axios";


export default function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight ,setWeight] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {name,age, gender, weight, disease, };

    console.log("Patient data:", newPatient);

    axios
      .post("https://doc-back.onrender.com/patients", newPatients)
      .then((res) => {
        console.log("Response:", res);
        alert("patient login successfully!");
        
        
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Error! Please try again.");
      });
  };

  return (
    

    
      <div className="register-form">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Age:  </label>
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:  </label>
            <input
              type="text"
              placeholder="Enter gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Weight: </label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Disease: </label>
            <input
              type="text"
              placeholder="Enter disease"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
  );
}