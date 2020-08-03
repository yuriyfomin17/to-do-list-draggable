import React, {useState} from 'react';
import styled from 'styled-components'


const Title = styled.h3`
    padding:8px;
`

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
            <Title>
                <input value={inputValue} onChange={inputOnChange}/>

                <button onClick={onCreate}>
                    Create
                </button>
            </Title>
        </div>
    );
}

export default TodoCreateForm;
