
type taskStatus = "pendente" | "fazendo" | "concluida";

class Task {
    private name: string;
    private status: taskStatus;

    public constructor(name: string, status: taskStatus) {
        this.name = name;
        this.status = status;
    }

    public getStatus(): taskStatus {
        return this.status;
    }

    public toString(): string {
        return `${this.name} - ${this.status}`
    }

}


class Manager {
    private tasks: Array<Task>;

    public constructor() {
        this.tasks = [];
    }

    public createTask(name: string, status: taskStatus): void {
        this.tasks.push(new Task(name, status));
    };

    public getTasks(): Array<Task> {
        return this.tasks;
    };

    public listTasks(): void {
        return this.tasks.forEach(task => console.log(task));
    };

    public getTasksByStatus(status: taskStatus): Array<Task> {
        return this.tasks.filter(task => task.getStatus() === status);
    };
    public qtdFinishedTaks(): number {
        return this.tasks.filter(task => task.getStatus() === "concluida").length;
    };
}
