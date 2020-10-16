import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { BookletCompositeModel } from './booklet-composite.model';

@Component({
  selector: 'app-booklet-composite',
  templateUrl: './booklet-composite.component.html',
  styleUrls: ['./booklet-composite.component.css']
})

export class BookletCompositeComponent implements OnInit {

  serviceResponseProgress = true;
  srpColor = 'primary';
  srpMode = 'indeterminate';
  srpValue = 60;

  bookletId: string;
  bookletName: string;

  bookletCompositeInit: BookletCompositeModel;

  constructor( private appActiveRoute: ActivatedRoute, private appService: AppService ) { }

  ngOnInit() {
    this.bookletId = this.appActiveRoute.snapshot.queryParamMap.get('bklt_id');
    this.bookletName = this.appActiveRoute.snapshot.paramMap.get('name');
    this.appService.retrieveBookletCompositebyId(this.bookletId).subscribe((data) => {
      this.bookletCompositeInit = data as any as BookletCompositeModel;
      this.serviceResponseProgress = false;
    });
  }


}
