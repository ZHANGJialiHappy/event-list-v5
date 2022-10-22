import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
    const [input, setInput] = useState(edit ? edit.value : '');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={edit ? "edit the todo" : "add a todo"}
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef} />
            <button className="todo-button">{edit ? "Edit todo" : "Add todo"} </button>

        </form>
    )
}
export default TodoForm;