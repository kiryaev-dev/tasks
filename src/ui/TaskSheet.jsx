import React, {useState} from "react"
import "./TaskSheet.css"

import Card from "@material-ui/core/Card"
import {Divider, IconButton, List, Menu, MenuItem, Typography} from "@material-ui/core"
import {AddingTask, CompletedTask, PendingTask} from "./Task"
import {MoreVertOutlined} from "@material-ui/icons";

function SheetMenuButton({onRemove = _ => {}}) {
    const [anchorEl, setAnchorEl] = useState(null);

    function openMenu(event) {
        setAnchorEl(event.currentTarget)
    }

    function closeMenu() {
        setAnchorEl(null)
    }

    function remove() {
        closeMenu()
        onRemove()
    }

    return (
        <>
            <IconButton aria-haspopup={true} onClick={openMenu}>
                <MoreVertOutlined />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu} >
                <MenuItem onClick={remove}>Remove</MenuItem>
            </Menu>
        </>
    )
}

export default function TaskSheet({model, onRemove = _ => {}}) {
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
        <Card className="task-sheet" variant="outlined">
            <header>
                <Typography variant="h5">{title}</Typography>
                <SheetMenuButton onRemove={onRemove} />
            </header>
            <Divider />
            <List className="pending-tasks">
                {
                    pending.map(task =>
                        <PendingTask model={task} key={task.uuid} onComplete={_ => complete(task)} />)
                }
                <AddingTask onAdd={add} />
            </List>
        </Card>
    )
}