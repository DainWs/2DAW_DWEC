const Counter = {
    data() {
        return {
            counter: 0,
            alumnos: ['jose', 'javier'],
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
        }
    }
}
window.onload = () => {
    Vue.createApp(Counter).mount('#aplicacionVue');
}
