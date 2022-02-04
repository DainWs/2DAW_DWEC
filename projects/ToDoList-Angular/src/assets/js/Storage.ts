import { Task } from "./Task";

class StorageManager {
    public static getTasks(): Array<Task> {    
        let items = localStorage.getItem('tareas');
        let parsedItems: Array<Task>|null = null;
        if (items) {
            parsedItems = StorageManager.parseToTasks(items);
        }
        return (parsedItems) ? parsedItems : [];
    }

    private static parseToTasks(items: any){
        let parsedJson = JSON.parse(items);
        let tasks = [];
        for (let i = 0; i < parsedJson.length; i++) {
            let taskJson = parsedJson[i];
            tasks.push(new Task(taskJson));   
        }
        return tasks;
    }

    public static saveTasks(tasks: Array<Task>): void {
        let jsonItem = JSON.stringify(tasks);
        localStorage.setItem('tareas', jsonItem);
    }
}

export { StorageManager };