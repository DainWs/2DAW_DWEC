<!-- Css -->
<style>
  @import '../assets/css/tasklist.css';
</style>

<!-- JS -->
<script src="../assets/js/tasklist.js"></script>

<!-- Template -->
<template>
  <div id="todolist">
    <div>
      <h1 class="title">ToDo Lists</h1>
    </div>

    <div id="todolist_search">
      <input class="todolist_search--task" type="text" v-model="searchedTaskName" placeholder="Search task" />
    </div>
    
    <div id="todolist_list">
      <TaskForm v-on:addTask="addTast"/>

      <div class="todolist_list--tasks" v-if="tareas.length > 0">
        <transition-group name="list">
          <Task v-for="task in filtredTask" 
            :key="task.id" 
            :task="task" 
            @taskChange="save"
            @removeTask="removeTask"/>
        </transition-group>
      </div>

      <footer class="todolist_list--actions">
        <span>{{ completedTask }} Items left</span>

        <div>
          <div>
            <input type="radio" id="all" value="All" v-model="filteredStatus" checked>
            <label class="clickable" for="all">All</label>
          </div>
          <div>
            <input type="radio" id="active" value="Active" v-model="filteredStatus">
            <label class="clickable" for="active">Active</label>
          </div>
          <div>
            <input type="radio" id="completed" value="Completed" v-model="filteredStatus">
            <label class="clickable" for="completed">Completed</label>
          </div>
        </div>

        <span class="clickable" v-on:click="removeCompletedTasks()">Clear Completed</span>
      </footer>
    </div>
  </div>
</template>