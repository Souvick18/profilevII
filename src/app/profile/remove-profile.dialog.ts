import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AppService } from '../app.service';

@Component({
    selector: 'app-removeprofile-dialog',
    templateUrl: 'remove-profile.dialog.html',
  })

  export class RemoveProfileDialogComponent {
    serviceResponseProgress = false;
    srpColor = 'primary';
    srpMode = 'indeterminate';
    srpValue = 60;

    userName: string;
    userId: number;
    profileId: string;

    constructor(private dialogref: MatDialogRef<RemoveProfileDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data, private appService: AppService) {
        this.userId = data.userId;
        this.profileId = data.profileId;
        this.userName = data.userName;
    }

    eventCallNo() {
      this.dialogref.close('No');
    }

    eventCallYes() {
      this.serviceResponseProgress = true;

      const removeRequest = {status: 'D',
                              modified_by: this.userId,
                              modified_at: new Date()};
      this.appService.deactivateProfile(this.profileId, removeRequest).subscribe((data) => {
        this.serviceResponseProgress = false;
        this.dialogref.close('Yes');
      });
    }
  }
