import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My ToDo List';
  showAddTodo: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTodo = value));
   } // runs when object is initialized

  ngOnInit(): void { // lifecycle method - use this most of the time for when the component loads
  }

  toggleAddTodo() {
    this.uiService.toggleAddTodo();
  }

}
