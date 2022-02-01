<!-- JS -->
<script src="../assets/js/task.js"></script>

<!-- Template -->
<template>
    <div class="task" :title="titleFecha" :id="task.fecha">
        <label :for="'tarea_'+task.nombre" class="task-status rounded">
            <input :id="'tarea_'+task.nombre" type='checkbox' :checked="task.isCompleted" @change='updateTaskState'>
        </label>
        <span :class="nameClasses">{{task.nombre}}</span>
        <span :class="priorityClasses" v-on:click="nextPriority">{{task.priority.nombre}}</span>
        <span class="task-action" v-on:click="remove">&times;</span>
    </div>
</template>