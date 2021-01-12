import React , { useEffect }from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchTodos } from '../store/actions/actionType'
import Todo from '../components/Todo'
import TableHead from '../components/Table'

export default function Home() {

    const dispacth = useDispatch()
    const todos = useSelector((state) => state.todos)
    const newTodo = useSelector((state) => state.newTodo)

    useEffect(() => {
        dispacth(fetchTodos())
    }, [ dispacth])

    return (
        <div className="home">
            <h1 className="mt-5 mb-5">Todo Apps</h1>
            <table className="table table-striped text-center">
                <TableHead />
                <tbody>
                        {todos
                            .map((todo)=> (
                                <Todo todo={todo} key={todo.id} />
                        ))}

                        {newTodo
                            .map((todo) =>(
                                <Todo todo={todo} key={todo.id} />
                        ))}
                </tbody>
            </table>

        </div>
    )
}
