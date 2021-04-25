
export default class Task {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.created = Date.now()
    }
}