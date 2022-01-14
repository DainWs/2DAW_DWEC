const Counter = {
    data() {
        return {
            counter: 0,
            alumnos: ['jose', 'javier']
        }
    },
    methods: {
        increment() {
            this.counter++;
        }
    }
}
window.onload = () => {
    Vue.createApp(Counter).mount('#aplicacionVue');
}
