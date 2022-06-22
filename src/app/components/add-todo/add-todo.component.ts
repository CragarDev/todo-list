import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  title: string;
  dueDate: string;
  description: string;
  completed: boolean = false; 
  showAddTodo:boolean;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTodo = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.title, this.dueDate, this.description, this.completed)
    if (!this.title) {
      alert('Please enter a title');
      return;
    }

    const newTodo = {
      title: this.title,
      dueDate: this.dueDate,
      description: this.description,
      completed: this.completed,
    };

    this.onAddTodo.emit(newTodo);

    this.title = '';
    this.dueDate = '';
    this.description = '';
    this.completed = false;
  }
}
