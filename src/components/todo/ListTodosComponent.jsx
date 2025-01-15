import { useState, useEffect } from "react"
import { retrieveAllTodosForUsername, deleteTodoApi } from "./api/TodoApiService"

function ListTodosComponent() {

    const [todos, setTodos] = useState([])

    const [message,setMessage] = useState(null)

    useEffect ( () => refreshTodos(), [])

    function refreshTodos() {
        retrieveAllTodosForUsername('in28minutes')
        .then(response => setTodos(response.data))
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi('in28minutes', id)
        .then(
            () => {
                setMessage(`Delete of todo with id = ${id} successful`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning"
                                        onClick={() => deleteTodo(todo.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent