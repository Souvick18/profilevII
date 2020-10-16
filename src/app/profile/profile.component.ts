import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import { ProfileModel } from './profile.model';
import { RemoveProfileDialogComponent } from './remove-profile.dialog';
import { EditProfileDialogComponent } from './edit-profile.dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  isExpanded = true;

  serviceResponseProgress = true;
  srpColor = 'primary';
  srpMode = 'indeterminate';
  srpValue = 60;

  userId: string;
  profileInit: ProfileModel;
  profileId: string;
  firstName: string;

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

  constructor( private appActiveRoute: ActivatedRoute, private appService: AppService, private dialog: MatDialog,
               private snackBar: MatSnackBar, private appRouter: Router) { }

  ngOnInit() {
    this.profileId = this.appActiveRoute.snapshot.paramMap.get('id');
    this.userId = localStorage.getItem('bfs_buyerprofile_uid');
    this.appService.retrieveProfilebyId(this.profileId).subscribe((data) => {
      this.profileInit = data as any as ProfileModel;
      const fullname = this.profileInit.fullname;
      const nameSplitted = fullname.split(' ');
      this.firstName = nameSplitted[0];
      this.serviceResponseProgress = false;
    });
  }

  changeState(expanded: boolean) {
    this.isExpanded = expanded;
  }

  removeProfileDialog() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = '30%';
    // dialogconfig.height = '80%';
    dialogconfig.data = {userId: Number(this.userId), profileId: this.profileId, userName: this.profileInit.fullname};
    const profileDisableRef = this.dialog.open(RemoveProfileDialogComponent, dialogconfig);
    profileDisableRef.afterClosed().subscribe((data) => {
      if (data === 'Yes') {
        this.snackBar.open('Successfully removed ' + this.profileInit.fullname + ' from this booklet', '', {
          duration: 3000,
          horizontalPosition: this.snackHPos,
          verticalPosition: this.snackVPos,
          panelClass: ['success-snackbar'],
        });

        this.appRouter.navigate(['/profile-booklet']);
      }
    });
  }

  editProfileDialog() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = '81%';
    // dialogconfig.height = '80%';
    dialogconfig.data = {userId: Number(this.userId), selectedProfileData: this.profileInit};
    const profileEditRef = this.dialog.open(EditProfileDialogComponent, dialogconfig);
    profileEditRef.afterClosed().subscribe((data) => {
      if (data === 'Successfully updated profile!!') {
        this.snackBar.open(data, '', {
          duration: 3000,
          horizontalPosition: this.snackHPos,
          verticalPosition: this.snackVPos,
          panelClass: ['success-snackbar'],
        });

        this.appService.retrieveProfilebyId(this.profileId).subscribe((data1) => {
          this.profileInit = data1 as any as ProfileModel;
          const fullname = this.profileInit.fullname;
          const nameSplitted = fullname.split(' ');
          this.firstName = nameSplitted[0];
        });
      } else if (data === 'Failed to update profile!!') {
          this.snackBar.open(data, '', {
            duration: 5000,
            horizontalPosition: this.snackHPos,
            verticalPosition: this.snackVPos,
            panelClass: ['danger-snackbar'],
          });
      }
    });
  }

}
