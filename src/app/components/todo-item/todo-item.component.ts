import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter(); 
  @Output() onToggleComplete: EventEmitter<Todo> = new EventEmitter();
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todo) {
    // console.log('toggle');
    this.onToggleComplete.emit(todo);
  }


}
