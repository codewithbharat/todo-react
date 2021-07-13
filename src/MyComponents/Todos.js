import React from 'react'
import TodoItem from "./TodoItem"
export default function Todos(props) {
    let myStyle ={
        minHeight : "67vh",
        paddingBottom: "3vh"
    }
    return (

        <div className="container" style={myStyle}>
            <h3 className="text-center"> Todos List</h3>
            <hr />
            {
                props.todos.length===0? "No Todos Left to Display":
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
            
        </div>
    )
}
