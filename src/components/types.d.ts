type Todo ={
    text: string;
    isCompleted: boolean;
}

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
