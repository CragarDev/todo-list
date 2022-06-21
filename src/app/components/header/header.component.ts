import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { } // runs when object is initialized

  ngOnInit(): void { // lifecycle method - use this most of the time for when the component loads
  }

}
