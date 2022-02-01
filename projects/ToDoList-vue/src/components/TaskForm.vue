<!-- JS -->
<script src="../assets/js/taskForm.js"></script>

<!-- Template -->
<template>
    <header class="todolist_list--new-task task">
        <label for="new-task--state" class="task-status rounded">
            <input id="new-task--state" type='checkbox' v-model="taskState">
        </label>
        <input class="task-name" type="text" v-model="taskName" placeholder="Nueva Tarea" title="Press 'Enter' to make the task" />
        <span :class="priorityClasses" v-on:click="nextPriority">{{taskPriority.nombre}}</span>
        <span class="task-action" v-on:click="addTask">+</span>
    </header>
</template>