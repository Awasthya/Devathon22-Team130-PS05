import { NavLink, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { UserContext } from "../App";
import MyInfoCard from './MyInfoCard'
import "./MyInfo.css";
import profile from "./profileIcon.jpg";
const MyInfo = () => {
  const History = useHistory();
  const [user, setUser] = useState([]);
  
  const callAboutPage = async () => {
    try {
    
      const res = await fetch('/Info', {
        headers: { 
          Accept : 'application/json',
          'Content-Type': 'application/json'
          
        },
        credentials:'include'
      });
      
      const data = await res.json();
      console.log(data);
      setUser(data);
      if (res.status !== 200) {

        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      History.push('./signin');
      }
  }

   
  useEffect( () => {
   callAboutPage();
  }, []);
  return (
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          <div className='left col-md-4' >
                <img src={profile} alt="profileicon" />
          </div>
          <div className="right col-md-6">
            <div className="profile-head">
              <h5>Name : {user.name} </h5><br/>
              <h5>Email : {user.email}</h5><br/>
              <h5>Role : {user.type}</h5><br/>
              <h5> Roll No : {user.rollNo}</h5><br/>
              <h5> Course : {user.course}</h5><br/>
              <h5>Hostel Name : 1.8K </h5><br/>
              <h5>Room No. : A5-38</h5><br/>
            </div>
          </div>
          </div>
      </form> 
    </div>
  )
}

export default MyInfo

