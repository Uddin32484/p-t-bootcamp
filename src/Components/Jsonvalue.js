import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Jsonvalue.css';
function Jsonvalue(props) {
   const {num} = useParams();
   
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  
   
    return (
        <div>
          <div className="main">
        
             <h1>{`Sum :  ${JSON.stringify(num)}`}</h1>
             
              <button  type="button" className="btn btn-primary" onClick={handleClick}>Home Page</button>
            
          </div>
      
        </div>
    )
}

export default Jsonvalue
