import React, { useEffect, useState } from "react";
import Card from "./Cards";
import './Allcomplaint.css';
const AllComplaint = () => {
    const [user, setUser] = useState({});

    //console.log(fetchdata);
    const callAboutPage = async () => {
      try {
        const response = await fetch('/Info', {
         
          headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json'
            
          },
          credentials:'include'
        });
        
        const data = await response.json();
        setUser(data);
        if (response.status !== 200) {
  
          const error = new Error(response.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        History.push('./signin');
        }
    }
    useEffect(() => {
      
      callAboutPage();
      
    }, []);
  return (
    <div className = "">
          <div className='content'>
              {console.log(user.complaints)}
                {user.complaints?.map((val,id) => {
                    return <Card key={id} id = {val._id} header = "All Complaints" Name={val.Name}  RoomNo={val.RoomNo} Type={val.Type} Complaintdesc={val.Complaint}  />
                  
                })}

               
              </div>
    </div>
  )
}

export default AllComplaint
