<template>
  <div id="todolist">
    <div>
      <input type="text" v-model="searchedTarea" placeholder="Search task" />
    </div>
    <div>
      <input type="text" v-model="nuevaTarea" placeholder="Nueva Tarea" />
      <button v-on:click="addTarea">A&ntilde;adir Tarea</button>
    </div>
    <div class="todo-list" v-if="tareas.length > 0">
        <div class="tasks-list">
            <div v-for="tarea in tareasFiltradas" :key="tarea.nombre" class="task">
                <label :for="'tarea-'+tarea.nombre">
                    <input :id="'tarea-'+tarea.nombre" type='checkbox' :checked="tarea.isCompleted" @change='updateTaskState(tarea)'>
                </label>
                <span class="task-name">{{tarea.nombre}}</span>
                <span class="task-remove" v-on:click="remove(tarea)">&times;</span>
            </div>
        </div>
        <button v-on:click="removeCompletedTasks()">Completar tareas seleccionadas</button>
        <span>Tienes {{ completedTask }} tareas completadas de {{ tareas.length }} tareas.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      searchedTarea: "",
      nuevaTarea: "",
      tareas: [],
      tareasCompletadas: [],
    };
  },
  methods: {
    addTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        fecha: new Date(),
        isCompleted: false,
      });
      this.nuevaTarea = "";
    },
    formattedFecha(fecha) {
      return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} ${fecha.getDate()}/${
        fecha.getMonth() + 1
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
    tareasFiltradas() {
      return Array.from(this.tareas).filter((task) =>
        task.nombre.includes(this.searchedTarea)
      );
    },
  },
};
</script>

<style>

.todo-list {
    border: 1pt solid gainsboro;
    border-radius: 10pt;
    margin: 0 20vw;
}

.tasks-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.tasks-list .task {
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 0 solid gainsboro;
}

/* this will change */
.tasks-list .task:nth-child(even) {border-width: 1pt 0;}
.tasks-list .task:first-of-type {border-top: 0;}
.tasks-list .task:last-of-type {border-bottom: 0;}

.tasks-list .task .task-name {
    flex-grow: 1;

    text-align: left;
}

.tasks-list .task > * {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
}

.tasks-list .task .task-name {
    width: unset;
    flex-grow: 1;

    text-align: left;
}

.tasks-list .task .task-remove {
    color: gainsboro;
    font-size: 2rem;
}

.tasks-list .task .task-remove:hover {
    cursor: pointer;

    color: gray;
    background-color: gainsboro;
}

.tasks-list .task .task-remove:active {
    color: gainsboro;
    background-color: gray;
}
</style>