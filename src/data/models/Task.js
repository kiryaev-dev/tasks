
export default class Task {
    constructor(message) {
        this.title = message
        this.created = Date.now()
    }
}