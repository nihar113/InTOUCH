import React from 'react';
import Med from '../components/Medication.jsx';
var Meds = [<Med name="Aderol" amount='3' freq="3/day" start="Jan 3 2023" end='Jan 4th 2023' referrer='John Doe'/>,<Med name="Tylenol" amount='3' freq="3/day" start="Jan 3 2023" end='Jan 4th 2023' referrer='John Doe'/>];

function Form(){
    
    return(
        <div>
            {Meds.map((noteItem, index) => {
                //console.log(noteItem.props.name,index);
                return (
                    <Med 
                        key={index}
                        id={index}
                        name={noteItem.props.name}
                        amount={noteItem.props.amount}
                        freq={noteItem.props.freq}
                        start={noteItem.props.start}
                        end={noteItem.props.end}
                        referrer={noteItem.props.referrer}
                    />
                );
            })}
        </div>
    );
}

export default Form;