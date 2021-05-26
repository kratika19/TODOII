import React from 'react'

export default function TodoItem({ todo, onDelete }) {
    let mystyle = {
        "max-width": "40rem",
        "max-height": "100rem",
        "border": "2px solid gainsboro",
        "border-radius": "40px",
        "margin-left": "auto",
        "margin-right": "auto",
        "font-family": "inherit",
        "letter-spacing": "2.5px",
        "padding": "30px 20px"
    }
    let mystyle1 = {
        "color": "#C02525",
        "size": "25px"
    }

    let style4 = {
        "font-family": "system-ui"
    }
    return (
        <>
            <div className="py-3 text-center">
                <div className="card text-white bg-dark" style={mystyle}>
                    <div className="card-header" style={mystyle1}></div>
                    <div className="card-body">
                        <h5 className="card-title">TITLE - {todo.title}</h5>
                        <hr />
                        <p className="card-text">Description - {todo.desc}</p>
                        <div class="d-grid gap-2 btn-lg">
                            <button class="btn" style={style4} type="button" onClick={() => { onDelete(todo) }}>   DELETE TODO   </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
