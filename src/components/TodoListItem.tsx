import React from 'react'
import styled from 'styled-components'

interface TodoListItemProps {
    todo:Todo;
    toggleComplete: ToggleComplete;
}

const TodoListItem:React.FC<TodoListItemProps> = ({todo, toggleComplete}) => {

    return (
        <Li className = {todo.isCompleted?'completed':undefined} onClick={()=>toggleComplete(todo)}>
            <Label  >
                {todo.text}
          </Label>
        </Li>
    )
}

export default TodoListItem



const Label = styled.label`
    font-size:18px;
    font-weight:bold;
`

const Li =styled.li`
    width:200px;
    height:200px;
    background-color:yellow;
    margin:0 20px 20px 0;
    padding:4px;
    &.completed{
        background-color:green;
        color:#fff;
    }
`
