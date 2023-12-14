export class Task {
    
  private task: string;
  private isDone: boolean;
  private isDeleted: boolean;
  private date: Date;

  constructor(value: string) {
    this.task = value;
    this.isDone = false;
    this.isDeleted = false;
    this.date = new Date();
  }

  getTask(): string {
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

  setTask(task: string): void {
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
