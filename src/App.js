import React, {useState} from 'react';
import './App.css';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import styled from 'styled-components'
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import uuid from "uuid-v4"


const Container = styled.div`
    margin:5px;
    border:1px solid lightgrey;
    border-radius:1px;
`;


const initialList = [
    {id: 1, title: "FirstToDo", done: false},
    {id: 2, title: "SecondToDo", done: false},
    {id: 3, title: "ThirdToDo", done: false}]

function App() {
    const [list, setList] = useState(initialList)
    const ChangeList = (title) => {
        console.log(title)
        const newItem = {
            id: Math.random() * 10,
            title: title,
            done: false
        }
        const UpdatedList = [...list, newItem]
        setList(UpdatedList)
    }
    const ChangeDeleteId = (ID, update, inputValue) => {
        if (update === "delete") {
            const CopiedList = list.slice()
            let Elem = CopiedList.length !== 0 ? CopiedList[0] : undefined
            if (Elem !== undefined) {
                let i = 0;
                while (Elem.id !== ID) {
                    i = i + 1;
                    Elem = CopiedList[i]
                }
                CopiedList.splice(i, 1)
                setList(CopiedList)
            }
        }
        if (update === "change") {
            const CopiedList = list.slice()
            console.log(ID)
            console.log(inputValue)
            let Elem = CopiedList.length !== 0 ? CopiedList[0] : undefined
            if (Elem !== undefined) {
                let i = 0;
                while (Elem.id !== ID) {
                    i = i + 1;
                    Elem = CopiedList[i]
                }
                Elem.title = inputValue
                setList(CopiedList)
            }

        }

    }
    const ChangeIndex = (index, UpDown) => {
        const CopiedList = list.slice()
        if (UpDown) {
            const topElem = CopiedList[index - 1]
            CopiedList[index - 1] = CopiedList[index]
            CopiedList[index] = topElem
        } else {
            const botElem = CopiedList[index + 1]
            CopiedList[index + 1] = CopiedList[index]
            CopiedList[index] = botElem
        }
        setList(CopiedList)
    }
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const CopiedList = list.slice()
        const itemDestination = CopiedList[result.destination.index]
        const itemSource = CopiedList[result.source.index]
        CopiedList[result.destination.index] = itemSource
        CopiedList[result.source.index] = itemDestination
        setList(CopiedList)


    }

    return (
        <div className="App">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="Droppable" key={uuid}>
                    {(provided, snapshot) => (
                        <Container
                            ref={provided.innerRef}
                            style={{backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey'}}
                            {...provided.droppableProps}
                        >
                            <TodoCreateForm ChangeList={ChangeList}/>
                            <TodoList list={list} ChangeDeleteId={ChangeDeleteId} ChangeIndex={ChangeIndex}/>
                            {provided.placeholder}
                        </Container>
                    )}

                </Droppable>
            </DragDropContext>

        </div>
    );
}

export default App;
