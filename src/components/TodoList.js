import React from 'react'
import "./todolist.css"

function TodoList({ todos, deleteTodo }) {
    return (
        <>
            <div className='cardbg'>
                <div className="my-4" style={{ width: "100%", margin: "auto" }}>
                    <div className='my-3 card-content' >
                        <h3>{todos.message}</h3>
                        <i onClick={() => { deleteTodo(todos.id) }} className="fa-regular fa-trash-can"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList