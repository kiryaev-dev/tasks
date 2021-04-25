import React, {useState} from "react"
import "./TaskSheet.css"

import Card from "@material-ui/core/Card"
import {Divider, List, Typography} from "@material-ui/core"
import {AddingTask, PendingTask} from "./Task"

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

    function add(task) {
        model.pending.add(task)
        updateState()
    }

    return (
        <Card className="task-sheet" elevation={1}>
            <header>
                <Typography variant="h5">{title}</Typography>
            </header>
            <Divider />
            <List className="pending-tasks">
                {
                    pending.map((task, index) =>
                        <PendingTask model={task} key={index} onComplete={_ => complete(task)} />)
                }
                <AddingTask onAdd={add} />
            </List>
        </Card>
    )
}