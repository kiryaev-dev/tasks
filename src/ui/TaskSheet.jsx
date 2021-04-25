import React, {useState} from "react"
import "./TaskSheet.css"

import Card from "@material-ui/core/Card"
import {Divider, List, Typography} from "@material-ui/core"
import {AddingTask, CompletedTask, PendingTask} from "./Task"

export default function TaskSheet({model}) {
    const {title} = model
    const [pending, setPending] = useState(Array.from(model.pending))
    const [completed, setCompleted] = useState(Array.from(model.completed))

    function updateState() {
        setPending(Array.from(model.pending))
        setCompleted(Array.from(model.completed))
    }

    function complete(task) {
        model.complete(task)
        updateState()
    }

    function add(task) {
        model.pending.add(task)
        updateState()
    }

    const CompletedList = (
        <>
            <Divider />
            <List>
                {
                    completed.map((task, index) =>
                        <CompletedTask model={task} key={index} onComplete={_ => complete(task)} />)
                }
            </List>
        </>
    )

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
            {completed.length > 0 ? CompletedList : undefined}
        </Card>
    )
}