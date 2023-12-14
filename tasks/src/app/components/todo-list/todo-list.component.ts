import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  task!: string;
  toDoList: Task[] = [];
  taskType!: string;

  addTask() {
    const toDo = new Task(this.task);
    this.toDoList.unshift(toDo);
    this.task = '';
  }

  setTaskType(taskType: string = 'all'): void {
    this.taskType = taskType;
  }

  showTasks(): Task[] {
    switch (this.taskType) {
      case 'done':
        const done: Task[] = this.toDoList.filter((task) => task.getIsDone());
        return done;
      case 'deleted':
        const deleted: Task[] = this.toDoList.filter((task) => task.getIsDeleted());
        return deleted;
      case 'pending':
        const pending: Task[] = this.toDoList.filter((task) => !task.getIsDone() && !task.getIsDeleted());
        return pending;
      default:
        return this.toDoList.filter(task => !task.getIsDeleted())
    }
  }
}
