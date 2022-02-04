import { Priorities } from "./Priorities";

class Task {
    private id: number;
    private nombre: string;
    private fecha: number;
    private completed: boolean;
    private priority: Priorities;

    constructor(task: any = {id: 0, nombre: '', fecha: new Date().getTime(), completed: false, priority: Priorities.BAJA}) {
        this.id = task.id;
        this.nombre = task.nombre;
        this.fecha = task.fecha;
        this.completed = task.completed;
        if (task.priority instanceof Priorities) {
            this.priority = task.priority;
        } else {
            this.priority = Priorities.getByID(task.priority.id);
        }
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setFecha(fecha: number) {
        this.fecha = fecha;
    }

    public getFecha(): number {
        return this.fecha;
    }

    public setCompleted(completed: boolean) {
        this.completed = completed;
    }

    public isCompleted(): boolean {
        return this.completed;
    }

    public setPriority(priority: Priorities) {
        this.priority = priority;
    }

    public getPriority(): Priorities {
        return this.priority;
    }
}

export { Task };