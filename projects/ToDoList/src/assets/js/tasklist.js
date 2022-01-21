const PRIORITIES = [
    { id: 0, nombre: 'Baja', extraClass: 'baja-prioridad' },
    { id: 1, nombre: 'Media', extraClass: 'media-prioridad' },
    { id: 2, nombre: 'Alta', extraClass: 'alta-prioridad' }
]

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
            newTaskPriority: PRIORITIES[0]
        };
    },
    methods: {
        addTarea() {
            this.tareas.push({
                nombre: this.newTask,
                fecha: new Date(),
                isCompleted: this.newTaskState,
                priority: this.newTaskPriority
            });
            this.newTask = "";
        },
        nextPriority(task = undefined) {
            console.log(PRIORITIES);
            console.log(task);
            let selectedID = 0;
            if (task != undefined) {
                selectedID = task.priority.id;
            } else {
                selectedID = this.newTaskPriority.id;
            }

            let newId = undefined;
            switch (selectedID) {
                case 0:
                case 1:
                    newId = selectedID + 1;
                    break;
                default:
                    newId = 0;
                    break;
            }

            if (task != undefined) {
                task.priority = PRIORITIES[newId];
            } else {
                this.newTaskPriority = PRIORITIES[newId];
            }
        },
        formattedFecha(fecha) {
            return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} ${fecha.getDate()}/${fecha.getMonth() + 1
                }/${fecha.getFullYear()}`;
        },
        turnCompleteState(tarea) {
            tarea.isCompleted = !tarea.isCompleted;
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
        priorityClasses() {
            return 'task-action ' + this.newTaskPriority.extraClass;
        },
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