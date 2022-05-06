import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import "./home.css"

function Home() {
    let initTodo;
    if (localStorage.getItem('todos') === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem('todos'))
    }
    const [text, settext] = useState("")
    const [todo, settodo] = useState(initTodo)

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todo))
    // }, [todo])

    const [id, setid] = useState(1)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            setid(id + 1);
        }
        settodo([...todo, { id: id, message: text }])
        settext("");
        localStorage.setItem('todos', JSON.stringify(todo))
    }

    const deleteTodo = (id) => {
        setid(id + 1)
        const newTodo = todo.filter((todo) => { return todo.id !== id });
        localStorage.setItem('todos', JSON.stringify(newTodo))
        settodo(newTodo);
    }


    const deleteAll = () => {
        localStorage.clear();
        settodo([])
        setid(1)
    }
    return (
        <div className='my-3' style={{ width: "50%", margin: "auto", backgroundColor: "rgb(171, 171, 207)", padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Todo</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" value={text} onChange={(e) => { settext(e.target.value) }} id="text" aria-describedby="text" />
                </div>
                <button disabled={!text} type="submit" className="btn btn-primary" style={{ padding: "5px 30px" }}>Add</button>
            </form>
            <div className='delete' style={{ marginBottom: "10px" }}>
                <button onClick={deleteAll}> Delete all <i className="fa-regular fa-trash-can"></i></button>
            </div>
            <hr></hr>
            {todo.length === 0 && "Note todos show"}
            {todo.map((todos) => {
                return <TodoList key={todos.id} todos={todos} deleteTodo={deleteTodo} />
            })}
        </div>
    )
}



export default Home