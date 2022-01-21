import { PRIORITIES } from './constants.js';

export default {
    name: "Task",
    props: {
        task: Object
    },
    emits: ['taskChange', 'removeTask'],
    methods: {
        nextPriority() {
            let selectedID = this.task.priority.id;
            switch (selectedID) {
                case 0:
                case 1:
                    this.task.priority = PRIORITIES[selectedID + 1];
                    break;
                default:
                    this.task.priority = PRIORITIES[0];
                    break;
            }
            this.$emit('taskChange', this.task);
        },
        updateTaskState() {
            this.task.isCompleted = !this.task.isCompleted;
            this.$emit('taskChange', this.task);
        },
        remove() {
            this.$emit('removeTask', this.task);
        }
    },
    computed: {
        titleFecha() {
            let minutesLapseds = Math.trunc(((new Date().getTime() - this.task.fecha) / 1000) / 60);
            return 'Created in ' + new Date(this.task.fecha).toLocaleDateString() + ' elapsed time: ' + minutesLapseds + ' Minutes.';
        },
        nameClasses() { 
            return 'task-name ' + ((this.task.isCompleted) ? 'completed' : '');
        },
        priorityClasses() {
            return 'task-priority ' + this.task.priority.extraClass;
        }
    },
};