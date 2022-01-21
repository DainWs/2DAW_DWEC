import { PRIORITIES } from './constants.js';

export default {
    name: "TaskForm",
    data() {
        return {
            taskName: "",
            taskState: false,
            taskPriority: PRIORITIES[0]
        };
    },
    emits: ['addTask'],
    methods: {
        addTask() {
            let task = {
                nombre: this.taskName,
                fecha: new Date().getTime(),
                isCompleted: this.taskState,
                priority: this.taskPriority
            }

            this.$emit('addTask', task);

            this.taskName = '';
            this.taskState = false;
            this.taskPriority = PRIORITIES[0];
        },
        nextPriority() {
            let selectedID = this.taskPriority.id;
            switch (selectedID) {
                case 0:
                case 1:
                    this.taskPriority = PRIORITIES[selectedID + 1];
                    break;
                default:
                    this.taskPriority = PRIORITIES[0];
                    break;
            }
        }
    },
    computed: {
        priorityClasses() {
            return 'task-priority ' + this.taskPriority.extraClass;
        }
    },
};