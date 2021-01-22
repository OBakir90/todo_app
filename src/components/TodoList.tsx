import React from 'react'
import TodoListItem from './TodoListItem'
import styled from 'styled-components' 


interface TodoListProps {
    todos:Array<Todo>;
    toggleComplete: ToggleComplete;
}

const TodoList:React.FC<TodoListProps> = ({todos, toggleComplete}) => {
    return (
        <TodoBox>
            <Ul>
                {todos.map((todo, i) => {
                    return (
                        <TodoListItem key={i} todo={todo} toggleComplete={toggleComplete}/>
                    )
                })}
            </Ul>
        </TodoBox>

    )
}

export default TodoList


const TodoBox = styled.div`
    display:flex;
    width:100%;
    height:650px;
`

const Ul =styled.ul`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    list-style-type:none;
`