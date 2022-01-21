<template>
  <TaskList/>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  height: 100vh;
  background: rgb(0,191,255);
  background: linear-gradient(180deg, rgba(0,191,255,1) 0%, rgba(135,225,255,1) 20%, rgba(255,255,255,1) 100%);
}
</style>
