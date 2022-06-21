import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Todo } from '../Todo';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }
}
