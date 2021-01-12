import { SET_TODOS , ADD_TODO, DELETE_TODO } from '.'

export function fetchTodos () {
    return( dispatch ) => {
        fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
            .then(response => { return response.json()})
            .then(data => dispatch(setTodos(data)))
            .catch(err => console.log(err))
    }
}

export function setTodos (todos) {
    return {
        type : SET_TODOS,
        payload : todos
    }
}

export function addTodo(todo){
    return {
        type : ADD_TODO,
        payload : todo
    }
}

// export function deleteTodo(id){
//     return {
//         type : DELETE_TODO,
//         payload : id 
//     }
// }

// export function addTodo( todo){
//     return (dispatch)=> {
//         fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list" , {
//             method : 'POST',
//             headers : {
//                 "Content-Type" : "application/json"
//             },
//             body : JSON.stringify(todo)
//         })
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 let newTodo = {
//                     id : data.id,
//                     ... todo
//                 }
//                 dispatch({
//                     type : ADD_TODO,
//                     payload : newTodo
//                 })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }