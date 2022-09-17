import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './viewcomplaint.css';
const ViewComplaints = () => {

    const [selects, setSelects] = useState('All')
    const [stat, setStat] = useState('Pending')
    const [complaints, setComplaints] = useState([])
    
    const History = useHistory();
    let [user, setUserData] = useState({});
    let count = 1;
    const callAboutPage = async () => {
        try {
          
        const response = await fetch('/database', {
         
          headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json'
            
          },
          credentials:'include'
        });
        
            const data = await response.json();
            let temp = [];
            for (let i = 0; i < data.length; i++)
            {

                // console.log("d => ", data[i].complaints)
                temp = [...temp, ...data[i].complaints]
                
            }
          console.log(temp);
            setUserData(data);
            setComplaints(temp);
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
    <div>
        <div className='h-20'></div>
        <div className='flex justify-center items-center text-5xl mt-10 mb-5 team'><h2>Complaints</h2> </div>
          <div>
            <table className='mainx' >
                <thead>
                    <tr className='bg-[#009879]  text-left '>
                        <th aria-colindex={1} className='tablehead'>S.No</th>
                        <th aria-colindex={2} className='tablehead'>Name</th>
                        <th aria-colindex={2} className='tablehead'>Complaint</th>
                        <th aria-colindex={3} className='tablehead'>type
                            <select className='mx-4 text-black text-base dropdown' value={selects} onChange={e=>setSelects(e.target.value)}>
                                <option>All</option>
                                <option>Plumber</option>
                                <option>Electrician</option>
                                <option>Carpenter</option>
                            </select>
                        </th>
                        <th aria-colindex={4} className='tablehead'>status
                            <select className='mx-4 text-black text-base dropdown' value={stat} onChange={e=>setStat(e.target.value)}>
                                <option>Both</option>
                                <option>false</option>
                                <option>true</option>
                            </select>
                          </th>
                          
                          <th className='tablehead'>Room No</th>
                        <th className='tablehead'>Time</th>
                    </tr>
                </thead>
                <tbody>


                      {
                        
                        complaints?.map((complain) => (
                    // //    ((type === selects || selects === 'All') && (status === stat || stat === 'Both') && (
                            <tr>
                                    <td className='tabledata'>{count}</td>
                                    <td className='tabledata'>{complain.Name} </td>
                                     <td className='tabledata'>{complain.Complaint} </td> 
                                <td className='tabledata'>{complain.Type}</td>
                                <td className='tabledata'>{complain.Status}</td>
                                <td className='tabledata'>{complain.RoomNo}</td>
                                <td className='tabledata'>{complain.date}</td>
                              {/* <td>{date}</td> */}
                             </tr>
                        ))
                    // )
                    //   )
                }

                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ViewComplaints


/*
const Complaints = [
        {
            id: 1,
            Name : 'Amit Awasthi',
            complaint : 'w3twtreee',
            type : 'Plumber',
            status : 'Resolved',
            date : '17/09/22 10:15PM'
        },
        {
            id: 2,
            Name : 'Amit Awasthi',
            complaint: 'retwhre t',
            type : 'Electrician',
            status : 'Pending',
            date : '17/09/22 12:15PM'
        },
        {
            id: 3,
            Name : 'Amit Awasthi',
            complaint : 'bjkaidohe',
            type : 'Electrician',
            status : 'Pending',
            date : '17/09/22 12:15PM'
        },
        {
            id: 4,
            Name : 'Amit Awasthi',
            complaint : 'hsadfluidfbuil',
            type : 'Plumber',
            status : 'Resolved',
            date : '17/09/22 3:15PM'
        },
        {
            id: 5,
            Name : 'Amit Awasthi',
            complaint : 'jaksfhlaudfh',
            type : 'Carpenter',
            status : 'Pending',
            date : '17/09/22 3:15PM'
        },
        {
            id: 6,
            Name : 'Amit Awasthi',
            complaint : 'uyewrpweoi',
            type : 'Carpenter',
            status : 'Resolved',
            date : '17/09/22 3:15PM'
        },
    ]
*/
