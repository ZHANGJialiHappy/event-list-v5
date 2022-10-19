import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return
    }

    const newTodoList = [todo, ...todos];

    setTodos(newTodoList);

  };

  return (
    <div>
        <h1>The plan for today</h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList