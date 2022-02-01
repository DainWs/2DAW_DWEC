import { Priorities } from "./Priorities";

class Task {
    private id: Number;
    private nombre: string;
    private fecha: Number;
    private completed: boolean;
    private priority: Priorities;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.fecha = new Date().getTime();
        this.completed = false;
        this.priority = Priorities.BAJA;
    }

    public setId(id: Number) {
        this.id = id;
    }

    public getId(): Number {
        return this.id;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setFecha(fecha: Number) {
        this.fecha = fecha;
    }

    public getFecha(): Number {
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