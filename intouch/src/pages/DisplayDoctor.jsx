import React from 'react';
import Doc from '../components/Doctor.jsx';
var Docs = [<Doc name="Aderol" email="tonyyang@aggienetwork.com"/>];

function Form(){
    
    return(
        <div>
            {Docs.map((noteItem, index) => {
                //console.log(noteItem.props.name,index);
                return (
                    <Doc 
                        key={index}
                        id={index}
                        name={noteItem.props.name}
                        email={noteItem.props.email}
                    />
                );
            })}
        </div>
    );
}

export default Form;