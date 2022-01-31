<template>
  <div>
    <header>
      <img alt="Vue logo" src="./assets/logo.png">
      <nav id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link :to="'/hello/'+this.name">Hello</router-link>
      </nav>
    </header>
    <div>
      <input type="text" v-model="name"/>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name: ''
    };
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
</style>
