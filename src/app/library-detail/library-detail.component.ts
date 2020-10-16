import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import { AppService } from '../app.service';
import { BookletModel } from '../library/booklet.model';
import { ProfileModel } from '../profile/profile.model';
import { ProfileCreateDialogComponent } from './profile-create.dialog';



@Component({
  selector: 'app-home',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})

export class LibraryDetailComponent implements OnInit {

  isExpanded = true;

  userId: string;
  bookletId: string;
  bookletName = 'Souvick';
  bookletInit: BookletModel;
  profilesInit: ProfileModel[] = [];

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

  constructor( private appActiveRoute: ActivatedRoute, private appService: AppService,
               private dialog: MatDialog, private appRouter: Router,
               private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userId = localStorage.getItem('bfs_buyerprofile_uid');
    this.bookletId = this.appActiveRoute.snapshot.paramMap.get('id');
    this.appService.retrieveBookletbyID(this.bookletId).subscribe((data) => {
      this.bookletInit = data as any as BookletModel;
      this.appService.retrieveAllProfilesByBookletID(this.bookletId).subscribe((data1) => {
        this.profilesInit = data1 as any as ProfileModel[];
        console.log(this.profilesInit);
      });
    });
  }

  changeState(expanded: boolean) {
    this.isExpanded = expanded;
  }

  addnewProfileModal() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = '81%';
    // dialogconfig.height = '80%';
    dialogconfig.data = {userId: Number(this.userId), bookletid: Number(this.bookletId)};
    const profileCreateRef = this.dialog.open(ProfileCreateDialogComponent, dialogconfig);
    profileCreateRef.afterClosed().subscribe((data) => {
      if (data === 'Successfully added New Profile') {
        this.snackBar.open(data, '', {
          duration: 3000,
          horizontalPosition: this.snackHPos,
          verticalPosition: this.snackVPos,
          panelClass: ['success-snackbar'],
        });

        this.appService.retrieveAllProfilesByBookletID(this.bookletId).subscribe((data1) => {
          this.profilesInit = data1 as any as ProfileModel[];
        });
      // } else if (data === 'Failed to add New Profile') {
      //   this.snackBar.open(data, '', {
      //     duration: 5000,
      //     horizontalPosition: this.snackHPos,
      //     verticalPosition: this.snackVPos,
      //     panelClass: ['danger-snackbar'],
      //   });
      }
    });
  }



}
