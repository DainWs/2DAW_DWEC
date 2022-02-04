import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priorities } from 'src/assets/js/Priorities';
import { Task } from 'src/assets/js/Task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html'
})
export class TaskComponent {

  @Input() task: Task = new Task();
  @Output() taskChange: EventEmitter<any> = new EventEmitter();
  @Output() removeTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public nextPriority(): void {
    let priority = this.task.getPriority();
    let newPriority = Priorities.BAJA;
    switch (priority.getId()) {
      case 0:
      case 1:
        newPriority = Priorities.getByID(priority.getId() + 1);
        break;
      default:
        newPriority = Priorities.BAJA;
        break;
    }
    
    this.task.setPriority(newPriority);
    this.taskChange.emit(this.task);
  }

  public updateTaskState(): void {
    this.task.setCompleted(!this.task.isCompleted());
    this.taskChange.emit(this.task);
  }

  public remove(): void {
    this.removeTask.emit(this.task);
  }

  public titleFecha(): string {
    let minutesLapseds = Math.trunc(((new Date().getTime() - this.task.getFecha()) / 1000) / 60);
    return 'Created in ' + new Date(this.task.getFecha()).toLocaleDateString() + ' elapsed time: ' + minutesLapseds + ' Minutes.';
  }

  public nameClasses(): string { 
    return 'task-name ' + ((this.task.isCompleted()) ? 'completed' : '');
  }

  public priorityClasses(): string {
    return 'task-priority ' + this.task.getPriority().getExtraClass();
  }
}
