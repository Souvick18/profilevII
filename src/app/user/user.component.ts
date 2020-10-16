import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  isExpanded = true;
  userFullName: string;
  userInit: UserModel;

  constructor( private appService: AppService) { }

  ngOnInit() {
    const userId = localStorage.getItem('bfs_buyerprofile_uid');
    this.userFullName = localStorage.getItem('bfs_buyerprofile_uflnm');

    this.appService.retrieveUserbyID(userId).subscribe((data) => {
      this.userInit = data as any as UserModel;
    });
  }

  changeState(expanded: boolean) {
    this.isExpanded = expanded;
  }

}
