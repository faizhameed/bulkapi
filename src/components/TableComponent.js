import React from 'react';


const TableComponent = (props)=>{



    return (
        <div className="App">
         {JSON.stringify(props.item)}
        </div>
      );
    
    
}

 
export default TableComponent;