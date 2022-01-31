<template>
  <div>
    <input type="text" v-model="name"/>
    <input type="button" @click="submit" value="submit"/>
  </div>
</template>

<script>
export default {
  name: 'Private',
  data() {
    return {
      name: ''
    };
  },
  methods: {
    submit() {
      this.$router.push('/hello/' + this.name);
    }
  }
}
</script>