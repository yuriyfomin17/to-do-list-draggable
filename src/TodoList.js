import React from 'react';
import './App.css';
import ButtonToDelete from "./ButtonToDelete";
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
import uuid from "uuid-v4"



const Container = styled.div`
    border:2px solid lightgrey;
    border-radius:2px;
    padding:5px;
    margin-bottom:5px;
    
`;


function TodoList(props) {
    return (
        <div>

            {props.list.map((el, index) =>
                <Draggable key={uuid()} draggableId={String(el.id)} index={index}>
                    {(provided,snapshot)=>(
                        <Container
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <ButtonToDelete key={el.id} title={el.title}
                                            id={el.id} index={index}
                                            listLength={props.list.length}
                                            ChangeDeleteId={props.ChangeDeleteId}
                                            color={"btn btn-info"}
                                            changeIndex={props.ChangeIndex}/>

                        </Container>
                    )}
                </Draggable>
            )
            }

        </div>
    );
}

export default TodoList;
