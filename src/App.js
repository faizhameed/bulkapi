import React, { useState } from 'react';
import './App.css';
import Fetchapi from './components/Fetchapi';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hello from './components/Hello';
import Login from './components/Login';




const App=()=> {
const [message,setMessage] = useState("");
const [login,setLogin] = useState(false);


const setLoginCall = (msg)=>{
  
  if(msg === "faiz")
 { setLogin(1);
    setMessage("Success");
}
  else
  setMessage("Wrong API");
}

    return ((!login)?<Login message = {message} login ={login} setLogin ={setLoginCall}/>:<Router>
      <div className="App">
       <h1>
        Bulk Lead ​ Retrieval ​ API
        </h1>
        
        <button className="btn"  ><Link className="link"to={'/'}> Home </Link></button>
        <button className = "btn"><Link className="link"to={'/fetch'} > Fetch </Link></button>
        
      
    <Switch>
        <Route
    exact path='/'
    render={(props) => <Hello {...props} message={message} setMessage = {setMessage}/>}
  />
        <Route path='/fetch' component={Fetchapi} />
        {/* <Route path = '/hello' render = {Hello}/> */}
        {/* 
        MEthod to send props to router for future Refrence
        <Route path = '/detail' render = {(props)=> <Person {...props} data = {this.state.clickedData}/>}/> */}
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


