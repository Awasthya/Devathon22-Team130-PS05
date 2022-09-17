
import './App.css';

import './Components/Register.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Mycomplaint from './Components/Mycomplaint';
import Newcomplaint from './Components/Newcomplaint';
import Register from './Components/Register';
import MyInfo from './Components/MyInfo';
import userInfoUpdate from './Components/Portfolio/Updateform/userInfoUpdate';
import updateComplaint from './Components/Portfolio/Updateform/updateComplaint';
import viewcomplaint from './Components/ViewComplaints';
import updateExperience from './Components/Portfolio/Updateform/UpdateExperience';
import DeleteExperience from './Components/Portfolio/DeleteContent/DeleteExperience.js';
import DeleteComplaintdata from './Components/Portfolio/DeleteContent/Deletecomplaint.js';
import Logout from './Components/Logout.js';
import { BrowserRouter as Router ,Route , Switch } from "react-router-dom";
import NotFound  from './Components/NotFound';
import { createContext, useReducer } from 'react';
//import { useContext } from 'react';
import { initialState, reducer } from './reducer/usereducer';

export const UserContext = createContext();
const Routing = () => {
  return (
    <>
            <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Newcomplaint" component={Newcomplaint} />
        <Route exact path="/mycomplaint" component={Mycomplaint} />
        <Route  exact path="/MyInfo"component={MyInfo} />
        <Route  exact path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
          <Route path="/getuser/:id" component={userInfoUpdate} />
          <Route path="/updateComplaint/:id" component={updateComplaint} />
          <Route path="/updateExperience/:id" component={updateExperience} />
          <Route path="/DeleteExperience/:id" component={DeleteExperience} />
          <Route path="/viewcomplaint" component={viewcomplaint} />
          <Route path="/deleteComplaintdata/:id" component={DeleteComplaintdata} />
          <Route path="/logout" component={Logout} />
          
        <Route  component={NotFound} />
        </Switch>
    </>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Router>
        <UserContext.Provider value={{state,dispatch}}>

        <Navbar />
        <Routing/>
        </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;

//rafce()