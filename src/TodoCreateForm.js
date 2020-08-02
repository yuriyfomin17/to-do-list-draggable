import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function TodoCreateForm(props) {
    const [inputValue, setInputValue] = useState()
    const inputOnChange = e => {
        console.log(e.target)
        setInputValue(e.target.value)

    }
    const onCreate = () => {
        props.ChangeList(inputValue)
        setInputValue("")
    }

    return (
        <div>
            To do Create Form
            <input value={inputValue} onChange={inputOnChange}/>

            <button onClick={onCreate}>
                Create
            </button>
        </div>
    );
}

export default TodoCreateForm;
