import React, { useState, useEffect } from 'react'
import Navbar from "./MyComponents/Navbar"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import AddTodo from './MyComponents/AddTodo'
import About from './MyComponents/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);


  }



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <BrowserRouter>
        <Navbar title="My Todo-List" />

        <Switch>
          <Route exact path="/" render= {() => {
            return (
              <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
            
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>



        <Footer />
        </BrowserRouter>

    </>
  );

}

export default App;
