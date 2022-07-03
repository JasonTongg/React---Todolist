import React from 'react'
import Button from '../components/Button'

export default function Todoitem({text, id, open, openConfirm}) {

  return (
    <div className='todoitem' style={todolist}>
        <h3 className='todoitem--text' style={todotext}>{text}</h3>
        <div style={buttons}>
            <Button text="Edit" variant="success" action={() => open(id, text)}></Button>
            <Button text="Delete" variant="danger" action={() => openConfirm(id)}></Button>
        </div>
    </div>
  )
}

const todolist = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#61DAFB",
    padding: ".8rem 2rem",
    alignItems: "center",
    marginBottom: "1rem"
}

const todotext = {
    backgroundColor: "white",
    padding: ".5rem 1rem",
    width: "80%",
    borderRadius: "50px",
}

const buttons = {
    display: "flex",
}
