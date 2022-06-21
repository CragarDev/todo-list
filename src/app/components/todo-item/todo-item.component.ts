import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  faTrashAlt = faTrashAlt;


  constructor() { }

  ngOnInit(): void {
  }

}
