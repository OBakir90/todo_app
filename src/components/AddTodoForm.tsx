import React, {useState, ChangeEvent, FormEvent} from 'react'
import styled from 'styled-components'

interface AddTodoProps {
    addTodo:AddTodo
}

const AddTodoForm:React.FC<AddTodoProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setNewTodo(e.target.value);
    }

    const handleSubmit =  (e:FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <Form>
            <Input type='text' placeholder='Add a Todo Note' value={newTodo} onChange ={handleChange} />
            <Button type='submit' onClick={handleSubmit}>Add Todo</Button>
        </Form>
    )
}

export default AddTodoForm


const Form =styled.form`
    width:80%;
    display:flex;
    align-items:center;
`

const Input =styled.input`
    width:70%;
    height:40px;
    border-radius:4%;
    padding: 0px 16px;
    background-color: #fff;
    color: #282828;
    outline: none;
    box-shadow: 0px 4px 20px 0px transparent;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
`

const Button =styled.button`
    color:#000;
    background-color:#CAA472;
    width:25%;
    height:40px;
    margin:5px;
    font-size:20px;
    font-weight:bold;
`