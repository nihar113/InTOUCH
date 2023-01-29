import React from "react";

function Doctor(props){
    return (
        <div className="note">
          <h1>Name:{props.name}</h1>
          <p>Email:{props.referrer}</p>
          
        </div>
      );
}

export default Doctor;