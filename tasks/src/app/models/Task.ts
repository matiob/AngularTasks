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
  private isEdited: boolean;
  private date: Date;

  constructor(title: string, description: string) {
    this.task.title = title;
    this.task.description = description;
    this.isDone = false;
    this.isDeleted = false;
    this.isEdited = false;
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

  getIsEdited(): boolean {
    return this.isEdited;
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

  setIsEdited(isEdited: boolean): void {
    this.isEdited = isEdited;
  }

  toggleDone(): void {
    this.isDone = !this.isDone;
  }
  toggleDelete(): void {
    this.isDeleted = !this.isDeleted;
  }
  toggleEdited(): void {
    this.isEdited = !this.isEdited;
  }
}
