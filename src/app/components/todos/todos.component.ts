import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../../models/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = []
  @Output() outEmit = new EventEmitter<{ todo: Todo; index: number }>()

  ngOnInit (): void {}
  toggleTodo (i: number): void {
    this.todos[i].completed = !this.todos[i].completed
    this.outEmit.emit({ todo: this.todos[i], index: i })
  }
  deleteTodo (i: number): void {
    this.todos.splice(i, 1)
    this.outEmit.emit({ todo: this.todos[i], index: i })
  }
}
