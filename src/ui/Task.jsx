import React from "react"
import "./Task.css"

import Radio from "@material-ui/core/Radio"
import {FormControlLabel} from "@material-ui/core";

function Task({model, isCompleted = false}) {
    const {title} = model

    return <FormControlLabel
        className="task"
        control={<Radio />}
        label={title}
        checked={isCompleted} />
}

export function PendingTask({model}) {
    return (
        <li>
            <Task model={model} />
        </li>
    )
}

