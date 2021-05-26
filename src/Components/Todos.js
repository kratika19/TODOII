import React from 'react'
import TodoItem from "./TodoItem";
export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center">Todo List</h3>
            {
                props.todos.map((todo) => {

                    return <TodoItem todo={todo} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
