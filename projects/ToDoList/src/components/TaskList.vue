<!-- Css -->
<style>
  @import '../assets/css/tasklist.css';
</style>

<!-- JS -->
<script src="../assets/js/tasklist.js"></script>

<!-- Template -->
<template>
  <div id="todolist">
    <div id="todolist_search">
      <input class="todolist_search--task" type="text" v-model="searchedTaskName" placeholder="Search task" />
    </div>
    
    <div id="todolist_list">
      <header class="todolist_list--new-task task">
        <label for="new-task--state" class="task-status">
          <input id="new-task--state" type='checkbox' v-model="newTaskState">
        </label>
        <input class="task-name" type="text" v-model="newTask" placeholder="Nueva Tarea" title="Press 'Enter' to make the task" />
        <span class="task-action" v-on:click="addTarea">+</span>
      </header>

      <div class="todolist_list--tasks" v-if="tareas.length > 0">
        <div v-for="task in filtredTask" :key="task.nombre" class="task">
          <label :for="'tarea_'+task.nombre" class="task-status">
            <input :id="'tarea_'+task.nombre" type='checkbox' :checked="task.isCompleted" @change='updateTaskState(task)'>
          </label>
          <span class="task-name">{{task.nombre}}</span>
          <span class="task-action" v-on:click="remove(task)">&times;</span>
        </div>
      </div>

      <footer class="todolist_list--actions">
        <span>{{ completedTask }} Items left</span>

        <div>
          <input type="radio" id="all" value="All" v-model="filteredStatus" checked>
          <label class="clickable" for="all">All</label>

          <input type="radio" id="active" value="Active" v-model="filteredStatus">
          <label class="clickable" for="active">Active</label>

          <input type="radio" id="completed" value="Completed" v-model="filteredStatus">
          <label class="clickable" for="completed">Completed</label>
        </div>

        <span class="clickable" v-on:click="removeCompletedTasks()">Clear Completed</span>
      </footer>
    </div>
  </div>
</template>