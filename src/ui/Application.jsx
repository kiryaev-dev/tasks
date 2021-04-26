import React, {useState} from "react"
import "./Application.css"

import {Fab, Grid, GridList} from "@material-ui/core"
import {AddOutlined} from "@material-ui/icons"
import TaskSheet from "./TaskSheet"
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

    function remove(sheet) {
        setSheets(sheets.filter(it => it !== sheet))
    }

    function closeDialog() {
        setCurrentDialog(dialogs.none)
    }

    return (
        <main className="application">
            <ul className="sheets-layout">
                {
                    sheets.map(it => (
                        <li key={it.uuid}>
                            <TaskSheet
                                model={it}
                                onRemove={_ => remove(it)} />
                        </li>
                    ))
                }
            </ul>

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