import { Task } from "./Task";

class StorageManager {
    public static getTasks(): Array<Task> {    
        let items = localStorage.getItem('tareas');
        let parsedItems: Array<Task>|null = null;
        if (items) {
            parsedItems = JSON.parse(items);
        }
        return (parsedItems) ? parsedItems : [];
    }

    public static saveTasks(tasks: Array<Task>): void {
        let jsonItem = JSON.stringify(tasks);
        localStorage.setItem('tareas', jsonItem);
    }
}

export { StorageManager };