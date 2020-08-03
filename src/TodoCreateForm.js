import React, {useState} from 'react';
import styled from 'styled-components'


const Title = styled.h3`
    padding:8px;
`

function TodoCreateForm(props) {
    const [inputValue, setInputValue] = useState()
    const inputOnChange = e => {
        setInputValue(e.target.value)

    }
    const onCreate = () => {
        props.ChangeList(inputValue)
        setInputValue("")
    }

    return (
        <center>
            <div>

                <Title>

                    <p className="input-group">
                        <input type="text" className=" input-group-sm" value={inputValue} onChange={inputOnChange}/>

                        <button type="button" className=" btn-primary btn-sm" onClick={onCreate}>
                            Create <span className="badge badge-light">{props.listLength}</span>
                        </button>
                    </p>

                </Title>

            </div>
        </center>

    );
}

export default TodoCreateForm;
