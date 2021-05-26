import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {

    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be empty.");
        }
        else {
            props.addTodo(title, desc);
            setDesc("");
            setTitle("");
        }
    }

    const style1 = {
        "font-family": "monospace",
        "margin": "35px 0px",
    }
    const style2 = {
        "padding": "30px",
        "border": "2px solid gainsboro",
        "border-radius": "25px",
        "background-color": "#343a40",
        "margin": "30px 40px"
    }
    const style3 = {
        "color": "azure",
    }
    const style4 = {
        "margin-top": "20px",
        "margin-bottom": "20px",
    }

    return (
        <div className="container my-3 text-center w-50" >
            <h2 className="text-center" style={style1}>ADD TODO</h2>
            <hr />
            <div style={style2}>
                <form onSubmit={submit}>
                    <div className="mb-3 text-left" style={style3}>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                    </div>
                    <div className="mb-3 text-left" style={style3}>
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-md" style={style4}>ADD TODO</button>
                </form>
            </div>
        </div>
    )
}
