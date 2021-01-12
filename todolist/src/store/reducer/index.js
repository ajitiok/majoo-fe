import { SET_TODOS , ADD_TODO, DELETE_TODO } from '../actions'

const initialState = {
    todos : [],
    newTodo : []
}

export default function todoReducer ( state = initialState , action ){
    switch( action.type ){
        case SET_TODOS :
            return { ...state , todos : action.payload}
        case ADD_TODO : 
            return {...state, newTodo : [ ...state.newTodo , action.payload]}
        // case DELETE_TODO : 
        //     let newTodo = state.todos.filter((e) => e.id !== action.payload )
        //     return { ...state, todos : newTodo}

        default : 
            return state
    }
}