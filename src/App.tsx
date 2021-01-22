import React, {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import {GlobalStyle} from './components/GlobalStyle'
import styled from 'styled-components'
import bgimg from './images/background.jpg'

  const initialTodos:Array<Todo> = [
    {text:"Interview with SuperX", isCompleted:true},
    {text:"Study Cloud-AWS", isCompleted:false}
  ]

const App : React.FC =() =>{
  const [todos, setTodos] = useState <Array<Todo>>(initialTodos) 

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo:AddTodo = (newTodo)=>{
    setTodos ([...todos, {text:newTodo, isCompleted:false}])
  } 

  return (
    <Screen>
      <GlobalStyle/>
      <Frame>
        <TodoList todos={todos} toggleComplete={toggleComplete}/>
        <AddTodoForm addTodo={addTodo}/>
      </Frame>
    </Screen>
  );
}

export default App;



const Screen = styled.div`
  width:100%;
  min-height:100vh;
  background:no-repeat center/cover url(${bgimg});
  display:flex;
  justify-content:center;
`

const Frame=styled.div`
  margin-top:50px;
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
`