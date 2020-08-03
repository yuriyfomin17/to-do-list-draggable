import React, {useState} from 'react';
import './App.css';
import ButtonToDelete from "./ButtonToDelete";
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
import uuid from "uuid-v4"

const TaskList = styled.div`
    padding:8px;
`;
const Container = styled.div`
    border:1px solid lightgrey;
    border-radius:2px;
    padding:8px;
    margin-bottom:8px;
    background:${props =>(props.isDraggingOver?'lightgreen':'white')};
`;

function TodoList(props) {


    return (
        <div>

            {props.list.map((el, index) =>
                <Draggable key={uuid()} draggableId={String(el.id)} index={index}>
                    {(provided, snapshot) => (
                        <TaskList>
                            <Container

                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDragging}


                            >
                                <ButtonToDelete key={el.id} title={el.title}
                                                id={el.id} index={index}
                                                listLength={props.list.length}
                                                ChangeDeleteId={props.ChangeDeleteId}
                                                color={"btn btn-info"}
                                                changeIndex={props.ChangeIndex}

                                />

                            </Container>
                        </TaskList>
                    )}
                </Draggable>
            )
            }

        </div>
    );
}

export default TodoList;
