import React, {useState} from 'react';
import InputEditWindow from "./InputEditWindow";


function ButtonToDelete(props) {
    const [progressButton, setButton] = useState(true)


    const DeleteID = (ID) => {
        console.log(ID)
        props.ChangeDeleteId(ID, "delete")
    }
    const ChangeProgressBut = () => {
        setButton(!progressButton)
    }



    const DoneUndoneBut = (props) => {
        if (props.progressButton) {
            return (
                <button onClick={ChangeProgressBut}>Done</button>
            )
        } else {
            return (
                <button onClick={ChangeProgressBut}>Undone</button>
            )
        }
    }
    const PlainStrikeText = (props) => {

        if (props.progressButton) {
            return (
                <a>
                    {props.title}
                </a>
            )
        } else {
            return (

                <del>{props.title}</del>

            )
        }

    }
    const ChangeIndex = (Bool, index) => {
        if (Bool) {
            console.log(index)
            if (props.index > 0) {
                console.log(props.index)
                props.changeIndex(props.index, true)
            }
        } else {
            if (props.index < props.listLength - 1)
                props.changeIndex(props.index, false)
        }

    }


    return (
        <div>
            <PlainStrikeText progressButton={progressButton} title={props.title}/>
            <InputEditWindow id={props.id} ChangeDeleteId={props.ChangeDeleteId}/>
            <DoneUndoneBut progressButton={progressButton}/>
            <button className={props.color} onClick={() => ChangeIndex(true, props.index)}>
                UP
            </button>
            <button className={props.color} onClick={() => ChangeIndex(false, props.index)}>
                Down
            </button>

            <button className="btn-danger" onClick={() => DeleteID(props.id)}> Delete</button>


        </div>
    );
}

export default ButtonToDelete;
