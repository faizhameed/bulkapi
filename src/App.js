import React, {useEffect, useState } from 'react';
import './App.css';
import Fetchapi from './components/Fetchapi';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hello from './components/Hello';
import Login from './components/Login';




const App=()=> {
const [message,setMessage] = useState("");
const [login,setLogin] = useState(false);
const [apiID]=useState("1619552c-e09f-4ffc-b8c7-931f5cd104b5");


const setLoginCall = (msg)=>{
  
  if(msg === apiID)
 { setLogin(1);
    setMessage("Success");
}
  else
  setMessage("Wrong API");
}
useEffect(() => {
  console.log("apiID",apiID)
});


    return ((!login)?<Login apiID={apiID} message = {message} login ={login} setLogin ={setLoginCall}/>:<Router>
      <div className="App">
       <h1>
        Bulk Lead ​ Retrieval ​ API
        </h1>
        
        <button className="btn"  ><Link className="link"to={'/'}> Home </Link></button>
        <button className = "btn"><Link className="link"to={'/fetch'} > Fetch </Link></button>
        
      
    <Switch>
        <Route
    exact path='/'
    render={(props) => <Hello {...props} message={message} setMessage = {setMessage} apiID ={apiID}/>}
  />
       <Route path = '/fetch' render = {(props)=> <Fetchapi {...props} apiID = {apiID}/>}/>
        {/* <Route path = '/hello' render = {Hello}/> */}
        {/* 
        MEthod to send props to router for future Refrence
        <Route path = '/fetch' render = {(props)=> <Fetchapi {...props} apiID = {apiID}/>}/> */}
       {/*  <Route
    path='/dashboard'
    render={(props) => <componentname {...props} propname={proptopass} />}
  /> */}
    </Switch>
        
      </div>
      </Router>
        );
  
}
 
export default App;


