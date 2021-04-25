import React from "react"
import "./Task.css"

import Radio from "@material-ui/core/Radio"
import {FormControlLabel} from "@material-ui/core"
import {IconButton} from "@material-ui/core"

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

export function CompletedTask({model, onRestore = _ => {}}) {
    return (
        <li className="completed-task">
            <Task model={model} isCompleted={true} />
            <IconButton color="primary" onClick={onRestore}>
                <RestoreOutlined />
            </IconButton>
        </li>
    )
}

