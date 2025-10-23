import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Doctor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Doctors() {
    const[doctors,setdoctors]=useState([])
    useEffect(()=>{
        console.log("from useeffect")
        loadDoctors()
    },[])
    function loadDoctors(){
        axios.get("https://doc-back.onrender.com/doctors")
        .then((res)=>{
            console.log(res.data)
            setdoctors(res.data)
        })
    }
  return (
    <div className="container">
        <div className="row">
            <div className="card">
                <h2>Doctors List</h2>{
                doctors.map((i)=>(
                 <div key={i.id}>
                    <p>Doctor Name:{i.name}</p>
                    <p>Gender :{i.gender}</p>
                    <p>Age :{i.age}</p>
                    <p>Specialization :{i.specialization}</p>
                    <p>Salary :{i.salary}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}
