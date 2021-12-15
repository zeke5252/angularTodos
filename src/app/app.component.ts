import { Component } from '@angular/core'
import { Todo } from './models/todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodo'

  inputTodo: String = ''
  todos: Todo[] = []

  ngOnInit (): void {
    this.todos = [
      {
        content: 'Hit the gym',
        completed: false
      },
      {
        content: 'Pay bills',
        completed: true
      },
      {
        content: 'Meet George',
        completed: false
      },
      {
        content: 'Buy eggs',
        completed: false
      },
      {
        content: 'Read a book',
        completed: false
      },
      {
        content: 'Organize office',
        completed: false
      }
    ]
  }
  addTodo (): void {
    if (this.inputTodo === '') {
      alert('You must write something!')
      return
    }
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ''
  }
  updateTodos (obj: { todo: Todo; index: number }): void {
    if (this.todos[obj.index]) this.todos[obj.index] = obj.todo
  }
}
