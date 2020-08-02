import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonToDelete from "./ButtonToDelete";

function TodoList(props) {


    return (
        <div>
            <ul>
                {props.list.map((el, index) => <ButtonToDelete key={el.id} title={el.title}
                                                               id={el.id} index={index}
                                                               listLength={props.list.length}
                                                               ChangeDeleteId={props.ChangeDeleteId}
                                                               color={"btn btn-info"}
                                                               changeIndex={props.ChangeIndex}/>)}

            </ul>


        </div>
    );
}

export default TodoList;
