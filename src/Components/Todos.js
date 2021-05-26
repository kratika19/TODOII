import React from 'react'
import TodoItem from "./TodoItem";
export default function Todos(props) {

    const style1 = {
        "margin-top": "150px",
        "font-family": "monospace",
    }
    const style2 = {
        "color": "#777575",
        "font-family": "unset",
    }
    return (
        <div className="container text-center" style={style1}>
            <h2>TODO LIST</h2>
            <hr />
            {   props.todos.length === 0 ? <p style={style2}>------No Todo to display------</p> : props.todos.map((todo) => {
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
            })
            }

        </div>
    )
}
