export default {
    name: "TaskList",
    data() {
        return {
            searchedTaskName: "",
            filteredStatus: "All",
            tareas: [],
            tareasCompletadas: [],
            newTask: "",
            newTaskState: false,
        };
    },
    methods: {
        addTarea() {
            this.tareas.push({
                nombre: this.newTask,
                fecha: new Date(),
                isCompleted: this.newTaskState,
            });
            this.newTask = "";
        },
        formattedFecha(fecha) {
            return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} ${fecha.getDate()}/${fecha.getMonth() + 1
                }/${fecha.getFullYear()}`;
        },
        turnCompleteState(tarea) {
            tarea.isCompleted = !tarea.isCompleted;
        },
        getButtonText(tarea) {
            return tarea.isCompleted ? "Cancelar" : "Completar";
        },
        isTaskCompletedText(tarea) {
            return tarea.isCompleted ? "Completo" : "Incompleto";
        },
        updateTaskState(tarea) {
            this.turnCompleteState(tarea);
            if (tarea.isCompleted) {
                this.tareasCompletadas.push(tarea);
            } else {
                this.tareasCompletadas.splice(this.tareasCompletadas.indexOf(tarea), 1);
            }
        },
        remove(tarea) {
            this.tareas.splice(this.tareas.indexOf(tarea), 1);
        },
        removeCompletedTasks() {
            this.tareas = this.tareas.filter(
                (task) => !this.tareasCompletadas.includes(task));
        }
    },
    computed: {
        completedTask() {
            return Array.from(this.tareas).filter((task) => task.isCompleted).length;
        },
        filtredTask() {
            return Array.from(this.tareas).filter((task) => {
                    let result = true;
                    switch (this.filteredStatus) {
                        case 'Active':
                            if (task.isCompleted) result = false;
                            break;
                        case 'Completed':
                            if (!task.isCompleted) result = false;
                            break;
                    }

                    return result && task.nombre.includes(this.searchedTaskName);
                    
                }
            );
        },
    },
};