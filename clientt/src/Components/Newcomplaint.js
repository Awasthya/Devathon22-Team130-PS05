import React, { useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "./newcomplaint.css";
const Newcomplaint = () => {
  const [user, setUser] = useState({
    name: "",
    roomno: "",
    type: "",
    complaint:""
  });
  
  const History = useHistory();
let name,value;

const handleInput = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
    
    console.log(value);
}
const postData = async (e) => {
    e.preventDefault();
    const { name, roomno,type,complaint} = user;
    
    console.log(name, roomno,type,complaint);
    const res = await fetch("/complaint", {
        method: "POST",
        headers : {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
          name, roomno,type,complaint
        })
        
    });
    
  const data = await res.json();
  console.log(data);
    console.log('hel');
    if (data.status === 422 || !data ) {
        window.alert("Invalid Registartion");    
    } else {
        window.alert("Complaint submitted successfull");
        History.push('./mycomplaint');
    }
}
    return (
      <>
        <div>
         
          <form className="fromstyle" method="POST">
          <h2> Enter Your Complaint :</h2><br/>
    <label for="fname" > Name</label>
            <input type="text" value={user.name} onChange={handleInput} id="name" name="name" placeholder="Your name.." />

    <label for="lname"> Room No.</label>
            <input type="text" id="roomno" value={user.roomno} onChange={handleInput} name="roomno" placeholder="Room No" />

    Complaint Type: <br/><br/>
            <select id="type" name="type" value={user.type} onChange={handleInput}>
      <option value="Electrician">Electrician</option>
              <option value="plumber">plumber</option>
              <option value="Sweeper">Sweeper</option>
      <option value="chief warden">chief warden</option>
      </select>
            
            
    
   Complaint : 
                    <textarea type="text" id="other" value={user.complaint} name="complaint" onChange={handleInput} cols = "15" placeholder="enter your complaint" />
                    
    <input type="submit" onClick = {postData} value="Submit" />
  </form>
    </div>
      </>
  
  )
}

export default Newcomplaint
