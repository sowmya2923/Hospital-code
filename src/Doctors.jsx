import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Doctor.css'
import './App.css'

export default function Doctors() {
    const[doctors,setdoctors]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        loadDoctors()
    },[])
    function loadDoctors(){
        axios.get("https://doc-back.onrender.com/doctors")
        .then((res)=>{
            setdoctors(res.data)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  return (
    <>
      <div className="page-hero">
        <div className="hero-badge"> Medical Staff</div>
        <h1>Our Specialists</h1>
        <p>Meet our highly qualified doctors and healthcare professionals.</p>
      </div>

      <div className="doctors-section">
        <div className="section-header">
            <h2 className="section-title">Verified Practitioners</h2>
            <span className="section-count">{doctors.length} Doctors</span>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading medical staff details...</p>
          </div>
        ) : (
          <div className="doctors-grid">
            {doctors.map((i)=>(
              <div className="doctor-card" key={i.id}>
                <div className="doctor-card-header">
                  <div className="doctor-avatar">
                    {i.name ? i.name.charAt(0).toUpperCase() : 'Dr'}
                  </div>
                  <div className="doctor-name">Dr. {i.name}</div>
                  <span className="specialization-badge">{i.specialization}</span>
                </div>
                <div className="doctor-card-body">
                  <div className="doctor-detail-row">
                    <span className="doc-detail-icon">👤</span>
                    <span className="doc-detail-label">Gender</span>
                    <span className="doc-detail-value">{i.gender}</span>
                  </div>
                  <div className="doctor-detail-row">
                    <span className="doc-detail-icon">📅</span>
                    <span className="doc-detail-label">Age</span>
                    <span className="doc-detail-value">{i.age} Years</span>
                  </div>
                  <div className="doctor-detail-row">
                    <span className="doc-detail-icon">💎</span>
                    <span className="doc-detail-label">Expertise</span>
                    <span className="doc-detail-value">{i.specialization}</span>
                  </div>
                  <div className="doctor-detail-row">
                    <span className="doc-detail-icon">🏦</span>
                    <span className="doc-detail-label">Consulting</span>
                    <span className="doc-detail-value salary-value">₹ {i.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
