import React from "react";

function Medication(props){
    return (
        <div className="note">
          <h1>Medication:{props.name}</h1>
          <p>Amount:{props.amount}</p>
          <p>Frequency:{props.freq}</p>
          <p>Start Date:{props.start}</p>
          <p>End Date:{props.end}</p>
          <p>Referrer Name:{props.referrer}</p>
          {/* <button onClick={handleClick}>
            <DeleteIcon />
          </button> */}
        </div>
      );
}

export default Medication;