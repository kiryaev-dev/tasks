import React, {useState} from "react"
import "./Application.css"

import {Fab} from "@material-ui/core"
import {AddOutlined} from "@material-ui/icons"
import AddTaskSheetDialog from "./dialogs/AddTaskSheet"

const dialogs = {
    none: 0,
    addTaskSheet: 1
}

export default function Application() {
    const [currentDialog, setCurrentDialog] = useState(dialogs.none)
    const [sheets, setSheets] = useState([])

    function add(sheet) {
        setSheets(sheets.concat([sheet]))
        closeDialog()
    }

    function closeDialog() {
        setCurrentDialog(dialogs.none)
    }

    return (
        <main className="application">
            <Fab
                onClick={_ => setCurrentDialog(dialogs.addTaskSheet)}
                variant="extended"
                className="add-sheet-button"
                color="secondary" >
                <AddOutlined className="icon" /> Add sheet
            </Fab>
            <AddTaskSheetDialog
                onAdd={add}
                onCancel={closeDialog}
                isOpen={currentDialog === dialogs.addTaskSheet} />
        </main>
    )
}