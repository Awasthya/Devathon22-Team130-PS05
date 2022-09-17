import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const MyInfoCard = (props) => {
    const History = useHistory();
    const [user, setUser] = useState({Name:"" , RoomNo: "", Type : "", Complaint : ""});
    
    const { id } = useParams();
    const UserInfo = async () => {
        try { 
            console.log(id);
            const res = await fetch(`/getcomplaints/${id}`, {
            
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                    
                  },
                  credentials:'include'
               
                
            });
            const data = await res.json();
            if(data){
                setUser(data);
            }
          } catch (err) {
            console.log(err);
            History.push('./signin');
            }
    }
    const storeData = async (e) => {
        e.preventDefault();
        const { Name, RoomNo,Type,Complaint } = user;
        console.log(Name, RoomNo,Type,Complaint);
        const res = await fetch(`/updateComplaint/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                Name, RoomNo,Type,Complaint
            })
            
        });
        
        const data = await res.json();
        
        if (!data) {
            window.alert("data is not stored");
        } else {
            window.alert('changes made');
            History.push('../mycomplaint');
        }
    }
    useEffect(() => {
        UserInfo();
    }, []);
    
    let name,value;
    
    const handleInput = (event) =>{
        name = event.target.name;
        value = event.target.value;
        
        setUser({ ...user, [name]: value });
        
        console.log(value);
    }
    return (
       
        <div className='MainContaint'>
      <div className='container'>
          <div className='heading text-center'>
          <h1> update complaint</h1>
          </div>     
        <form method="POST" className="register-form" id="register-form" action=''>
      
        <div className="form-group" s>
        <label for="name"></label>
        <input type="text" name="Name" id="name"
        value={user.Name}
        onChange={handleInput}
        placeholder= {props.Name}/>
                  </div>
                  <div className="form-group">
        <label for="name"></label>
                      <input type="text" name="RoomNo" id="name"
                          value={user.RoomNo}
                          onChange={handleInput}
                          placeholder={props.roomno} />
                    </div>
                    <div className="form-group">
                        <label for="Specific To"></label>
                        <input type="text" name="Type" id="email"
                        value={user.Type}
                        onChange={handleInput}
                        placeholder="Specific to" />
                    </div>
                    <div className="form-group">
                        <label for="Phone"></label>
                        <input type="text" name="Complaint" id="phone"
                       value={user.Complaint}
                        onChange={handleInput}
                        placeholder={props.Complaint}/>
                    </div>
                  
                    <div className="form-group form-button">
                        <input type="submit"  onClick = {storeData} name="signup" id="signup" className="form-submit" value="Register"/>
                    </div>
                </form>
              </div>
    </div>
  )
}

export default MyInfoCard

