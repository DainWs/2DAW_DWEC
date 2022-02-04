import { Component, OnInit } from '@angular/core';
import { Priorities } from 'src/assets/js/Priorities';
import { Task } from 'src/assets/js/Task';
import { StorageManager } from '../../assets/js/Storage';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  public tasks: Array<Task>;
  public filteredStatus: string;
  public searchedTaskName: string;

  constructor() { 
    this.tasks = [];
    this.filteredStatus = 'All';
    this.searchedTaskName = '';
  }

  ngOnInit(): void {
    this.tasks = StorageManager.getTasks();
  }

  public addTask(task: Task): void {
    task.setId(this.tasks.length); 
    this.tasks.splice(0, 0, task);
    this.save();
  }

  public removeTask(task: Task): void {
      this.tasks.splice(this.tasks.indexOf(task), 1);
      this.save();
  }

  public removeCompletedTasks() {
      this.tasks = this.tasks.filter( (task: Task) => !task.isCompleted() );
      this.save();
  }

  public save(): void {
    StorageManager.saveTasks(this.tasks);
  }

  public completedTask(): number {
    return Array.from(this.tasks).filter( (task: Task) => !task.isCompleted() ).length;
  }

  public filtredTask(): Array<Task> {
    let filteredList: Array<Task> = Array.from(this.tasks).filter((task: Task) => {
      let result: boolean = true;
      if (this.filteredStatus != 'All') {
        if (this.filteredStatus == 'Active') {
          result = !task.isCompleted();
        } else if (this.filteredStatus == 'Completed') {
          result = task.isCompleted();
        }
      }
      return result && task.getNombre().includes(this.searchedTaskName);
    });

    return Array
      .from(filteredList)
      .sort((taskA: Task, taskB: Task) => Priorities.compare(taskB.getPriority(), taskA.getPriority()));
  }
}
