import React, {useState} from "react";

const ShowInput = (props) => {
    if (props.Button) {
        return (<>
            <input onChange={(event)=>props.Change(event)}/>
            <button onClick={(event) => props.Create(event)}>Save</button>
        </>);
    } else {
        return <button onClick={props.changeButton}>edit</button>
    }
    // eslint-disable-next-line no-unreachable


}

/* This is the separate component for a button component */
function InputEditWindow(props) {
    const [Button, setButton] = useState(false)
    const [inputValue, SetInput] = useState()
    const Change = (event) => {
        SetInput(event.target.value)

    }
    const Create = ()=> {

        props.ChangeDeleteId(props.id, "change",inputValue )
        setButton(!Button)
    }

    const changeButton = () => {
        setButton(!Button)
    }

    return (

            <ShowInput Button={Button} checkEvent={Change} changeButton={changeButton} Create={Create} Change={Change}/>


    )

}

export default InputEditWindow
