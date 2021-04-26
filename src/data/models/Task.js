import {v4 as generateUUID} from "uuid"

export default class Task {
    constructor(message) {
        this.title = message
        this.created = Date.now()
        this.uuid = generateUUID()
    }
}