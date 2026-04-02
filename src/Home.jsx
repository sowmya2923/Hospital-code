import React,{useState , useEffect} from 'react'
import axios from 'axios'
import './App.css'

export default function Home() {
  const[patients,setpatients]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(() =>{
    loadPatients()
  },[])    
  function loadPatients(){
    axios.get(" https://doc-back.onrender.com/patients")
    .then((res) =>{
      setpatients(res.data)
      console.log(res)
      setLoading(false)
    })
    .catch(() => setLoading(false))
  }
  return (
    <>
      <div className="page-hero">
        <div className="hero-badge">🏥 Patient Directory</div>
        <h1>Patient Records</h1>
        <p>View and manage all registered patient information in one place.</p>
      </div>

      <div className="patients-section">
        <div className="section-header">
          <h2 className="section-title">All Patients</h2>
          <span className="section-count">{patients.length} Records</span>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading patient records...</p>
          </div>
        ) : patients.length === 0 ? (
          <div className="empty-state">
            <p style={{fontSize:'3rem', marginBottom:'1rem'}}>📋</p>
            <p>No patient records found.</p>
          </div>
        ) : (
          <div className="patients-grid">
            {patients.map((i)=>(
              <div className="patient-card" key={i.id}>
                <div className="patient-card-header">
                  <div className="patient-avatar">
                    {i.name ? i.name.charAt(0).toUpperCase() : '?'}
                  </div>
                  <div>
                    <div className="patient-name">{i.name}</div>
                    <div className="patient-id">ID: #{i.id || '—'}</div>
                  </div>
                </div>
                <div className="patient-card-body">
                  <div className="detail-row">
                    <span className="detail-icon">👤</span>
                    <span className="detail-label">Gender</span>
                    <span>{i.gender}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-icon">🎂</span>
                    <span className="detail-label">Age</span>
                    <span>{i.age} years</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-icon">⚖️</span>
                    <span className="detail-label">Weight</span>
                    <span>{i.weight} kg</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-icon">🩺</span>
                    <span className="detail-label">Condition</span>
                    <span className="disease-badge">{i.disease}</span>
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
