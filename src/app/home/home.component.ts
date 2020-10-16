import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isExpanded = true;

  constructor( ) { }

  ngOnInit() {}

  changeState(expanded: boolean) {
    this.isExpanded = expanded;
  }

}
