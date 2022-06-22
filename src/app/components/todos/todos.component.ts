import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../Todo';
// import { TODOS } from '../../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=> (this.todos = todos));
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(()=> (this.todos = this.todos.filter(t => t.id !== todo.id)));
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodoCompleted(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo)=> (this.todos.push(todo)));
  }
}

