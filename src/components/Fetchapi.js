import React, { Component } from 'react';
import {Modal,Table} from 'react-bootstrap';
import Person from './Person';






class Fetchapi extends Component {
  constructor(props,context) {
    super(props, context);
    
    this.state = { 
      datas:[],
      more_leads:true,
      show:false,   // for modal toggling
      currentPage:1,
      rowsPerPage:10,
      clickedData:{
        "First Name":"",
        "Last Name":"",
          "Email":"",
          "ID":"",
          "Country":"",
          "Mobile":""
        }
      };
      this.handleNext = this.handleNext.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleShow = this.handleShow.bind(this);
      // Modal Funtions

    }
        handleShow = () => {
          this.setState({ show: true });
        };
    
       handleHide= () => {
          this.setState({ show: false });
        };
    
    _isMounted =false; 
    /* To avoid memory leak, warning, just stop  updating component when the component is unmount
    Check componentDidmount, componentDidUpdate and componentWillUnmount, LifeCycle COmponents of React */
    
    // handling click on page
    handleNext() {
      if(this.state.more_leads)
      {
        var i= this.state.currentPage;
      i++;
      console.log("NExt page clicked",i);
      
        this.setState({
          currentPage: i
        });
      }
      else{
        const btn =document.getElementById("next")
        btn.classList.add("disabled");               //To avoid clicking button again when there is no leads 
        // available
      }

      }

     handlePrevious() {
       
        var i= this.state.currentPage;

        if(i>1)
      {
        i--;
      console.log("page",i);
        this.setState({
          currentPage:i
        });
      }
      else if(i===1||i<1){
        console.log("we are her")
        const btn =document.getElementById("previous")
        btn.classList.add("disabled");
      }
        }
componentDidMount() {
  this._isMounted = true;
  const {datas, rowsPerPage, currentPage } = this.state;
  console.log("page",currentPage);
  const url = `https://test190.cfstech.xyz/lead/retrieval/?page=${currentPage}&record_size=${rowsPerPage}`
  const headers = new Headers({
  "Content-Type":"application/json",
  "API-KEY":"1619552c-e09f-4ffc-b8c7-931f5cd104b5"
  })

  if(datas.length)
  if(currentPage ===1)
  {const btn =document.getElementById("previous")
        btn.classList.add("disabled");}

  let req = new Request(url,
    {
    method:'GET',
    headers: headers,
    })

  fetch(req)
    .then(response=> response.json())
    .then(users => {
        console.log(users.response);
        
        if(this._isMounted){

          this.setState({ datas: users.response,
            more_leads:users.is_more_leads_available
          })
        }
        
      });
 
}

componentDidUpdate() {
  this._isMounted = true;
  const {datas, rowsPerPage, currentPage } = this.state;

  const url = `https://test190.cfstech.xyz/lead/retrieval/?page=${currentPage}&record_size=${rowsPerPage}`
  const headers = new Headers({
  "Content-Type":"application/json",
  'Accept': 'application/json',
  "API-KEY":"1619552c-e09f-4ffc-b8c7-931f5cd104b5"
  })

  let req = new Request(url,
    {
    method:'GET',
    headers: headers,
    })

  fetch(req)
    .then(response=> response.json())
    .then(users => {
      
        if(this._isMounted)
        {
          this.setState({ datas: users.response,
          more_leads:users.is_more_leads_available
        })
      }
      
      
    });

      const btn =document.getElementById("previous")
      if(datas.length)
      if(currentPage ===1)
      {const btn =document.getElementById("previous")
            btn.classList.add("disabled");}
        else
        btn.classList.remove("disabled");
        

}
componentWillUnmount() {
  this._isMounted = false;
}



//Functions

handleDetails(data){
  console.log(data["First Name"])
  this.setState({
    clickedData:data,
    show:true
  })
 
}


    render() { 

        const {clickedData, datas} = this.state;

        // Logic for displaying datas


      // Logic for displaying page numbers
    
        return !datas.length ?
        <h2>Loading...</h2> :(
           <div>
           <Table striped bordered hover size="sm" id="myTable">
                    <thead>
                        <tr>
                       
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Lead Source</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {datas.map((data,i) => {
        return (<tr key={i}>
           
            <td>{data[ "ID"]}</td>
            <td onClick ={() => this.handleDetails(data)}className = "name" value ={JSON.stringify(data)}>{data["First Name"]}</td>
            <td>{data["Lead Source"]}</td>
            <td>{data["Email"]}</td>
        </tr>);
      })}
                    </tbody>
                </Table>
                <button className = "btn"variant="secondary" id ="previous" onClick = {this.handlePrevious}>Previous</button>
                <button className="btn"variant = "secondary" id = "next" onClick = {this.handleNext}>Next</button>
        {/* MODAL */}
        <button className="btn" variant="primary" onClick={this.handleShow}>
        Last Checked
        </button>
        <Modal
        size = "lg"
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             <h2>Personal Details</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <Person data = {clickedData} handleHide = {this.handleHide}/>
          </Modal.Body>
          <Modal.Footer>
            <button className = "btn"variant="secondary" onClick={this.handleHide}>
              Back
            </button>
          </Modal.Footer>
        </Modal>
           </div>
         );
    }
}
 
export default Fetchapi;