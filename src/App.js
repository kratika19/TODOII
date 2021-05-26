import Header from "../src/Components/Header"
import Todos from "../src/Components/Todos"
import Footer from "../src/Components/Footer"
import AddTodo from "../src/Components/AddTodo";
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null)
    initTodo = [];
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));
  const onDelete = (todo) => {
    console.log("I'm deleting it!!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log(`Adding todo with title as ${title} and desciption is ${desc}`);
    let sno;
    if (todos.length === 0)
      sno = 0;
    else
      sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="Todoii" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
