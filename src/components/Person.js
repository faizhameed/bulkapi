import React from 'react';
import {Card} from 'react-bootstrap';
import './Person.css';

function Person (props){
    
    return (<div>
        
        

<Card style={{ width: '100%' }}>
  
  <Card.Body>

    <div className="totalContainer">
        <div className = "detailContainer">
        <h4 className="rtitle">First Name</h4>
        <h5 className="rvalue">:  {props.data["First Name"]}</h5>
        </div>
        <div className = "detailContainer">
        <h4 className="rtitle">Last Name</h4>
        <h5 className="rvalue">: {props.data["Last Name"]}</h5>
        </div>
        <div className = "detailContainer">
        <h4 className="rtitle">ID</h4>
        <h5 className="rvalue">: {props.data["ID"]}</h5>
        </div>
        <div className = "detailContainer">
        <h4 className="rtitle">Email</h4>
        <h5 className="rvalue">: {props.data["Email"]}</h5>
        </div>
        <div className = "detailContainer">
        <h4 className="rtitle">Country</h4>
        <h5 className="rvalue">: {props.data["Country"]}</h5>
        </div>

        <div className = "detailContainer">
        <h4 className="rtitle">Mobile</h4>
        <h5 className="rvalue">: {props.data["Mobile"]}</h5>
        </div>
        </div>
   
  </Card.Body>
</Card>
    </div>

    )
}
 
export default Person  ;