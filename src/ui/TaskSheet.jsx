import React, {useState} from "react"
import "./TaskSheet.css"

import Card from "@material-ui/core/Card"
import {Divider, List, Typography} from "@material-ui/core"
import {PendingTask} from "./Task"

export default function TaskSheet({model}) {
    const {title} = model
    const [pending, setPending] = useState(Array.from(model.pending))

    function updateState() {
        setPending(Array.from(model.pending))
    }

    function complete(task) {
        model.complete(task)
        updateState()
    }

    return (
        <Card className="task-sheet" elevation={1}>
            <Typography variant="h6">{title}</Typography>
            <Divider />
            <List>
                {
                    pending.map((task, index) =>
                        <PendingTask model={task} key={index} onComplete={_ => complete(task)} />)
                }
            </List>
        </Card>
    )
}