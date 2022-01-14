const ToDoList = {
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        }
    },
    methods: {
        addTarea() {
            this.tareas.push({ nombre: this.nuevaTarea, fecha: new Date() });
            this.nuevaTarea = '';
        }
    }
}
window.onload = () => {
    Vue.createApp(ToDoList).mount('#todolist');
}
