import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core"
import React, {useState} from "react"
import "./AddTaskSheet.css"

import TaskSheet from "../../data/models/TaskSheet"

export default function AddTaskSheet({isOpen = false, onCancel = _ => {}, onAdd = _ => {}}) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState(null)

    function validateTextField(value) {
        if (value.trim().length < 1) {
            setError("Title cannot be empty")
            return false
        }

        setError(null)
        return true
    }

    function changeTitle(value) {
        setTitle(value)
        validateTextField(value)
    }

    function add() {
        if (validateTextField(title) === false)
            return

        onAdd(new TaskSheet(title.trim()))
        setTitle("")
        setError(null)
    }

    return (
        <Dialog open={isOpen} onClose={onCancel}>
            <DialogTitle>Add a task sheet</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter a title for the new task sheet.
                </DialogContentText>
                <DialogContentText>
                    Task sheets are useful for dividing tasks into groups for easier navigation between them.
                </DialogContentText>
                <TextField
                    onChange={event => changeTitle(event.target.value)}
                    error={Boolean(error)}
                    helperText={error}
                    value={title}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    label="Title" />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onCancel}>Cancel</Button>
                <Button color="primary" onClick={add}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}