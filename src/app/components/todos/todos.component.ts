import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  inputTodo: String = "";
  todos: Todo[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    this.todos = [ 
      { 
        content: "Hit the gym",
        completed: false
      },
      { 
        content: "Pay bills",
        completed: true
      },
      { 
        content: "Meet George",
        completed: false
      },
      { 
        content: "Buy eggs",
        completed: false
      },
      { 
        content: "Read a book",
        completed: false
      },
      { 
        content: "Organize office",
        completed: false
      },
     ]
  }
  toggleTodo(i: number): void {
    this.todos[i].completed = !this.todos[i].completed;
  }
  deleteTodo(i: number): void {
    this.todos.splice(i, 1);
  }
  addTodo(): void {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = "";
  }
}
