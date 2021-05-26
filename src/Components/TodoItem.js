import React from 'react'

export default function TodoItem({ todo, onDelete }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {
                onDelete(todo)
            }}>
                Delete
            </button>
        </div>
    )
}
