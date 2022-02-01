import { StorageManager } from './services/Storage.js';
import Task from '../../components/Task.vue';
import TaskForm from '../../components/TaskForm.vue';

export default {
    name: "TaskList",
    components: {
        TaskForm,
        Task
    },
    data() {
        return {
            searchedTaskName: "",
            filteredStatus: "All",
            tareas: []
        };
    },
    mounted() {
       this.load();
    },
    methods: {
        addTast(task) {
            task.id = this.tareas.length; 
            this.tareas.splice(0, 0, task);
            this.save();
        },
        removeTask(tarea) {
            this.tareas.splice(this.tareas.indexOf(tarea), 1);
            this.save();
        },
        removeCompletedTasks() {
            this.tareas = this.tareas.filter( (task) => !task.isCompleted );
            this.save();
        },
        load() {
            this.tareas = StorageManager.getTasks();
        },
        save() {
            StorageManager.saveTasks(this.tareas);
        }
    },
    computed: {
        completedTask() {
            return Array.from(this.tareas).filter( (task) => !task.isCompleted ).length;
        },
        filtredTask() {
            let filteredList = Array.from(this.tareas).filter((task) => {
                    let result = true;
                    if (this.filteredStatus != 'All') {
                        if (this.filteredStatus == 'Active') {
                            result = !task.isCompleted;
                        } else if (this.filteredStatus == 'Completed') {
                            result = task.isCompleted;
                        }
                    }
                    return result && task.nombre.includes(this.searchedTaskName);
                }
            );
            return Array
                .from(filteredList)
                .sort((taskA, taskB) => taskB.priority.id - taskA.priority.id);
        },
    },
};