import React,{useState , useEffect} from 'react'
import axios from 'axios'

export default function Home() {
  const[patients,setpatients]=useState([])
  useEffect(() =>{
    loadPatients()
  },[])    
  function loadPatients(){
    axios.get(" https://doc-back.onrender.com/patients")
    .then((res) =>{
      setpatients(res.data)
      console.log(res)
    })
  }
  return (
      <div className="container">
        <div className="row">
            <div className="card">
                <h2>Patients List</h2>{
                patients.map((i)=>(
                 <div key={i.id}>
                    <p>Patient Name:{i.name}</p>
                    <p>Gender :{i.gender}</p>
                    <p>Age :{i.age}</p>
                    <p>Weight :{i.weight}</p>
                    <p>Disease :{i.disease}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}
