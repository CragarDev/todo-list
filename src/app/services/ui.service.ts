import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTodo: boolean;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTodo(): void {
    this.showAddTodo = !this.showAddTodo;
    this.subject.next(this.showAddTodo);
  }

  onToggle(): Observable<any> { 
    return this.subject.asObservable();
  }
}
