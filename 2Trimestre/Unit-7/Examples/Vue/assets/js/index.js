const Counter = {
    data() {
        return {
            counter: 0,
            alumnos: [],
            nuevoNombre: ''
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        add() {
            this.alumnos.push(this.nuevoNombre);
            this.nuevoNombre = '';
            console.log(this.alumnos);
        }
    }
}
window.onload = () => {
    Vue.createApp(Counter).mount('#aplicacionVue');
}
