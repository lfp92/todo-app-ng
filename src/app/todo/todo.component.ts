import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  id: number = 0;
  currentValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  nextId() {
    return this.id++;
  }

  handleEnter(event) {
    const {key, target} = event;
    if (key !== "Enter" || target.value.trim() === "") return null;
    this.addTask();
  }
  
  addTask() {
    const id = this.nextId();
    this.tasks.push({id, description: this.currentValue, completed: false});
    this.currentValue = "";
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(element => element.id !== id);
  }

  completeTask(id) {
    this.tasks.map(element => {
      if (element.id === id) element.completed = true;
      return element;
    })
  }
}

class Task {
  id: number;
  description: string;
  completed: boolean;
}