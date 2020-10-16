import { Component, OnInit } from '@angular/core';
import { BookletModel } from './booklet.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class LibraryComponent implements OnInit {
  isExpanded = true;
  bookletsInit: BookletModel[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.retrieveAllBooklets().subscribe((data) => {
      this.bookletsInit = data as any as BookletModel[];
    });
  }

  changeState(expanded: boolean) {
    this.isExpanded = expanded;
  }

}
