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

      {/* Remove below button after test */}
      
   </Fragment>
 );
  }
}
 
export default Hello;
