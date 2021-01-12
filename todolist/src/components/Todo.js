import React , { useState} from 'react'
import { useDispatch } from 'react-redux'
 
import { Button, Modal } from 'react-bootstrap';


export default function Todo (props){
    const dispatch = useDispatch()


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    

    return (
        <>
            <tr className="text-center">
                <td>{props.todo.title}</td>
                <td>{props.todo.status}</td>
                <td>{props.todo.createdAt}</td>
                <td><button className="btn btn-primary" onClick={handleShow}>Detail</button></td>
            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Todo with id {props.todo.id}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <h1>{props.todo.title}</h1>
                    <p>{props.todo.description}</p>    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Edit
                    </Button>
                    <Button variant="danger" onClick={handleShow}>
                        Delete  
                    </Button>
                </Modal.Footer>
            </Modal>
      </>
    )
}