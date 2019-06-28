import React, {useEffect, Fragment, useState } from 'react';
import Fetchapi from './Fetchapi';
import './Login.css';

const Login =(props)=>{

/* const a = input.value;
fetch(url header with a)
if(response.json !=="success")
return wrond api
 else if    how to call props from a function 

*/

const[apiID]=useState(props.apiID);
const[test]=useState("Testing");

useEffect(() => {
    console.log("apiID from login.js",props.apiID)
  });

const onload=()=> { 
    const msg = document.getElementById('api');
  // console.log(msg.value);
 props.setLogin(msg.value);

}

    return(
   <Fragment >
       <div className = "clogin">
       <h2>
           LOGIN 
       </h2>
      
       <input type="password" id = "api"placeholder="API KEY...">
       </input>
       <button className="btn"onClick ={() => onload()}>Enter</button>
       {
           !props.login?
           <div className="mbox">
           <h3>{props.message}</h3>
       </div>    
           : 
           <div><h1>Login:{props.login}</h1>
           <Fetchapi apiID ={apiID} test ={test}/>
           </div>
     }

       </div>
   </Fragment>
    )


}


export default Login;