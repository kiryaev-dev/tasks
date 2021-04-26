import React from "react"
import "./Application.css"

import {Fab} from "@material-ui/core"
import {AddOutlined} from "@material-ui/icons"

export default function Application() {
    return (
        <main className="application">
            <Fab variant="extended" className="add-sheet-button" color="secondary" >
                <AddOutlined className="icon" /> Add sheet
            </Fab>
        </main>
    )
}