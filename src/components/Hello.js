import React, { Fragment,Component } from 'react';



class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:'faiz'
     }
  }

  componentDidUpdate=()=>{
console.log("from heel",this.props.apiID)
  }
  render() { 
    return (    <Fragment>
      <h1>Welcome</h1>
    <h2>{this.state.name}</h2>
    <h3>{this.props.apiID}</h3>
      {/* Remove below button after test */}
      
   </Fragment>
 );
  }
}
 
export default Hello;
