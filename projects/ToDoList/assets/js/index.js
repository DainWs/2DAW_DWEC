const ToDoList = {
    data() {
        return {
            searchedTarea: '',
            nuevaTarea: '',
            tareas: []
        }
    },
    methods: {
        addTarea() {
            this.tareas.push({ nombre: this.nuevaTarea, fecha: new Date(), isCompleted: false });
            this.nuevaTarea = '';
        },
        formattedFecha(fecha) {
            return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
        },
        turnCompleteState(tarea) {
            tarea.isCompleted = !tarea.isCompleted;
        },
        getButtonText(tarea) {
            return (tarea.isCompleted) ? 'Cancelar' : 'Completar';
        },
        isTaskCompletedText(tarea) {
            return (tarea.isCompleted) ? 'Completo' : 'Incompleto' ;
        },
        remove(tarea) {
            this.tareas.splice(this.tareas.indexOf(tarea), 1);
        }
    },
    computed: {
        completedTask() {
            return Array.from(this.tareas).filter((task) => task.isCompleted).length;
        },
        tareasFiltradas() {
            return Array.from(this.tareas).filter((task) => task.nombre.includes(this.searchedTarea));
        }
    }
}
window.onload = () => {
    Vue.createApp(ToDoList).mount('#todolist');
}
