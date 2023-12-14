import { Component } from '@angular/core';
import { Task, TaskType } from 'src/app/models/Task';

function getStorage() {
  const todoListString = localStorage.getItem('todoList');
  if (todoListString) {
    const todoList = JSON.parse(todoListString);
    return todoList;
  }
  return [];
}

function setStorage(todoList: Task[] = []): void {
  const todoListString: string = JSON.stringify(todoList);
  localStorage.setItem('todoList', todoListString);  
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  task: TaskType = {
    title: '',
    description: ''
  }
  toDoList: Task[] = [] // getStorage();
  taskType!: string;

  addTask(): void {
    if (!this.task.title || !this.task.description) {
      alert('El título y la descripción son obligatorios');
      return;
    }
    const toDo = new Task(this.task.title, this.task.description); 
    this.toDoList.unshift(toDo);
    // setStorage(this.toDoList);
    this.task.title = '';
    this.task.description = '';
  }

  edit(): void {
    
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
