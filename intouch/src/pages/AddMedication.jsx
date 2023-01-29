import React,{useState} from 'react';

function Form(){
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [freq, setFreq] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    function changeName(event){
        setName(event.target.value);
    }

    function changeAmount(event){
        setAmount(event.target.value);
    }

    function changeFreq(event){
        setFreq(event.target.value);
    }

    function changeStart(event){
        setStart(event.target.value);
    }

    function changeEnd(event){
        setEnd(event.target.value);
    }
    function handleClick(event){
        console.log("hi");
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={handleClick}>
                <label>Name:</label>
                    <input type="text" onChange={changeName}/>
                <label>Amount:</label>
                    <input type="number" onChange={changeAmount}/>
                <label>Frequency:</label>
                    <input type="text" onChange={changeFreq}/>
                <label>Start Date:</label>
                    <input type="text" onChange={changeStart}/>
                <label>End Date:</label>
                    <input type="text" onChange={changeEnd}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;