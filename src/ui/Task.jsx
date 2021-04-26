import React, {useState} from "react"
import "./Task.css"

import Radio from "@material-ui/core/Radio"
import {ButtonBase, FormControlLabel, TextField, Typography} from "@material-ui/core"
import {IconButton} from "@material-ui/core"
import {AddOutlined, CancelOutlined, RestoreOutlined} from "@material-ui/icons"
import TaskModel from "../data/models/Task"

function Task({model, isCompleted = false, onComplete = _ => {}}) {
    const {title} = model

    return <FormControlLabel
        className="task"
        control={<Radio />}
        label={title}
        onClick={onComplete}
        disabled={isCompleted}
        checked={isCompleted} />
}

export function PendingTask({model, onComplete = _ => {}}) {
    return (
        <li>
            <Task model={model} onComplete={onComplete} />
        </li>
    )
}

export function CompletedTask({model}) {
    return (
        <li className="completed-task">
            <Task model={model} isCompleted={true} />
        </li>
    )
}

export function AddingTask({onAdd = _ => {}}) {
    const [isAdding, setAdding] = useState(false)
    const [message, setMessage] = useState("")

    function handleKeyPressed(key) {
        if (key !== "Enter")
            return

        onAdd(new TaskModel(message))
        clear()
    }

    function clear() {
        setAdding(false)
        setMessage("")
    }

    const AddButton = (
        <ButtonBase className="container" onClick={_ => setAdding(true)} >
            <AddOutlined color="primary" className="icon" />
            <Typography variant="overline" className="hint">Add a task</Typography>
        </ButtonBase>
    )

    const CancelButton = (
        <div className="container">
            <IconButton color="primary" className="icon" onClick={clear} >
                <CancelOutlined />
            </IconButton>
            <TextField
                className="message"
                autoFocus={true}
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={key => handleKeyPressed(key.code)} />
        </div>
    )

    return isAdding ? CancelButton : AddButton
}

