class StorageManager {
    static getTasks() {    
        let item = localStorage.getItem('tareas');
        let parsedItem = JSON.parse(item);
        return (parsedItem) ? parsedItem : [];
    }

    static saveTasks(tasks) {
        let jsonItem = JSON.stringify(tasks);
        localStorage.setItem('tareas', jsonItem);
    }
}

export { StorageManager };