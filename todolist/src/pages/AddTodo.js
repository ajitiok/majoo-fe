import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/actions/actionType'
import { useHistory } from 'react-router-dom'

export default function AddTodo(){

    const [title , setTitle ] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus ] = useState("0")
    const [createdAt, setCreatedAt] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    function inputAll(e){
        e.preventDefault()
        dispatch(addTodo({
            title,
            status,
            description,
            createdAt
        }))
        history.push('/')

    }
    return (
        <div className="home">
            <h1 className="mt-5 mb-5">Add New Todo</h1>
            <form onSubmit={inputAll}>
                <div className="form-row m-3">
                    <div className="col-4">
                        <label >Title</label>
                        <input 
                        type="text" 
                        className="form-control"  
                        placeholder="title" 
                        value = {title}
                        onChange= { (e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-row m-3">
                    <div className="col-4">
                        <label >Description</label>
                        <input 
                        type="text" 
                        className="form-control"  
                        placeholder="description" 
                        value = {description}
                        onChange= { (e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-row m-3">
                    <div className="col-4"> 
                        <label >Status</label>
                        <select 
                        className="form-control"
                        value={status}
                        onChange={ (e) => setStatus(e.target.value)} 
                         >
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div className="form-row m-3">
                    <div className="col-4">
                        <label >Description</label>
                        <input 
                        type="date" 
                        className="form-control"  
                        placeholder="Date" 
                        value = {createdAt}
                        onChange= { (e) => setCreatedAt(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-outline-info m-3" type="submit">Add Todo</button>
                
            </form>


        </div>
    )
}