export type TaskType = {
  title: string,
  description: string
}
export class Task {
    
  private task: TaskType = {
    title: '',
    description: ''
  }
  private isDone: boolean;
  private isDeleted: boolean;
  private date: Date;

  constructor(title: string, description: string) {
    this.task.title = title;
    this.task.description = description;
    this.isDone = false;
    this.isDeleted = false;
    this.date = new Date();
  }

  getTask(): TaskType {
    return this.task;
  }

  getDate(): Date {
    return this.date;
  }

  getIsDeleted(): boolean {
    return this.isDeleted;
  }

  getIsDone(): boolean {
    return this.isDone;
  }

  setTask(task: TaskType): void {
    this.task = task;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  setIsDeleted(isDeleted: boolean): void {
    this.isDeleted = isDeleted;
  }

  setIsDone(isDone: boolean): void {
    this.isDone = isDone;
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }
  toggleDelete() {
    this.isDeleted = !this.isDeleted;
  }
}
