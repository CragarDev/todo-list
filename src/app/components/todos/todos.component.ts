import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TODOS } from '../../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = TODOS;

  constructor() { }

  ngOnInit(): void {
  }

}
