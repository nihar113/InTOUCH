import React,{useState} from 'react';

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function changeName(event){
        setName(event.target.value);
    }

    function changeEmail(event){
        setEmail(event.target.value);
    }

    function handleClick(event){
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={handleClick}>
                <label>Name:</label>
                    <input type="text" onChange={changeName}/>
                <label>Email:</label>
                    <input type="email" onChange={changeEmail}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;