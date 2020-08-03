import React, {useState} from 'react';
import InputEditWindow from "./InputEditWindow";


function ButtonToDelete(props) {
    const [progressButton, setButton] = useState(true)


    const DeleteID = (ID) => {
        props.ChangeDeleteId(ID, "delete")
    }
    const ChangeProgressBut = () => {
        setButton(!progressButton)
    }


    const DoneUndoneBut = (props) => {
        if (props.progressButton) {
            return (
                <button className="btn-primary btn-sm" onClick={ChangeProgressBut}>Done</button>
            )
        } else {
            return (
                <button className="btn-primary btn-sm" onClick={ChangeProgressBut}>Undone</button>
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
            if (props.index > 0) {
                props.changeIndex(props.index, true)
            }
        } else {
            if (props.index < props.listLength - 1)
                props.changeIndex(props.index, false)
        }

    }


    return (
        <div>
            <ul>
                <PlainStrikeText progressButton={progressButton} title={props.title}/>

                <InputEditWindow id={props.id} ChangeDeleteId={props.ChangeDeleteId}/>

                <DoneUndoneBut progressButton={progressButton}/>
                <button className="btn-info btn-sm" onClick={() => ChangeIndex(true, props.index)}>
                    UP
                </button>
                <button className="btn-info btn-sm" onClick={() => ChangeIndex(false, props.index)}>
                    Down
                </button>

                <button className="btn-danger btn-sm" onClick={() => DeleteID(props.id)}> Delete</button>

            </ul>


        </div>
    );
}

export default ButtonToDelete;
