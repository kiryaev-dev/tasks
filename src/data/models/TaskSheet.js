import Task from "./Task"

export default class TaskSheet {
    constructor(title) {
        this.title = title
        this.pending = new Set()
        this.completed = new Set()
    }

    complete(task) {
        if (!(task instanceof Task))
            throw new Error("Not a task")

        if (!this.pending.has(task))
            throw new Error("The task doesn't belong to the sheet")

        if (this.completed.has(task))
            throw new Error("The task is already completed")

        this.pending.delete(task)
        this.completed.add(task)
    }

    restore(task) {
        if (!(task instanceof Task))
            throw new Error("Not a task")

        if (!this.completed.has(task))
            throw new Error("The task doesn't belong to the sheet")

        if (this.pending.has(task))
            throw new Error("The task has not been completed yet")

        this.pending.add(task)
        this.completed.delete(task)
    }
}