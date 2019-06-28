import React from 'react';
import './App.css';
import Fetchapi from './components/Fetchapi';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hello from './components/Hello';




const App=()=> {
 


    return (<Router>
      <div className="App">
       <h1>
        Bulk Lead ​ Retrieval ​ API
        </h1>

        <button className = "btn"><Link className="link"to={'/'} > Home </Link></button>
       
        <button className="btn"  ><Link className="link"to={'/hello'}> About </Link></button>
      
    <Switch>
        <Route exact path='/' component={Fetchapi} />
        <Route path = '/hello' render = {Hello}/>
        
        {/* 
        MEthod to send props to router for future Refrence
        <Route path = '/detail' render = {(props)=> <Person {...props} data = {this.state.clickedData}/>}/> */}
       {/*  <Route
    path='/dashboard'
    render={(props) => <Dashboard {...props} propname={proptopass} />}
  /> */}
    </Switch>
        
      </div>
      </Router>
        );
  
}
 
export default App;


