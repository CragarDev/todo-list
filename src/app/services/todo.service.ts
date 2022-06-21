import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Todo } from '../Todo';
// import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/todos';

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    // const todos = of(TODOS);
    return this.http.get<Todo[]>(this.apiUrl);
  }
}
