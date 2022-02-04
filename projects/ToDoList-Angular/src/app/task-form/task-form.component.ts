import { Component, EventEmitter, Output } from '@angular/core';
import { Priorities } from 'src/assets/js/Priorities';
import { Task } from 'src/assets/js/Task';

@Component({
  selector: 'taskForm',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  
  @Output() taskCreate: EventEmitter<any> = new EventEmitter();

  public taskName: string;
  public taskState: boolean;
  public taskPriority: Priorities;

  
  public taskPriorityClasses: Function = this.priorityClasses;

  constructor() { 
    this.taskName = '';
    this.taskState = false;
    this.taskPriority = Priorities.BAJA;
  }

  public create(): void {
    let task = new Task();
    task.setNombre(this.taskName);
    task.setFecha(new Date().getTime());
    task.setCompleted(this.taskState);
    task.setPriority(this.taskPriority);
    this.taskCreate.emit(task);

    this.taskName = '';
    this.taskState = false;
    this.taskPriority = Priorities.BAJA;
  }

  public nextPriority(): void {
    let selectedID = this.taskPriority.getId();
    switch (selectedID) {
      case 0:
      case 1:
        this.taskPriority = Priorities.getByID(selectedID + 1);
        break;
      default:
        this.taskPriority = Priorities.BAJA;
        break;
    }
  }

  public priorityClasses(): string {
    return 'task-priority ' + this.taskPriority.getExtraClass();
  }
}
